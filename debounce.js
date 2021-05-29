const debounce = function(func, interval) {
  let timerId;
  return function(e){
    clearTimeout(timerId)
    timerId = setTimeout(function(){
      func.apply()
    }, interval)
  }
}
let debouncedAPICall = debounce(apiCall, 3000)


debouncedAPICall();
