
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  var resL = lowestCommonAncestor(root.left, p, q);
  var resR = lowestCommonAncestor(root.right, p, q);
  return (resL && resR) ? root : (resL || resR);
}





/*******ALTERNATIVE *********/






function lowestCommonAncestor(root, p, q) {
    function dfs(root, p, q){
      if (!root) return false;
      let l = dfs(root.left,p,q);
      let r = dfs(root.right,p,q);
      let c = root === p || root === q;
      if((l&&r) || (l&&c) || (r&&c)) res = root;
      return l || r || c;
    }
  
    let res;
    dfs(root,p,q);
    return res;
}

