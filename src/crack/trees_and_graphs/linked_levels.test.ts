import { test } from "bun:test";
import { TreeNode, BinaryTree } from "./tree";

let t = new BinaryTree();
t.from_array([5, 2, 7, 1, 3, 8, 9]);

function create_list_node(t: TreeNode) {
  let queue = [t];
  let res: number[][] = [];

  while (queue.length) {
    let items = queue.length;
    let lev = [];
    for (let i = 0; i < items; i++) {
      let cur = queue.shift();
      if (cur) {
        lev.push(cur.val);
        if (cur.left) {
          queue.push(cur.left);
        }
        if (cur.right) {
          queue.push(cur.right);
        }
      }
    }
    res.push(lev);
  }
  console.log(res);
}

test("create_list_node", () => {
  create_list_node(t.root as TreeNode);
});
