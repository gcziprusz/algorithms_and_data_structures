function previousLeftSibling(root, target) {
  let nodes = [root];
  while (nodes.length) {
    let node = nodes.pop();
    if (node === target) {
      return nodes.pop() || null;
    }
    nodes.unshift(...node.children);
  }
  return null;
}
