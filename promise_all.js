async function all(promises) {
  const results = [];

  for (let promise of promises) {
    results.push(await promise);
  }

  return results;
}




function all(promises) {  
  return promises.reduce(
    (acc,curr)=>
       acc.then(results => Promise.resolve(curr).then(r=> [...results,r])),
    Promise.resolve([])
  )
}
