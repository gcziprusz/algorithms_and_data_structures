/** RECURSIVE
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    let levels = [];
    if (root === null) return levels;
    helper(root, 0);
    
    function helper(node, level){
        if(levels.length === level) levels.push([])
        levels[level].push(node.val);
        
        if(node.left !== null)  helper(node.left, level+1)
        if(node.right !== null)  helper(node.right, level+1)
    }
    return levels;
};
