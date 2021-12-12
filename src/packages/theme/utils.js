/* Add the indicated percentage to a hexadecimal color (RR, GG or BB) to clarify it */
const addLight = (color, amount)=>{
  let cc = parseInt(color,16) + amount;
  let c = (cc > 255) ? 255 : (cc);
  c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
  return c;
};

/* Clarifies a 6-character hexadecimal color #RRGGBB according to the percentage indicated */
export const lighten = (color, amount)=> {
  color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
  amount = parseInt((255*amount)/100);
  return `#${addLight(color.substring(0,2), amount)}${addLight(color.substring(2,4), amount)}${addLight(color.substring(4,6), amount)}`;
};

