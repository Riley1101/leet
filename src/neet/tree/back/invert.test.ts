import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([4, 2, 7, 1, 3, 6, 9]);

function invert_binary_tree(root: TreeNode | null) {
  if (!root) return root;
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  invert_binary_tree(root.left);
  invert_binary_tree(root.right);
  return root;
}

