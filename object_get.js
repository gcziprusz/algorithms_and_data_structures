function get(source, path, defaultValue = undefined) {
  if (!path.length) return defaultValue;
  let keys = Array.isArray(path) ? path : path.split(/[.\[\]]/g).filter(Boolean);
 

  return keys.reduce((result,curr) => {
    return result[curr] || defaultValue
  }, source)
}
