// The completed greeting settles into the empty right-hand area of the poster.
export const DOCK_DURATION=900;
export function dockFrame(width,height,source) {
  const mobile=width<=800,gutter=mobile?14:Math.min(44,Math.max(22,width*.025));
  const targetWidth=Math.min(mobile?210:380,width*(mobile?.28:.26));
  const shortLandscape=width>=600&&height<=600;
  // Phones clear the three-line headline; wider screens use the space beside it.
  const y=shortLandscape?Math.max(180,height*.43):mobile?
    Math.max(190,height*.47,height*.23+55+width*.41):Math.max(180,height*(width<=1100?.43:.34));
  const x=width-gutter-targetWidth;
  const scale=targetWidth/Math.max(source.width,1);
  return {x,y,width:targetWidth,height:targetWidth*440/795,scale,
    tx:x-source.x,ty:y-source.y,motionY:y+targetWidth*440/795+10};
}
