import { expect, test } from "bun:test";

import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([3, 9, 20, null, null, 15, 7]);
let out = [[3], [9, 20], [15, 7]];

function same_tree(root: TreeNode): number[][] {
  let queue = [root];
  let res = [];
  while (queue.length) {
    let lev = [];
    for (let i = 0; i < queue.length; i++) {
      let cur = queue.shift() as TreeNode;
      if (cur) {
        lev.push(cur.val);
        queue.push(cur.left as TreeNode);
        queue.push(cur.right as TreeNode);
      }
    }
    res.push(lev);
    lev = [];
  }
  return res;
}

test("lowest", () => {
  const res = same_tree(t.root as TreeNode);
  expect(res).toBe(out);
});
