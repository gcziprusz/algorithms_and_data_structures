/** DEPTH FIRST APPROACH RECURSIVE
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func zigzagLevelOrder(root *TreeNode) [][]int {
    var result = [][]int{}
    var dfs func(*TreeNode, int)
    dfs = func(node *TreeNode, level int){
        if(node == nil){
            return
        }
        if(level >= len(result)) {
            result = append(result, []int{})
        }
        if(level%2==0){
            result[level] = append(result[level],node.Val)
        }else{
            var temp = make([]int, len(result[level])+1)
            temp[0] = node.Val
            copy(temp[1:],result[level])
            result[level] = temp
        }
        dfs(node.Left,level+1)
        dfs(node.Right,level+1)
    }
    
    dfs(root,0)
    return result 
}
