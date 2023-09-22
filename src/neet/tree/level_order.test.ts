import { test } from "bun:test";

import { BinaryTree, TreeNode } from "./binary_tree.test";

let t = new BinaryTree();
t.from_array([1, 2, 3, 4, null, null, 5]);

function level_order(root: TreeNode) {
  if (!root) return [];
  let queue = [root];
  let res: number[][] = [];
  while (queue.length) {
    let l = queue.length;
    let level = [];
    for (let i = 0; i < l; i++) {
      let cur = queue.shift();
      if (cur) {
        level.push(cur.val);
        queue.push(cur.left as TreeNode);
        queue.push(cur.right as TreeNode);
      }
    }
    if (level.length > 0) {
      res.push(level);
    }
  }
}

test("level order", () => {
  level_order(t.root as TreeNode);
});
