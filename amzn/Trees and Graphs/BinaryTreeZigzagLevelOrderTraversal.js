/**
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
