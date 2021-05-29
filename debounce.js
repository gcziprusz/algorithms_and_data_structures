function debounce(fn,time){
  let timerId;
  let dis = this;
  return function(...args) {
    clearTimeout(timerId);
    timerId = setTimeout(function(){
      fn.call(dis,...args);
    }
    ,time);
  }
}

function log(m){console.log("m",m)}
let debouncedLogger = debounce(log,100);

debouncedLogger("1");
setTimeout(function(){
   debouncedLogger("2");
     debouncedLogger("3");
     debouncedLogger("4");
}
,200);
debouncedLogger("5")

