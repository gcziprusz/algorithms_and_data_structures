function previousLeftSibling(root, target) {
  let q = [root];
  while(q.length){
    let last = q.pop();
    if(last === target) return q.pop() || null;
    q.unshift(...last.children)
  }
  return null;
}
