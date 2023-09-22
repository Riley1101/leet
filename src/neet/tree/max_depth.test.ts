import { expect, test } from "bun:test";

import { BinaryTree, TreeNode, breadth_first_search } from "./binary_tree.test";

let t = new BinaryTree();
let out = 3;
t.from_array([4, 2, 7, 1, 3, 6, 9]);

function max_depth(root: TreeNode | null): number {
  if (!root) return 0;
  return 1 + Math.max(max_depth(root.left), max_depth(root.right));
}
function max_depth_2(root: TreeNode | null) {
  let levs = 0;
  let queue = [root];
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let ele = queue.shift();
      if (ele?.left) {
        queue.push(ele.left);
      }
      if (ele?.right) {
        queue.push(ele.right);
      }
    }
    levs++;
  }
  return levs;
}

test("max_depth", () => {
  let res = max_depth_2(t.root);

  expect(res).toEqual(out);
});
