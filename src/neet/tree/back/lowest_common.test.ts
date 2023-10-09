import { expect, test } from "bun:test";

import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([6, 2, 8, 0, 4, 7, 9, null, null, 3, 5]);
let p = 2;
let q = 8;
let out = 6;

function same_tree(t: TreeNode, p: number, q: number) {
  let cur = t as TreeNode;
  while (cur !== null) {
    if (p > t.val && q > t.val) {
      cur = cur.right as TreeNode;
    } else if (p < t.val && q < t.val) {
      cur = cur.left as TreeNode;
    } else {
      return cur;
    }
  }
}

test("lowest", () => {
  const res = same_tree(t.root as TreeNode, p, q) as TreeNode;
  expect(res.val).toBe(out);
});
