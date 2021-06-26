// Normal BFS pushing children to queue and dealing with the head of the queue next.
// With BFS the next element in the queue will be either the next right sibling, or the first element on the next level.
// Therefore we use null values as indication that we are at the end of a level. 
// This prevents, for example, the first p tag being indentified as the next right
// sibling to the last div tag, as the last div tag would be followed by a null in the queue because it has no next right sibling.

function nextRightSibling(root, target) {
  if (!root) {
    return null;
  }
  const queue = [root, null];
  while(queue.length) {
    const node = queue.shift();
    if (node === target) {
      return queue.shift();
    } else if (node === null && queue.length) {
      queue.push(null);
    } else {
      queue.push(...node.children)
    }
  }
  return null;
}
