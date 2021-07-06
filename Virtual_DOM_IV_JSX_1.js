// string > JSXElement
function parse(code)  {
  const reg = /^\s*<\s*(\S+)\s*>([^<>]*)<\s*\/\s*(\S+)\s*>\s*$/
  const match = code.match(reg)
  if (match) {
    const element = {
      openingElement: {
        tag: match[1],
      },
      children: [match[2]],
      closingElement: {
        tag: match[3]
      }
    }
    if (element.openingElement.tag !== element.closingElement.tag) {
      throw new Error('no match')
    }
    return element
  } else {
    throw new Error('error')
  }
}
// JSXElement > string 
function generate(ast) {
  const {openingElement, children, closingElement} = ast
  if (children[0]) {
    return `h("${openingElement.tag}", null, "${children[0]}")`
  } else {
    return `h("${openingElement.tag}", null)`
  }
}
