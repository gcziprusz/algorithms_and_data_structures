window.myLocalStorage = {
  getItem(key) {
    return window.localStorage.getItem(key)
  },
  setItem(key, value, maxAge) {
    if (maxAge ===0) return;
    window.localStorage.setItem(key,value)
    if(maxAge) {
      setTimeout(()=> {
        this.removeItem(key)
      },maxAge)
    }
  },
  removeItem(key) {
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  }
}
