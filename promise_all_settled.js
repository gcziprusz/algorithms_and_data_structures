
function allSettled(promises) {
  return new Promise(resolve => {
    let res = [],wait = promises.length;
    if(wait ===0 ) resolve([])
    promises.forEach((p,i) => {
       Promise.resolve(p)
       .then(value=> res[i] = {status:"fulfilled",value})
       .catch(reason =>  res[i] = {status:"rejected",reason})
       .finally(()=> {
         wait--;
         if(wait ===0) {
           resolve(res);
         }
       })
     });
  })
}

/** with async await **/
async function allSettled(promises) {
  let result = [];
  for(let promise of promises) {
    try {
      const success = await promise;
      result.push({status:'fulfilled',value:success});
    } catch (e) {
      result.push({status: 'rejected', reason: e});
    }
  }
  return result
}


/***** REDUCE ****/
function allSettled(promises) {
  return promises.reduce((prev, next) => {
    return prev.then(res => {
      return !(next instanceof Promise) ? 
      [...res, {status: 'fulfilled', value: next}] : 
      next.then(data => [...res, {status: 'fulfilled', value: data}], (err) => Promise.resolve([...res, {status: 'rejected', reason: err}]))
    })
  }, Promise.resolve([]))
}

