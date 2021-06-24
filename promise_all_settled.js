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

