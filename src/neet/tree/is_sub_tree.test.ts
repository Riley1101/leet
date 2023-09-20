import { expect, test } from "bun:test";

import { BinaryTree, Node } from "./binary_tree.test";

let t1 = new BinaryTree();
let t2 = new BinaryTree();
t1.from_array([1, 1]);
t2.from_array([1]);

function same_tree(p: Node | null, q: Node | null): boolean {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) {
    return false;
  }
  if (p?.value !== q?.value) return false;
  return (
    same_tree(p?.left as Node, q?.left as Node) &&
    same_tree(p?.right as Node, q?.right as Node)
  );
}

function sub_tree(root: Node | null, subRoot: Node | null): boolean {
  if (!subRoot) return false;
  if (!root) return false;
  if (same_tree(root, subRoot)) {
    return true;
  }
  return sub_tree(root.left, subRoot) || sub_tree(root.right, subRoot);
}

test("sub_tree", () => {
  expect(sub_tree(t1.root as Node, t2.root as Node)).toBe(true);
});
