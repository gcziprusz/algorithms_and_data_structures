/** RECURSIVE
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    if (root == nil) {
        return true
    }
    return symmetric(root.Right,root.Left)
}

func symmetric(n1 *TreeNode,n2 *TreeNode) bool {
    if(n1 == nil && n2 == nil) {
        return true
    }
    if(n1 == nil || n2 == nil) {
        return false
    }
    
    return n1.Val == n2.Val && symmetric(n1.Left,n2.Right) && symmetric(n1.Right,n2.Left)
}
