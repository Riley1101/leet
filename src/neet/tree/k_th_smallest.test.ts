import { test, expect } from "bun:test";
import { BinaryTree, TreeNode } from "./binary_tree.test";
let t = new BinaryTree();
let k = 3;
let out = 3;
t.from_array([5, 3, 6, 2, 4, 1]);

function in_order(node: TreeNode, res: number[]) {
  if (node == null) return res;
  if (!node) return res;
  if (node.left) {
    res = in_order(node.left, res);
  }
  res.push(node.val);
  if (node.right) {
    res = in_order(node.right, res);
  }
  return res;
}

function k_th_smallest(root: TreeNode) {
  let v = in_order(root, []);
  return v[k - 1];
}

test("Kth smallest", () => {
  expect(k_th_smallest(t.root as TreeNode)).toBe(out);
});
