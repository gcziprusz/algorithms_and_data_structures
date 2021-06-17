const count = (() =>{
  let n =0;
  let fn = ()=> ++n;
  fn.reset = () => n=0;
  return fn;
})();
