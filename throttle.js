const throttle = (callback, interval) => {
  let whitelisted = true;
  let context = this;
  return function(){
    if (!whitelisted) return;
    callback.apply(context, arguments);
    whitelisted = false;
    setTimeout(function (){
      whitelisted = true;
    },interval)
  }
}

// Throttle with stasing arguments and using them if no new call arrives
const throttle = (callback, interval) => {
  let whitelisted = true;
  let argStash=null;
  return (...args) => {
    if (!whitelisted) {
      argStash = [...args];
      return;
    };
    callback.apply(this, args);
    whitelisted = false;
    setTimeout( () => {
      whitelisted = true;
      argStash && callback.apply(this, argStash);
      argStash= null;
    },interval)
  }
}



function log(m){console.log("mM",m)}
let throttledLog = throttle(log,100);
throttledLog("1");
let count = 10;
let id = setInterval(function (){
  throttledLog(count++);
  if (count === 15) {
    clearInterval(id);
  }
},10);
