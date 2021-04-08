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
  var valid = (node, lower, upper) => {
      if(node === null) return true;
      
      let val = node.val;
      
      if(lower >= val || val >= upper) return false;
      
      // the next 3 lines can be a single line:
      // return valid(node.left,min,val)&&valid(node.right,val,max);
      if (!valid(node.right, val, upper)) return false;
      if (!valid(node.left, lower, val)) return false;
      return true;
  };
  return valid(root, -Infinity, Infinity);  
};
