/** RECURSIVE
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
var isSymmetric = function(root) {
return mirror(root,root);
};

function mirror(n1,n2) {
    if(n1 === null && n2 === null) return true; 
    if(n1 === null || n2 === null) return false;
    
    return n1.val === n2.val && 
        mirror(n1.right,n2.left) &&
        mirror(n1.left,n2.right)
}
