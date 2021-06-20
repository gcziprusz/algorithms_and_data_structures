Array.prototype.myReduce = function (callback, initial) {
  let accumulation = arguments.length > 1 ? initial : this[0];
  let i = arguments.length > 1 ? 0 : 1;

  if (!this.length && arguments.length < 2) throw TypeError();

  for (; i < this.length; i ++) {
    accumulation = callback(accumulation, this[i], i, this);
  }

  return accumulation
}
