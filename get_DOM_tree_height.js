/**
  RECURSIVELY
*/
function getHeight(tree) {
  if (tree === null) return 0
  return Math.max(...Array.from(tree.children).map(getHeight), 0) + 1
}

/**
  ITERATIVELY
*/
function getHeight(tree) {
  if (tree === null) return 0
  const queue = [tree]
  let height = 0
  while (queue.length > 0) {
    let count = queue.length
    height += 1
    while (count > 0) {
      const head = queue.shift()
      queue.push(...head.children)
      count -= 1
    }
  }
  return height
}
