function LazyMan(name, logFn) {
  let ids = new Map();
  let delay = 0;
  let man = {
    intro:(name)=> {
      ids.set(`intro-${name}`,window.setTimeout(()=> {logFn(`Hi, I'm ${name}.`)},delay));
      return man;
    },
    eat:(food)=>{
      ids.set(`eat-${food}`,window.setTimeout(()=> {logFn(`Eat ${food}.`)},delay));
      return man;
    },
    sleep:(duration)=>{
      delay += duration * 1000;
      setTimeout(()=> logFn(`Wake up after ${duration} second${duration === 1 ? '':'s'}.`),delay);
      return man;
    },
    sleepFirst:(duration)=> {
      man.sleep(duration);
      for(let [name,timeout] of ids){
        clearTimeout(timeout);
        let [fn,param] = name.split('-');
        man[fn](param);
      }
      return man;
    }

  };
  man.intro(name);
  return man 
}
