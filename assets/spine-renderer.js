import { createLogoFragments } from './logo-geometry.js';
// Small purpose-built WebGL renderer. Geometry, lighting and camera remain live;
// no video, image sequence, remote runtime or scroll interception is involved.
const clamp = (value, low = 0, high = 1) => Math.min(high, Math.max(low, value));
const mix = (a, b, t) => a + (b - a) * t;
const ease = (a, b, value) => { const t = clamp((value - a) / (b - a)); return t * t * (3 - 2 * t); };

const vertexShader = `
attribute vec3 aPosition;
attribute vec3 aNormal;
uniform vec3 uPosition;
uniform vec3 uRotation;
uniform float uScale;
uniform float uAspect;
uniform float uCamera;
varying vec3 vNormal;
varying vec3 vWorld;
mat3 rx(float a){float c=cos(a),s=sin(a);return mat3(1.,0.,0.,0.,c,s,0.,-s,c);}
mat3 ry(float a){float c=cos(a),s=sin(a);return mat3(c,0.,-s,0.,1.,0.,s,0.,c);}
mat3 rz(float a){float c=cos(a),s=sin(a);return mat3(c,s,0.,-s,c,0.,0.,0.,1.);}
void main(){
 mat3 rotation=rz(uRotation.z)*ry(uRotation.y)*rx(uRotation.x);
 vec3 p=rotation*(aPosition*uScale)+uPosition;
 vNormal=rotation*aNormal;vWorld=p;
 vec3 view=p-vec3(0.,0.,uCamera);
 float near=.1;float far=80.;float focal=2.15;
 gl_Position=vec4(view.x*focal/uAspect,view.y*focal,(far+near)/(near-far)*view.z+2.*far*near/(near-far),-view.z);
}`;
const fragmentShader = `
precision highp float;
varying vec3 vNormal;
varying vec3 vWorld;
uniform float uCamera;
uniform float uTint;
uniform float uOpacity;
uniform float uFinish;
void main(){
 vec3 n=normalize(vNormal);if(!gl_FrontFacing)n=-n;
 vec3 view=normalize(vec3(0.,0.,uCamera)-vWorld);
 vec3 light=normalize(vec3(-3.5,6.,7.)-vWorld);
 vec3 halfVector=normalize(light+view);
 float diffuse=max(dot(n,light),0.);
 float fresnel=pow(1.-max(dot(n,view),0.),3.);
 vec3 reflection=reflect(-view,n);
 float strip=pow(max(0.,1.-abs(reflection.y*.78+reflection.x*.24-.34)),20.);
 float second=pow(max(0.,1.-abs(reflection.x*.82-reflection.z*.23+.15)),44.);
 float specular=pow(max(dot(n,halfVector),0.),75.);
 vec3 pearl=mix(mix(vec3(.24,.21,.30),vec3(.52,.48,.59),uTint),vec3(.90,.88,.94),uFinish);
 vec3 color=pearl*(.35+diffuse*.9);
 color+=vec3(.78,.73,.86)*strip*.8;
 color+=vec3(.98,.96,1.)*(second*.7+specular*.9);
 color+=vec3(.42,.32,.58)*fresnel*.7;
 color+=vec3(.025,.020,.035);
 color=color/(color+vec3(.8));
 color=pow(color,vec3(.82));
 gl_FragColor=vec4(color,uOpacity);
}`;

export function createSpineRenderer(canvas) {
  const gl=canvas.getContext('webgl',{alpha:true,antialias:true,premultipliedAlpha:false,powerPreference:'low-power'});
  if(!gl) return null;
  function shader(type,source) {
    const result=gl.createShader(type);gl.shaderSource(result,source);gl.compileShader(result);
    if(!gl.getShaderParameter(result,gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(result));
    return result;
  }
  const program=gl.createProgram();
  const vs=shader(gl.VERTEX_SHADER,vertexShader),fs=shader(gl.FRAGMENT_SHADER,fragmentShader);
  gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);
  if(!gl.getProgramParameter(program,gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program));
  gl.useProgram(program);
  const meshes=createLogoFragments();
  for(const mesh of meshes) {
    mesh.buffers=[];
    for(const data of [mesh.positions,mesh.normals]) {
      const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,data,gl.STATIC_DRAW);mesh.buffers.push(buffer);
    }
  }
  const attributes=['aPosition','aNormal'].map(name=>gl.getAttribLocation(program,name));
  attributes.forEach(location=>gl.enableVertexAttribArray(location));
  const uniforms=Object.fromEntries(['uPosition','uRotation','uScale','uAspect','uCamera','uTint','uOpacity','uFinish'].map(name=>[name,gl.getUniformLocation(program,name)]));
  gl.enable(gl.DEPTH_TEST);gl.depthFunc(gl.LEQUAL);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);
  let width=1,height=1,lost=false;
  canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;canvas.dataset.renderer='fallback';document.body.classList.add('no-webgl');});
  // A lost context falls back to the vector composition rather than reusing invalid resources.
  function resize() {
    const bounds=canvas.getBoundingClientRect();width=Math.max(bounds.width,1);height=Math.max(bounds.height,1);
    const ratio=Math.min(devicePixelRatio||1,width<700?1.5:1.75);
    canvas.width=Math.round(width*ratio);canvas.height=Math.round(height*ratio);gl.viewport(0,0,canvas.width,canvas.height);
  }
  function render(progress,pointer={x:0,y:0},arrival=1,targetRect=null) {
    if(lost) return;
    gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT);
    const narrow=width<800;
    const assemble=ease(.08,.45,progress);
    const handoff=ease(.62,.90,progress);
    const crossfade=ease(.92,.995,progress);
    const camera=narrow?16.7:13.6;
    const pixelsPerUnit=height*2.15/(2*camera);
    const target=targetRect||{x:width*.25,y:height*.5,width:height*.1,height:height*.14};
    const finalScale=target.height*camera/(3*height*2.15+.23*target.height);
    const finalPixelsPerUnit=height*2.15/(2*(camera-.23*finalScale));
    const targetX=(target.x+target.width/2-width/2)/finalPixelsPerUnit;
    const targetY=(height/2-target.y-target.height/2)/finalPixelsPerUnit;
    const scale=mix(narrow?.88:1.0,finalScale,handoff);
    const centered=ease(.25,.48,progress);
    const yaw=(-.57+pointer.x*.11)*(1-centered);
    const pitch=(.18+pointer.y*.08)*(1-centered);
    const angle=-.45*(1-centered);
    const centerX=mix((narrow?.5:3)*(1-assemble),targetX,handoff);
    const centerY=mix(narrow?-.55*assemble:0,targetY,handoff);
    gl.uniform1f(uniforms.uAspect,width/height);gl.uniform1f(uniforms.uCamera,camera);
    gl.uniform1f(uniforms.uOpacity,1-crossfade);
    gl.uniform1f(uniforms.uFinish,ease(.57,.89,progress));
    const models=[];
    for(let i=0;i<meshes.length;i++) {
      const mesh=meshes[i],seed=i*2.39996;
      const spread=(1-assemble)*(1-handoff)+(1-arrival)*2*(1-handoff);
      let py=mesh.center*scale*Math.cos(pitch),pz=mesh.center*scale*Math.sin(pitch);
      let px=pz*Math.sin(yaw);pz*=Math.cos(yaw);
      const rotatedX=px*Math.cos(angle)-py*Math.sin(angle);
      const rotatedY=px*Math.sin(angle)+py*Math.cos(angle);
      const x=centerX+rotatedX+Math.sin(seed)*2.1*spread;
      const y=centerY+rotatedY+Math.cos(seed)*1.8*spread;
      const z=pz+Math.sin(seed+1)*2.5*spread;
      const rotation=[pitch+Math.sin(seed)*.9*spread,yaw+Math.cos(seed)*1.2*spread,angle+Math.sin(seed+.7)*.6*spread];
      models.push({mesh,x,y,z,rotation,i});
    }
    models.sort((a,b)=>a.z-b.z);
    for(const model of models) {
      model.mesh.buffers.forEach((buffer,index)=>{
        gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.vertexAttribPointer(attributes[index],3,gl.FLOAT,false,0,0);
      });
      gl.uniform3f(uniforms.uPosition,model.x,model.y,model.z);
      gl.uniform3fv(uniforms.uRotation,model.rotation);gl.uniform1f(uniforms.uScale,scale);
      gl.uniform1f(uniforms.uTint,.35+(model.i/meshes.length)*.25);
      gl.drawArrays(gl.TRIANGLES,0,model.mesh.count);
    }
    canvas.dataset.renderer='webgl';
  }
  resize();
  return {resize,render};
}
