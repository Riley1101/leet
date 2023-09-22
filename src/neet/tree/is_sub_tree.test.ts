import { expect, test } from "bun:test";

import { BinaryTree, TreeNode } from "./binary_tree.test";

let t1 = new BinaryTree();
let t2 = new BinaryTree();
t1.from_array([1, 1]);
t2.from_array([1]);

function same_tree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) {
    return false;
  }
  if (p?.val !== q?.val) return false;
  return (
    same_tree(p?.left as TreeNode, q?.left as TreeNode) &&
    same_tree(p?.right as TreeNode, q?.right as TreeNode)
  );
}

function sub_tree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!subRoot) return false;
  if (!root) return false;
  if (same_tree(root, subRoot)) {
    return true;
  }
  return sub_tree(root.left, subRoot) || sub_tree(root.right, subRoot);
}

test("sub_tree", () => {
  expect(sub_tree(t1.root as TreeNode, t2.root as TreeNode)).toBe(true);
});
