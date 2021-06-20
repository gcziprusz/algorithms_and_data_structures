/*QUICK DIRTY RACY*/
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

/*BETTER WAY */
window.myLocalStorage = {
  getItem(key) {
    try {
      const {value, maxAge, createdAt} = JSON.parse(localStorage.getItem(key))
      
      if (maxAge !== undefined && Date.now() - createdAt >= maxAge) {
        this.removeItem(key)
        return null
      }
      
      return value
    } catch (e) {
      return null
    }    
  },
  
  setItem(key, value, maxAge) {
    const entry = {
      value,
      maxAge,
      createdAt: Date.now()
    }
    
    localStorage.setItem(key, JSON.stringify(entry))
  },
  
  removeItem(key) {
    return localStorage.removeItem(key)
  },
  
  clear() {
    localStorage.clear()
  }
}
