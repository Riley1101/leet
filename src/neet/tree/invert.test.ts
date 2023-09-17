import { test, expect } from "bun:test";
import { BinaryTree, Node } from "./binary_tree.test";

let t = new BinaryTree();
t.from_array([4, 2, 7, 1, 3, 6, 9]);

function invert(root: Node) {
  console.log(root);
}

test("invert", () => {
  expect(invert(t.root as Node)).toEqual([4, 7, 2, 9, 6, 3, 1]);
});
