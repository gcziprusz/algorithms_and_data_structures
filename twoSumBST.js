const twoSumBSTs = (root1, root2, target) => {
  const set = new Set()
  let ret = false
  
  const dfs = (node, action) => {
    if (!node || ret === true) return
    action(node)
    dfs(node.left, action)
    dfs(node.right, action)
  }

  dfs(root1, node => set.add(target - node.val) )
  dfs(root2, node => { ret = set.has(node.val) })  

  return ret;
}
