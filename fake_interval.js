class FakeTimer {
  constructor() {
    this._setInterval = window.setInterval;
    this._clearInterval = window.clearInterval;
    this._dateNow = Date.now;
    this.time = 0;
    this.cbs = []
  }
  install() {
    // replace window.setInterval, window.clearInterval, Date.now
    // with your implementation
    window.setInterval = (cb, delay) => {
      const id = this.cbs.push([cb, delay])
      return id - 1
    };

    window.clearInterval = (id) => {
      this.cbs.splice(id, 1)
    };

    Date.now = () => {
      return this.time;
    };
  }

  uninstall() {
    // restore the original implementation of
    // window.setInterval, window.clearInterval, Date.now
    window.setInterval = this._setInterval
    window.clearInterval = this._clearInterval
    Date.now = this._dateNow
  }

  tick() {
    // run the scheduled functions without waiting
    while (this.cbs.length > 0) {
      for (let [cb, delay] of this.cbs) {
        this.time += delay
        cb()
      }
    }
  }
}
