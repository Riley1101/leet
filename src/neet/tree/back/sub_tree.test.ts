import { expect, test } from "bun:test";
import { BinaryTree, TreeNode } from ".";

const t = new BinaryTree();
t.from_array([3, 4, 5, 1, 2]);
const t2 = new BinaryTree();
t2.from_array([4, 1, 2]);

let out = true;

function sameTree(t1: TreeNode | null, t2: TreeNode | null): boolean {
  if (!t1 && !t2) return true;
  if ((t1 && !t2) || (!t1 && t2)) {
    return false;
  }
  if (t1?.val !== t2?.val) return false;
  return (
    sameTree(t1?.left as TreeNode, t2?.left as TreeNode) &&
    sameTree(t1?.right as TreeNode, t2?.right as TreeNode)
  );
}

function sub_tree_of_another(
  root: TreeNode | null,
  subRoot: TreeNode | null,
): boolean {
  if (!subRoot) return false;
  if (!root) return false;
  if (sameTree(root, subRoot)) return true;
  return (
    sub_tree_of_another(root?.left as TreeNode, subRoot) ||
    sub_tree_of_another(root?.right as TreeNode, subRoot)
  );
}

test("maxDepth", () => {
  expect(sub_tree_of_another(t.root, t2.root)).toBe(out);
});
