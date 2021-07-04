Function.prototype.mycall = function(thisArg, ...args) {
  thisArg = thisArg ?? window;
  thisArg = Object(thisArg);
  const fn = Symbol();
  thisArg[fn] = this;
  const res = thisArg[fn](...args);
  delete thisArg[fn];
  return res;
}
