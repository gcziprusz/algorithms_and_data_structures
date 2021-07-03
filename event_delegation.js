function onClick(root, predicate, handler) {
  // your code here
  if(predicate(root)){
      root.addEventListener('click', handler);
  }
  root.childNodes?.forEach( node => {
    onClick(node,predicate,handler)
  })
}
