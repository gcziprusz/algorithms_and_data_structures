// BFS
function previousLeftSibling(root, target) {
  const queue = [root];
  while (queue.length) {
    let size = queue.length;
    while (size > 0) {
      const pop = queue.pop();
      if (pop === target) return queue.length === 0 ? null : queue.pop();
      queue.unshift(...pop.children);
      size -= 1;
    }
  }
  return null;
}
