import { test } from "bun:test";
import { BinaryTree, TreeNode } from "./binary_tree.test";

const t = new BinaryTree();
let preOrder = [3, 9, 20, 15, 7];
let inOrder = [9, 3, 15, 20, 7];
t.from_array(inOrder);

function from_pre_and_in_order(preOrder: number[], inOrder: number[]) {
  if (!preOrder.length || !inOrder.length) {
    return null;
  }
  let rootEle = preOrder.shift() as number;
  let mid = inOrder.indexOf(rootEle);

  let leftBranch = inOrder.slice(0, mid);
  let rightBranch = inOrder.slice(mid + 1);

  let root = new TreeNode(preOrder[0]);

  root.left = from_pre_and_in_order(preOrder, leftBranch);
  root.right = from_pre_and_in_order(preOrder, rightBranch);

  return root;
}

function from_pre_and_in(preOrder: number[], inOrder: number[]) {
  if (!preOrder.length || !inOrder.length) {
    return null;
  }
  let root = preOrder.shift() as number;
  let inOrderIdx = inOrder.findIndex((val) => val == root);
  let leftBranch = inOrder.slice(0, inOrderIdx);
  let rightBranch = inOrder.slice(inOrderIdx + 1);

  let newRoot = new TreeNode(root);
  newRoot.left = from_pre_and_in(preOrder, leftBranch);
  newRoot.right = from_pre_and_in(preOrder, rightBranch);
  return newRoot;
}

test("from_pre_and_in_order", () => {
  let res = from_pre_and_in(preOrder, inOrder);
  console.log(res);
});
