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

