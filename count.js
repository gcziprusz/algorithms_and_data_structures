const count = (() =>{
  let n =0;
  let fn = ()=> ++n;
  fn.reset = () => n=0;
  return fn;
})();


// your code here
function count(){
  count.times = (count.times ||0) +1
  return count.times;
}
count.reset = function() {
  count.times = 0;
}
