async function all(promises) {
  const results = [];

  for (let promise of promises) {
    results.push(await promise);
  }

  return results;
}


