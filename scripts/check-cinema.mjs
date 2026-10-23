// Exercise the actual geometry and draw pipeline without requiring a browser.
// This checks numeric/mesh validity, not shader compilation or visual quality.
import assert from 'node:assert/strict';
import { createSpineRenderer } from '../assets/spine-renderer.js';
import { createLogoFragments } from '../assets/logo-geometry.js';
import { LOGO_CONTOURS } from '../assets/brand-shape.js';
globalThis.devicePixelRatio=1;
const buffers=[];
const uniforms=new Map();
let draws=0;
const gl={
  VERTEX_SHADER:1,FRAGMENT_SHADER:2,COMPILE_STATUS:3,LINK_STATUS:4,ARRAY_BUFFER:5,STATIC_DRAW:6,FLOAT:7,DEPTH_TEST:8,LEQUAL:9,BLEND:10,SRC_ALPHA:11,ONE_MINUS_SRC_ALPHA:12,COLOR_BUFFER_BIT:16,DEPTH_BUFFER_BIT:32,TRIANGLES:33,
  createShader:()=>({}),shaderSource(){},compileShader(){},getShaderParameter:()=>true,
  createProgram:()=>({}),attachShader(){},linkProgram(){},getProgramParameter:()=>true,useProgram(){},
  createBuffer:()=>({}),bindBuffer(){},bufferData(target,data){assert.ok(data.length>0);assert.ok([...data].every(Number.isFinite));buffers.push(data);},
  getAttribLocation:()=>0,enableVertexAttribArray(){},vertexAttribPointer(){},getUniformLocation:(program,name)=>name,
  enable(){},depthFunc(){},blendFunc(){},viewport(){},clearColor(){},clear(){},
  uniform1f(name,value){assert.ok(Number.isFinite(value),name);uniforms.set(name,[value]);},
  uniform3f(name,...values){assert.ok(values.every(Number.isFinite),name);uniforms.set(name,values);},
  uniform3fv(name,values){assert.ok([...values].every(Number.isFinite),name);uniforms.set(name,values);},
  drawArrays(type,start,count){assert.ok(count>0 && count%3===0);assert.ok(uniforms.get('uScale')[0]>0);assert.ok(uniforms.get('uOpacity')[0]>=0 && uniforms.get('uOpacity')[0]<=1);draws++;}
};
for(const width of [320,390,800,1440]) {
  const canvas={getContext:()=>gl,getBoundingClientRect:()=>({width,height:900}),addEventListener(){},dataset:{}};
  const renderer=createSpineRenderer(canvas);
  for(let step=0;step<=100;step++) for(const arrival of [0,1]) renderer.render(step/100,{x:-1,y:1},arrival);
  assert.equal(canvas.dataset.renderer,'webgl');
  const destination={x:width*.2,y:400,width:105,height:146.24};
  renderer.render(1,{x:1,y:-1},1,destination);
  const scale=uniforms.get('uScale')[0],camera=uniforms.get('uCamera')[0];
  const position=uniforms.get('uPosition');
  const pixelScale=900*2.15/(2*(camera-.23*scale));
  const logoCenterY=position[1]-createLogoFragments().at(-1).center*scale;
  assert.ok(Math.abs(width/2+position[0]*pixelScale-destination.x-destination.width/2)<1e-6,'D aligns with wordmark horizontal center');
  assert.ok(Math.abs(450-logoCenterY*pixelScale-destination.y-destination.height/2)<1e-6,'D aligns with wordmark vertical center');
  assert.ok(Math.abs(6*scale*pixelScale-destination.height)<1e-6,'D aligns with wordmark height');
}
assert.equal(buffers.length,4*14*2);
for(let pair=0;pair<buffers.length;pair+=2) {
  assert.equal(buffers[pair].length,buffers[pair+1].length);
  const normals=buffers[pair+1];
  for(let i=0;i<normals.length;i+=3) assert.ok(Math.abs(Math.hypot(normals[i],normals[i+1],normals[i+2])-1)<.001,'Unit surface normals');
}
assert.equal(createSpineRenderer({getContext:()=>null}),null);
const fragments=createLogoFragments();
let frontArea=0;
for(const mesh of fragments)for(let i=0;i<mesh.positions.length;i+=9){
  const p=mesh.positions;
  if([p[i+2],p[i+5],p[i+8]].every(z=>Math.abs(z-.23)<1e-5))frontArea+=Math.abs((p[i+3]-p[i])*(p[i+7]-p[i+1])-(p[i+6]-p[i])*(p[i+4]-p[i+1]))/2;
}
const silhouetteArea=Math.abs(LOGO_CONTOURS.reduce((total,c)=>total+c.reduce((sum,p,i)=>{const q=c[(i+1)%c.length];return sum+p[0]*q[1]-q[0]*p[1]},0)/2,0))*.006**2;
assert.ok(frontArea<silhouetteArea && frontArea>silhouetteArea*.9,'Front surface preserves the inner cut, allowing for bevel inset');
assert.equal(LOGO_CONTOURS.length,2,'Supplied logo outer contour and continuous inner cut');
console.log(`Cinema numeric checks passed: 14 extruded logo fragments, preserved inner cut, unit normals, ${draws} draw calls over 4 sizes and 101 scroll positions, plus unavailable-WebGL fallback.`);
