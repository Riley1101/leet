import { test, expect } from "bun:test";

import { BinaryTree, TreeNode } from "./binary_tree.test";

let t = new BinaryTree();
t.from_array([2,1,3]);

function valid(node: TreeNode, left: number, right: number): boolean {
  if (!node) return true;
  if (!(node.val < right && node.val > left)) {
    return false;
  }
  return (
    valid(node.left as TreeNode, left, node.val) &&
    valid(node.right as TreeNode, node.val, right)
  );
}
function valid_bst(root: TreeNode) {
  return valid(root, -Infinity, Infinity);
}

test("valid bast", () => {
  expect(valid_bst(t.root as TreeNode)).toBe(true);
});
