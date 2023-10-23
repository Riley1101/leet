import { expect, test } from "bun:test";

class Node {
  left: Node | null;
  right: Node | null;
  value: number;
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
function create_min_bst(arr: number[], start: number, end: number) {
  if (end < start) {
    return null;
  }
  let mid = Math.floor((start + end) / 2);
  let root = new Node(arr[mid]);
  root.left = create_min_bst(arr, start, mid - 1);
  root.right = create_min_bst(arr, mid + 1, end);
  return root;
}

function breadth_first_search(root: Node, res: number[]) {
  let queue = [root];
  while (queue.length) {
    let curr = queue.shift();
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
}

function inOrder(node: Node, res: number[]) {
  if (node.left) {
    res = inOrder(node.left, res);
  }
  res.push(node.value);
  if (node.right) {
    res = inOrder(node.right, res);
  }
  return res;
}

function mintree() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return create_min_bst(arr, 0, arr.length - 1);
}
test("min_tree", () => {
  let res = mintree();
  let a = inOrder(res, []);
  console.log(a);
  breadth_first_search(res, []);
});
