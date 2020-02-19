/** RECURSIVE
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func levelOrder(root *TreeNode) [][]int {
    var levels = make([][]int,0);
    if(root == nil){
        return levels
    }
    
    var dfs func(*TreeNode, int)
    
    dfs = func(n *TreeNode, level int) {
        if(level == len(levels)){
            levels = append(levels,[]int{})
        }
        
        levels[level] = append(levels[level], n.Val)
        
        if(n.Left != nil){
            dfs(n.Left, level+1)
        }
        if(n.Right != nil){
         dfs(n.Right, level+1)
        }
    }
    dfs(root,0)
    return levels
}
