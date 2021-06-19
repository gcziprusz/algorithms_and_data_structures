// recursion
// function invert(node) {
//   if (node === null) return node;
//   [node.left, node.right] = [node.right, node.left]

//   if (node.left) {
//     invert(node.left)
//   }

//   if (node.right) {
//     invert(node.right)
//   }

//   return node
// }

// use a stack and iteration
function invert(node) {
  if (node === null) return node;

  const stack = [node]

  while (stack.length > 0) {
    const node = stack.pop();
    [node.left, node.right] = [node.right, node.left]

    if (node.left) {
      stack.push(node.left)
    }

    if (node.right) {
      stack.push(node.right)
    }
  }

  return node
}
