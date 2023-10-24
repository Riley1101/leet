import { test } from "bun:test";
import { TreeNode, BinaryTree } from "./tree";

let t = new BinaryTree();
t.from_array([5, 2, 7, 1, 3, 6, 9]);

function is_valid(node: TreeNode, left: TreeNode, right: TreeNode) {
  if (!node) return true;
  if (!(node.val < node.right && node.val > right.left)) {
    return false;
  }
}

function valid_bst(t: TreeNode) {}

test("valid", () => {
  valid_bst(t.root);
});
