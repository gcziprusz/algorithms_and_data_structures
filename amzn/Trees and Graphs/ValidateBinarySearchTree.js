/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  var helper = (node, lower, upper) => {
      if(node === null) return true;
      
      let val = node.val;
      
      if(lower !== null && lower >= val) return false;
      if(upper !== null && upper <= val) return false;
      
      if (!helper(node.right, val, upper)) return false;
      if (!helper(node.left, lower, val)) return false;
      
      return true;
  };
    return helper(root, null,null);
    
};
