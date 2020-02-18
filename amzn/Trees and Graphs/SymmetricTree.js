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

/** ITERATIVE USING A QUEUE
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
 let q = [root,root];
    while(q.length !== 0){
          let n1 = q.shift();
          let n2 = q.shift();
        
        if(n1 === null && n2 === null) continue;
        if(n1 === null || n2 === null) return false;
        if(n1.val !== n2.val) return false;
        
        q.push(n1.right)
        q.push(n2.left)
        q.push(n2.right)
        q.push(n1.left)  
    }
    return true;
};
