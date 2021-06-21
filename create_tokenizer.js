function* tokenize(str) {
  let buffer = ''
  
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    
    switch (char) {
      case ' ':
        continue
      case '+':
      case '-':
      case '*':
      case '/':
      case '(':
      case ')':
        if (buffer != '') {
          yield buffer
          buffer = ''
        }
        yield char
        continue
      default:
        buffer += char
    }
  }
  
  if (buffer != '') {
    yield buffer
  }
}
