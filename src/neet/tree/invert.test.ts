import { expect, test } from "bun:test";

import { BinaryTree, TreeNode, breadth_first_search } from "./binary_tree.test";

let t = new BinaryTree();
let out = [4, 7, 2, 9, 6, 3, 1];
t.from_array([4, 2, 7, 1, 3, 6, 9]);

function invert(root: TreeNode | null) {
  if (!root) return [];
  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;
  invert(root.left);
  invert(root.right);
  return root;
}

test("invert", () => {
  invert(t.root);
  let arr = breadth_first_search([t.root as TreeNode], []);

  expect(arr).toEqual(arr);
});
