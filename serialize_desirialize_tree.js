// This is the class for the node
// you can use this directly as it is bundled with your code

// class Node {
//   value: number
//   left: null | Node
//   right: null | Node
//   constructor(val) {
//     this.value = val
//     this.left = null
//     this.right = null
//   }
// }

function serialize(root) {
  if(!root) return '_'

  return `${root.val},${serialize(root.left)},${serialize(root.right)}`
}

function deserialize(str) {
  const q = str.split(',')

  return dfs(q)

  function dfs(que) {
    if(!que.length) return null
    const n = que.shift()
    if(n !== '_') {
      const node = new Node(n.value)
      node.left = dfs(q)
      node.right = dfs(q)
      return node
    }
    return null
  }
}
