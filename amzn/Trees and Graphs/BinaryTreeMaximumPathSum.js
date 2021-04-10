
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
/***RECURSIVE NICE ALTERNATIVE**/
var maxPathSum = function(root) {
    var max = -Infinity;
  
    var helper =function(n){
        if (!n) return 0;
        
        var lmax = helper(n.left);
        var rmax = helper(n.right);
        
        max = Math.max(max,lmax+rmax+n.val);
        return Math.max(n.val+lmax,n.val+rmax,0)
    }; 
    
    helper(root);
    return max;
};
