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

/** ITERATIVE
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
    
    let queue = [];
    let level = 0;
    
    queue.push(root);
    
    while(queue.length !== 0){
        levels.push([]);
        let len = queue.length;
        for(var i =0; i< len; i++){
            let n = queue.shift();      
         
            levels[level].push(n.val);
        
            if(n.left !== null) queue.push(n.left);
            if(n.right !== null) queue.push(n.right);    
        }
        
        level++;
    }
    return levels;
};

/*** ALTERNATIVE ITERATIVE**/
var levelOrder = function(root) {
    var res =[];
    var q =[];
    q.push(root)
    while(q.length>0){
        var level =[];
        var qlen = q.length;
        for(var i=0;i< qlen;i++){
            var n = q.shift();
            if(n) {
                level.push(n.val);
                q.push(n.left,n.right);                
            }
        }
        if(level.length > 0) res.push(level)
    }
    return res;
};
