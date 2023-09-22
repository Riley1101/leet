import { expect, test } from "bun:test";

import { BinaryTree, breadth_first_search, TreeNode } from "./binary_tree.test";

let t1 = new BinaryTree();
let t2 = new BinaryTree();
let out = [4, 7, 2, 9, 6, 3, 1];
t1.from_array([4, 2, 7, 1, 3, 6, 9]);
t2.from_array([4, 5, 7, 1, 3, 6, 9]);

function same_tree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (p && !q) return false;
  if (!p && q) return false;
  if (p?.val !== q?.val) {
    return false;
  }
  return (
    same_tree(p?.left as TreeNode, q?.left as TreeNode) &&
    same_tree(p?.right as TreeNode, q?.right as TreeNode)
  );
}

test("invert", () => {
  expect(same_tree(t1.root as TreeNode, t2.root as TreeNode)).toBe(false);
  expect(same_tree(new BinaryTree().root, new BinaryTree().root)).toBe(true);
});
