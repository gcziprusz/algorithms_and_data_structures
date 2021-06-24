function any(promises) {
  return new Promise((resolve, reject)=> {
    let winner = true, errors =[],errorCount=0;
    promises.forEach((p,i)=> {
      p
      .then(data => {
        if(winner) {
          winner = false;
          resolve(data);
        }
      },
      error => {
        errors[i] = error;
        errorCount +=1;
        if (errorCount === promises.length) {
          reject(new AggregateError('No Promise in Promise.any was resolved', errors))
        }
      })
    })
  })
}
