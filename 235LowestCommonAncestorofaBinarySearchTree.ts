// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
	let rVal = root.val, pVal = p.val,qVal =q.val;
    if(pVal > rVal && qVal > rVal) return lowestCommonAncestor(root.right,p,q)
    else if(pVal < rVal && qVal < rVal) return lowestCommonAncestor(root.left,p,q)
    else return root;
};
