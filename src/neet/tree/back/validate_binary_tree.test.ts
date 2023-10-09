import { expect, test } from "bun:test";

import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([3, 9, 20, null, null, 15, 7]);
let out = [[3], [9, 20], [15, 7]];

function validate_tree(root: TreeNode, left: number, right: number): boolean {
  if (!root) return true;
  if (!(left < root.val && right > root.val)) return false;
  return (
    validate_tree(root.left as TreeNode, left, root.val) ||
    validate_tree(root.right as TreeNode, right, root.val)
  );
}
