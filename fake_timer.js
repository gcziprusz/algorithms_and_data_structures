class FakeTimer {
  install() {
    this.originalsetTimeout = window.setTimeout;
    this.originalclearTimeout = window.clearTimeout;
    this.originalDateNow = Date.now;
    this.currentTime = 0;
    this.callbacks = [];
    window.setTimeout = (callback,ms) => {
       let wait = this.currentTime +ms;
       const insertAt = this.callbacks.reduce((count, item) => {
        return item.wait <= wait ? count + 1 : count
      }, 0)
      let id = Symbol()
      let item = {id, wait, callback};
      this.callbacks.splice(insertAt,0,item);
      return id;
    }
    window.clearTimeout = (id) => {
      const index = this.callbacks.findIndex((item) => {
        return item.id === id
      })
      if (index > -1) {
        const { wait } = this.callbacks[index];
        if (wait < this.currentTime) return;
        this.callbacks.splice(index, 1);
      }
    } 
    Date.now = () => this.currentTime;
  }

  uninstall() {
    window.setTimeout = this.originalsetTimeout ;
    window.clearTimeout = this.originalclearTimeout ;
    Date.now = this.originalDateNow;
  }

  tick() {
    while(this.callbacks.length) {
      let {wait,callback} = this.callbacks.shift();
      this.currentTime = wait;
      callback();
    }
  }
}
