import { expect, test } from "bun:test";
import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([1, 2]);
const t2 = new BinaryTree();
t2.from_array([1, null, 2]);
let out = false;

function same_tree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (p && !q) return false;
  if (!p && q) return false;
  if (p?.val !== q?.val) return false;
  return (
    same_tree(p?.left as TreeNode, q?.left as TreeNode) && 
    same_tree(p?.right as TreeNode, q?.right as TreeNode)
  );
}

test("maxDepth", () => {
  expect(same_tree(t.root, t2.root)).toBe(out);
});
