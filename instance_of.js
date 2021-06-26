function myInstanceOf(obj, target) {
  if (obj === null || typeof obj !== 'object') return false;

  let prototype = obj;
  while (prototype !== null) {
    if (prototype == target.prototype) return true;
    prototype = Object.getPrototypeOf(prototype);
  }
return false;
}
