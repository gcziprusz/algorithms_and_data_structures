
/** RECURSIVE 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    var max = -Infinity;
    
    function maxGain(node){
        if(node === null) return 0;
        
        var lm = maxGain(node.left)
        var rm = maxGain(node.right)
        
        var localMax = node.val + lm + rm;
        
        max = Math.max(localMax,max);
        return  Math.max(0,node.val+lm ,node.val+rm)
    }
    maxGain(root);
    return max;
};
