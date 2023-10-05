import { expect, test } from "bun:test";
import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([4, 2, 7, 1, 3, 6, 9]);
let out = 3;

function maxDepth(root: TreeNode | null) {
  let queue = [root];
  let total = 0;
  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      let cur = queue.shift();
      if (cur?.left) {
        queue.push(cur.left);
      }
      if (cur?.right) {
        queue.push(cur.left);
      }
    }
    total += 1;
  }
  return total;
}

test("maxDepth", () => {
  expect(maxDepth(t.root)).toBe(out);
});
