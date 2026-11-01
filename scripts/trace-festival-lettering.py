"""Trace the supplied poster's actual calligraphy into filled SVG and pen-reveal paths.

No font substitution or generative lettering. Run with the bundled NumPy/Pillow Python.
The original JPEG is read-only. Crop coordinates and palm separation are explicit.
"""
import json, math
from pathlib import Path
from collections import deque, defaultdict
import numpy as np
from PIL import Image, ImageDraw

root=Path(__file__).resolve().parent.parent
im=Image.open(root/'assets/kerala-piravi-2026.jpg').convert('RGB').crop((1135,670,1930,1110))
rgb=np.array(im); ink=(rgb.min(axis=2)>175)&((rgb.max(axis=2)-rgb.min(axis=2))<65)
H,W=ink.shape
def polygon(points):
    p=Image.new('1',(W,H));ImageDraw.Draw(p).polygon(points,fill=1);return np.array(p,dtype=bool)
palms=ink&polygon([(0,0),(235,0),(235,210),(216,238),(160,243),(0,220)])
tall=palms&polygon([(62,0),(239,0),(237,175),(214,231),(194,239),(157,197),(125,146),(60,125)])
short=palms&~tall
letters=ink&~(tall|short)

def components(mask, minimum=12):
    remaining=set(zip(*np.nonzero(mask)))
    result=[]
    while remaining:
        seed=remaining.pop();q=[seed];points=[seed]
        for y,x in q:
            for dy,dx in [(1,0),(-1,0),(0,1),(0,-1),(1,1),(1,-1),(-1,1),(-1,-1)]:
                p=(y+dy,x+dx)
                if p in remaining: remaining.remove(p);q.append(p);points.append(p)
        if len(points)>=minimum:
            m=np.zeros_like(mask);yy,xx=zip(*points);m[yy,xx]=True;result.append(m)
    return result

def simplify(points, tol=.45):
    if len(points)<3:return points
    a=np.array(points[0]);b=np.array(points[-1]);v=b-a
    p=np.array(points[1:-1]);t=np.clip(((p-a)@v)/(v@v or 1),0,1)
    distances=np.linalg.norm(p-a-t[:,None]*v,axis=1)
    k=int(distances.argmax())+1
    if distances[k-1]<=tol:return [points[0],points[-1]]
    return simplify(points[:k+1],tol)[:-1]+simplify(points[k:],tol)

def smooth_outline(points):
    """Subpixel-smoothed cubic curves instead of tracing pixel staircase corners."""
    p=np.array(points,dtype=float)
    lengths=np.linalg.norm(np.diff(p,axis=0),axis=1)
    along=np.concatenate(([0.],np.cumsum(lengths)))
    count=max(8,int(along[-1]/1.4))
    positions=np.linspace(0,along[-1],count,endpoint=False)
    samples=np.column_stack([np.interp(positions,along,p[:,axis]) for axis in [0,1]])
    samples=sum(np.roll(samples,shift,axis=0)*weight for shift,weight in [(-2,1),(-1,4),(0,6),(1,4),(2,1)])/16
    closed=[tuple(point) for point in samples]+[tuple(samples[0])]
    middle=len(closed)//2
    ps=simplify(closed[:middle+1],.28)[:-1]+simplify(closed[middle:],.28)[:-1]
    commands=[f'M{ps[0][0]:.2f},{ps[0][1]:.2f}']
    for i,a in enumerate(ps):
        prev=ps[(i-1)%len(ps)];b=ps[(i+1)%len(ps)];after=ps[(i+2)%len(ps)]
        c=[a[k]+(b[k]-prev[k])/6 for k in [0,1]]
        d=[b[k]-(after[k]-a[k])/6 for k in [0,1]]
        commands.append(f'C{c[0]:.2f},{c[1]:.2f} {d[0]:.2f},{d[1]:.2f} {b[0]:.2f},{b[1]:.2f}')
    return ''.join(commands)+'Z'

def filled_path(mask):
    edges=defaultdict(list)
    for y,x in zip(*np.nonzero(mask)):
        if y==0 or not mask[y-1,x]:edges[(x,y)].append((x+1,y))
        if x==W-1 or not mask[y,x+1]:edges[(x+1,y)].append((x+1,y+1))
        if y==H-1 or not mask[y+1,x]:edges[(x+1,y+1)].append((x,y+1))
        if x==0 or not mask[y,x-1]:edges[(x,y+1)].append((x,y))
    paths=[]
    while edges:
        start=next(iter(edges));p=start;points=[p]
        while True:
            p2=edges[p].pop()
            if not edges[p]:del edges[p]
            p=p2;points.append(p)
            if p==start:break
        paths.append(smooth_outline(points))
    return ''.join(paths)

def skeleton(mask):
    a=np.pad(mask.astype(np.uint8),1)
    while True:
        changed=False
        for phase in [0,1]:
            p=a[1:-1,1:-1]
            ns=[a[:-2,1:-1],a[:-2,2:],a[1:-1,2:],a[2:,2:],a[2:,1:-1],a[2:,:-2],a[1:-1,:-2],a[:-2,:-2]]
            count=sum(ns);changes=sum(((ns[i]==0)&(ns[(i+1)%8]==1)).astype(np.uint8) for i in range(8))
            if phase==0: c=(ns[0]*ns[2]*ns[4]==0)&(ns[2]*ns[4]*ns[6]==0)
            else:c=(ns[0]*ns[2]*ns[6]==0)&(ns[0]*ns[4]*ns[6]==0)
            remove=(p==1)&(count>=2)&(count<=6)&(changes==1)&c
            if remove.any():p[remove]=0;changed=True
        if not changed:break
    return a[1:-1,1:-1].astype(bool)

def pen_paths(mask):
    sk=skeleton(mask);nodes=set(zip(*np.nonzero(sk)));graph={}
    # Distance to the edge by successive 8-neighbour erosion, for brush widths.
    radius=np.zeros_like(mask,dtype=np.uint8);work=mask.copy()
    while work.any():
        radius[work]+=1
        padded=np.pad(work,1)
        work=np.logical_and.reduce([padded[dy:dy+H,dx:dx+W] for dy in range(3) for dx in range(3)])
    for y,x in nodes:
        neighbours=[]
        for dy,dx in [(0,1),(1,0),(0,-1),(-1,0),(1,1),(1,-1),(-1,1),(-1,-1)]:
            p=(y+dy,x+dx)
            if p not in nodes:continue
            if dy and dx and ((y+dy,x) in nodes or (y,x+dx) in nodes):continue
            neighbours.append(p)
        graph[(y,x)]=neighbours
    used=set();chains=[]
    starts=sorted(nodes,key=lambda p:(len(graph[p])==2,p[1],p[0]))
    for start in starts:
        for nxt in graph[start]:
            edge=tuple(sorted((start,nxt)))
            if edge in used:continue
            used.add(edge);chain=[start,nxt];previous=start;p=nxt
            while len(graph[p])==2:
                options=[n for n in graph[p] if n!=previous and tuple(sorted((p,n))) not in used]
                if not options:break
                n=options[0];used.add(tuple(sorted((p,n))));chain.append(n);previous,p=p,n
            length=sum(math.hypot(a[0]-b[0],a[1]-b[1]) for a,b in zip(chain,chain[1:]))
            if length<2:continue
            points=simplify([(x+.5,y+.5) for y,x in chain],.65)
            r=max(int(radius[y,x]) for y,x in chain)
            chains.append({'d':'M'+'L'.join(f'{x:g},{y:g}' for x,y in points),'length':round(length,2),'width':max(8,round(r*3.1+3,1)),'x':min(x for y,x in chain),'y':sum(y for y,x in chain)/len(chain)})
    return sorted(chains,key=lambda p:(p['x'],p['y']))

parts=[]
for m in components(letters):
    ys,xs=np.nonzero(m);ymin=int(ys.min());ymax=int(ys.max());xmin=int(xs.min())
    # Original calligraphic line order; flourishes remain in their source component.
    row=0 if ymax<225 else (1 if ymin<290 and xmin>210 else 2)
    parts.append({'kind':'letters','row':row,'x':xmin,'path':filled_path(m),'strokes':pen_paths(m),'pixels':int(m.sum())})
parts.sort(key=lambda p:(p['row'],p['x']))
for kind,m in [('palms',palms)]:
    parts.insert(0,{'kind':kind,'row':-1,'x':0,'path':filled_path(m),'strokes':pen_paths(m),'pixels':int(m.sum())})

duration=3.1
trees=[p for p in parts if p['kind']!='letters'];words=[p for p in parts if p['kind']=='letters']
for p in trees:
    total=sum(s['length'] for s in p['strokes']) or 1;elapsed=0
    for s in p['strokes']:
        s['delay']=round(.05+elapsed/total*.775,4);s['duration']=round(max(.0175,s['length']/total*.775),4);elapsed+=s['length']
total=sum(s['length'] for p in words for s in p['strokes']) or 1;elapsed=0
for p in words:
    for s in p['strokes']:
        s['delay']=round(.325+elapsed/total*2.575,4);s['duration']=round(max(.02,s['length']/total*2.575),4);elapsed+=s['length']
data={'width':W,'height':H,'duration':duration,'treeCount':2,'unifiedCanopy':True,'sourceCrop':[1135,670,1930,1110],'parts':parts}
(root/'assets/poster-calligraphy.js').write_text('// Traced directly from the supplied poster; preserve original lettering, not a replacement font.\nexport const POSTER_CALLIGRAPHY='+json.dumps(data,separators=(',',':'),default=lambda value:value.item())+';\n')
# Analysis preview: exact silhouettes grouped by colour, not a replacement site asset.
debug=np.zeros((H,W,3),dtype=np.uint8);debug[:]=[36,16,79];debug[letters]=[255,255,255];debug[tall]=[220,150,255];debug[short]=[120,230,240]
Image.fromarray(debug).save('/private/tmp/calligraphy-parts.png')
print(json.dumps({'parts':len(parts),'penPaths':sum(len(p['strokes']) for p in parts),'inkPixels':int(ink.sum()),'retainedPixels':sum(p['pixels'] for p in parts),'fileBytes':(root/'assets/poster-calligraphy.js').stat().st_size}))
