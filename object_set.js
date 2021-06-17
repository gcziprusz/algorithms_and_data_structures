function set(obj, path, value) {
  const keys = Array.isArray(path) ? path : path.split(/[.\[\]]/g).filter(Boolean);
  while (keys.length > 1) {
    const key = keys.shift();
    if (!(key in obj)) {
      const nextKey = keys[0];
      obj[key] = (+nextKey).toString() === nextKey ? [] : {};
    }
    obj = obj[key];
  }
  obj[keys[0]] = value;
}
