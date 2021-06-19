// BFS 
function previousLeftSibling(root, target) {
  const q = [root];
  while (q.length) {
    const n = q.length;
    let prev = null;
    for (let i=0; i<n; i++) {
      const curr = q.shift();
      if (curr === target) return prev;
      q.push(...curr.children);
      prev = curr;
    }
  }
  return null;
}
