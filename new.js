const myNew = (constructor, ...args) => {
  // your code here
  let obj = {};
  obj.__proto__ = constructor.prototype;
  return constructor.apply(obj,args) || obj;
}
