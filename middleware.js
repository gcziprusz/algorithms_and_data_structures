class Middleware {
  handlers=[];
  errorHandlers=[];
  use(callback){
    if(callback.length === 3) {
      this.errorHandlers.push(callback)
    } else {
      this.handlers.push(callback)
    }
  }
  start(req){
    let nextWrapper = (err) => {
      try{
        if(err instanceof Error) this.handleError(err, req, nextWrapper);
        if(this.handlers.length === 0) return;
        let next = this.handlers.shift();
        next(req,nextWrapper)
      } catch (e) {
        this.handleError(e, req, nextWrapper);
      }
    }
    nextWrapper();
  }
  handleError(err, req, next){
    if(!this.errorHandlers.length) return;
    let fn = this.errorHandlers.shift()(err,req,next);
    this.handlers.length=0;
  }
}
