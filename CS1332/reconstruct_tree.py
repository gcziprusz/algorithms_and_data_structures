class TreeNode:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None

# Build BST from Preorder
def build_bst_from_preorder(preorder):
    def helper(bound=float('inf')):
        nonlocal index
        if index == len(preorder) or preorder[index] > bound:
            return None
        root_val = preorder[index]
        index += 1
        root = TreeNode(root_val)
        root.left = helper(root_val)
        root.right = helper(bound)
        return root

    index = 0
    return helper()

# Build BST from Postorder
def build_bst_from_postorder(postorder):
    def helper(bound=float('-inf')):
        nonlocal index
        if index < 0 or postorder[index] < bound:
            return None
        root_val = postorder[index]
        index -= 1
        root = TreeNode(root_val)
        root.right = helper(root_val)
        root.left = helper(bound)
        return root

    index = len(postorder) - 1
    return helper()

# Utility: Inorder traversal to verify
def inorder_traversal(root):
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right) if root else []

# Example usage
if __name__ == "__main__":
    preorder = [10, 5, 1, 7, 15, 12, 20]
    postorder = [1, 7, 5, 12, 20, 15, 10]

    root_pre = build_bst_from_preorder(preorder)
    root_post = build_bst_from_postorder(postorder)

    print("Inorder traversal from Preorder BST:", inorder_traversal(root_pre))
    print("Inorder traversal from Postorder BST:", inorder_traversal(root_post))
