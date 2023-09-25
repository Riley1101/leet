import { test, expect } from "bun:test";
import { BinaryTree, TreeNode } from "./binary_tree.test";
let t = new BinaryTree();
let k = 2;
let out = 2;
t.from_array([1, null, 2]);

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

function k_th_smallest_2(root: TreeNode) {
  let n = 0;
  let stack: TreeNode[] = [];
  let cur: TreeNode | null = root;
  while (cur && stack.length) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop() as TreeNode;
    n += 1;
    if (n == k) return cur.val;
  }
}

test.skip("Kth smallest", () => {
  let n = k_th_smallest_2(t.root as TreeNode);
  console.log(n);
  expect(n).toBe(out);
});
