function clearAllTimeout() {
  let lastTimerId = setTimeout(()=>{},0);
  while (lastTimerId--) {
    clearTimeout(lastTimerId);
  }
}


window.setTimeout = (() => {
  const originSetTimeout = setTimeout;
  const timers = new Set();
  
  window.clearAllTimeout = () => {
    for (const timerId of timers) {
      clearTimeout(timerId);
    }
  }

  return (...args) => {
    const timerId = originSetTimeout(...args);
    timers.add(timerId);
    return timerId;
  }
})();

/**
 * cancel all timer from window.setTimeout
 */
function clearAllTimeout() {
  for(const id of list) {
    window.clearTimeout(id)
  }
}

const originalSetTimeout = window.setTimeout;
const list = []

window.setTimeout = function(func, wait) {
  const id = originalSetTimeout(func, wait)
  list.push(id)
  return id
}
