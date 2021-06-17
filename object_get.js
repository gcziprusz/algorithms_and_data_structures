function get(source, path, defaultValue = undefined) {
  // your code here
  if( !path.length) return undefined;
  
  let props = Array.isArray( path ) ? path :
    path.split(/\.|\[|\]/g);
  
  props = !props[props.length - 1] ? props.slice(0,-1) : props;
  
  
  return props.reduce((result,curr,i) => {
    return result[curr] || defaultValue
  }, source)
}
