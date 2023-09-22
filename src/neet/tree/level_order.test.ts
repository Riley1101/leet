import { test } from "bun:test";

import { BinaryTree, Node } from "./binary_tree.test";

let t = new BinaryTree();
t.from_array([1, 2, 3, 4, null, null, 5]);

function level_order(root: Node) {
  if (!root) return [];
  let queue = [root];
  let res: number[][] = [];
  while (queue.length) {
    let l = queue.length;
    let level = [];
    for (let i = 0; i < l; i++) {
      let cur = queue.shift();
      if (cur) {
        level.push(cur.value);
        queue.push(cur.left as Node);
        queue.push(cur.right as Node);
      }
    }
    if (level.length > 0) {
      res.push(level);
    }
  }
  console.log(res);
}

test("level order", () => {
  level_order(t.root as Node);
});
