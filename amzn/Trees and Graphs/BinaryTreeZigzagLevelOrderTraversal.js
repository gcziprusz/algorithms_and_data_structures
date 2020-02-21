/** Breath first search O(n) O(n)
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
var zigzagLevelOrder = function(root) {
    if(root === null) return [];
    
    let [result,q,levelItems, left2right] = [[],[],[],true];
    
    q.push(root,null);
    
    while(q.length > 0){
      let curr = q.shift();
      if(curr !== null){
          if(left2right){
              levelItems.push(curr.val)
          }
          else{
              levelItems.unshift(curr.val)
          }
          
          if(curr.left !== null){
              q.push(curr.left)
          }
          if(curr.right !== null){
              q.push(curr.right)
          }
      } else {
          left2right = !left2right;
          result.push(levelItems);
          levelItems = [];
          if(q.length > 0){
              q.push(null)     
          }
      }
    }
    return result;
};

/** Debth First search O(n) O(log2N) 
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
var zigzagLevelOrder = function(root) {
    let result = [];
    var zig = function(node, level) {
        // if new level 
        if(level >= result.length ) {
            result[level] = [node.val];       
        } else {
            if(level % 2 === 0){
                result[level].push(node.val)
            }else{
                result[level].unshift(node.val)
            }
        }
        if(node.left !== null){
            zig(node.left, level +1)
        }
        if(node.right !== null){
            zig(node.right, level +1)
        }
    }
    if(root === null) return result;
    zig(root,0)
    return result;
};

