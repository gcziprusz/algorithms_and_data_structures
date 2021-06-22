function myFinally(p,fn){
  return p.then((val)=>{
    return Promise.resolve(fn())
      .then(() => val)
  },function(reason){
    return Promise.resolve(fn())
      .then(()=> Promise.reject(reason))
  })
}
