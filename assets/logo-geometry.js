import { LOGO_CONTOURS } from './brand-shape.js';

// Scanline trapezoids preserve holes exactly, avoiding a fan that would fill
// the logo's inner cut. Each horizontal fragment is a closed, extruded solid.
const source=LOGO_CONTOURS.map(contour=>contour.map(([x,y])=>[(x-359)*.006,3-y*.006]));
const mix=(a,b,t)=>a+(b-a)*t;
const normalize=([x,y])=>{const length=Math.hypot(x,y)||1;return[x/length,y/length];};
function insetContour(contour,distance) {
  return contour.map((point,index)=>{
    const before=contour[(index+contour.length-1)%contour.length];
    const after=contour[(index+1)%contour.length];
    const incoming=normalize([point[0]-before[0],point[1]-before[1]]);
    const outgoing=normalize([after[0]-point[0],after[1]-point[1]]);
    const a=[incoming[1],-incoming[0]],b=[outgoing[1],-outgoing[0]];
    const bisector=normalize([a[0]+b[0],a[1]+b[1]]);
    const adjustment=distance/Math.max(.35,bisector[0]*a[0]+bisector[1]*a[1]);
    return[point[0]+bisector[0]*adjustment,point[1]+bisector[1]*adjustment];
  });
}
function edgesAt(contours,y) {
  const crossings=[];
  for(const contour of contours) for(let i=0;i<contour.length;i++) {
    const a=contour[i],b=contour[(i+1)%contour.length];
    if(y<=Math.min(a[1],b[1]) || y>=Math.max(a[1],b[1])) continue;
    crossings.push({a,b,x:a[0]+(b[0]-a[0])*(y-a[1])/(b[1]-a[1])});
  }
  return crossings.sort((a,b)=>a.x-b.x);
}
const xAt=(edge,y)=>edge.a[0]+(edge.b[0]-edge.a[0])*(y-edge.a[1])/(edge.b[1]-edge.a[1]);
function clipEdge(a,b,bottom,top) {
  if(Math.abs(a[1]-b[1])<1e-9) return a[1]>=bottom-1e-8 && a[1]<=top+1e-8?[a,b,0,1]:null;
  let start=(bottom-a[1])/(b[1]-a[1]),end=(top-a[1])/(b[1]-a[1]);
  if(start>end)[start,end]=[end,start];
  start=Math.max(0,start);end=Math.min(1,end);
  if(end<=start+1e-9)return null;
  return[[mix(a[0],b[0],start),mix(a[1],b[1],start)],[mix(a[0],b[0],end),mix(a[1],b[1],end)],start,end];
}
export function createLogoFragments(count=14) {
  const inset=source.map(contour=>insetContour(contour,.018));
  return Array.from({length:count},(_,index)=>{
    const bottom=-3+index*6/count,top=-3+(index+1)*6/count,center=(top+bottom)/2;
    const positions=[],normals=[];
    const vertex=(point,z)=>[point[0],point[1]-center,z];
    function triangle(a,b,c) {
      const u=b.map((v,i)=>v-a[i]),v=c.map((n,i)=>n-a[i]);
      let normal=[u[1]*v[2]-u[2]*v[1],u[2]*v[0]-u[0]*v[2],u[0]*v[1]-u[1]*v[0]];
      const length=Math.hypot(...normal);
      if(length<1e-10)return;
      normal=normal.map(n=>n/length);
      positions.push(...a,...b,...c);normals.push(...normal,...normal,...normal);
    }
    function quad(a,b,c,d){triangle(a,b,c);triangle(a,c,d);}
    const levels=[...new Set([bottom,top,...inset.flat().map(p=>p[1]).filter(y=>y>bottom && y<top)])].sort((a,b)=>a-b);
    for(let level=0;level<levels.length-1;level++) {
      const low=levels[level],high=levels[level+1];
      if(high-low<1e-9)continue;
      const edges=edgesAt(inset,(low+high)/2);
      for(let e=0;e+1<edges.length;e+=2) {
        const left=edges[e],right=edges[e+1];
        const a=[xAt(left,low),low],b=[xAt(right,low),low],c=[xAt(right,high),high],d=[xAt(left,high),high];
        quad(vertex(a,.23),vertex(b,.23),vertex(c,.23),vertex(d,.23));
        quad(vertex(d,-.23),vertex(c,-.23),vertex(b,-.23),vertex(a,-.23));
      }
    }
    source.forEach((contour,contourIndex)=>{
      for(let i=0;i<contour.length;i++) {
        const j=(i+1)%contour.length;
        const edge=clipEdge(contour[i],contour[j],bottom,top);
        if(!edge)continue;
        const [a,b,start,end]=edge;
        const innerA=inset[contourIndex][i],innerB=inset[contourIndex][j];
        const c=[mix(innerA[0],innerB[0],end),mix(innerA[1],innerB[1],end)];
        const d=[mix(innerA[0],innerB[0],start),mix(innerA[1],innerB[1],start)];
        quad(vertex(a,-.13),vertex(b,-.13),vertex(b,.13),vertex(a,.13));
        quad(vertex(a,.13),vertex(b,.13),vertex(c,.23),vertex(d,.23));
        quad(vertex(d,-.23),vertex(c,-.23),vertex(b,-.13),vertex(a,-.13));
      }
    });
    for(const [height,direction] of [[bottom,1],[top,-1]]) {
      const crossings=edgesAt(source,height+(height===bottom?1:-1)*1e-7);
      for(let i=0;i+1<crossings.length;i+=2) {
        const a=[xAt(crossings[i],height),height],b=[xAt(crossings[i+1],height),height];
        if(direction===1)quad(vertex(a,-.13),vertex(b,-.13),vertex(b,.13),vertex(a,.13));
        else quad(vertex(a,.13),vertex(b,.13),vertex(b,-.13),vertex(a,-.13));
      }
    }
    return{positions:new Float32Array(positions),normals:new Float32Array(normals),count:positions.length/3,center};
  });
}
