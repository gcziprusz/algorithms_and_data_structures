function getUniqueClassName() {
  getUniqueClassName.n = getUniqueClassName.n || 1
  
  let count = getUniqueClassName.n++
  let className = ''
  while(count > 0) {
    let mod = (count - 1) % 52
    className = String.fromCharCode(mod < 26 ? (97/*a*/ + mod) : (65/*A*/ + (mod - 26))) + className
    count = Math.floor((count - 1) / 52)
  }
  return className
}

getUniqueClassName.reset = function() {
  getUniqueClassName.n = 0
}
