function traverse(root) {
  if (!root) {
    return [];
  }

  let result = {};
  let queue = [[root, 0]];
  
  while (queue.length) {
    const size = queue.length;
    queue.sort((a,b) => (a[1] - b[1])); 

    for (i=0; i < size; i++) {
      const [node, column] = queue.shift();

      if (result[column]) {
        result[column].push(node.value);
      } else {
        result[column] = [node.value];
      }

      if (node.left) {
        queue.push([node.left, column - 1]);
      }
      if (node.right) {
        queue.push([node.right, parseInt(column) + 1]);
      }
    }
  }

  return Object.keys(result)
    .sort((a,b) => (a-b))
    .reduce((res, key) => ([...res, ...result[key]]), []);
}
