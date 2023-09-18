import { expect, test } from "bun:test";

export class Node {
  value: number;
  left: Node | null;
  right: Node | null;
  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinaryTree {
  root: Node | null;
  constructor() {
    this.root = null;
  }
  add(value: number) {
    let newNode = new Node(value);
    if (this.root == null) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (tmp) {
      if (value < tmp.value) {
        if (tmp.left === null) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (tmp.right === null) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }

  from_array(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      this.add(arr[i]);
    }
  }
}

export function breadth_first_search(queue: Node[], res: number[]): number[] {
  if (!queue.length) return res;
  let curr = queue.shift() as Node;
  res.push(curr.value);
  if (curr.left) {
    queue.push(curr.left);
  }
  if (curr.right) {
    queue.push(curr.right);
  }
  return breadth_first_search(queue, res);
}

export function pre_order_traversals(node: Node, res: number[]) {
  let n = node;
  res.push(n.value);
  if (n.left) {
    res = pre_order_traversals(n.left, res);
  }
  if (n.right) {
    res = pre_order_traversals(n.right, res);
  }
  return res;
}

export function in_order_traversals(node: Node, res: number[]) {
  let n = node;
  if (n.left) {
    res = in_order_traversals(n.left, res);
  }
  res.push(n.value);
  if (n.right) {
    res = in_order_traversals(n.right, res);
  }
  return res;
}

export function post_order_traversals(node: Node, res: number[]) {
  let n = node;
  if (n.left) {
    res = post_order_traversals(n.left, res);
  }
  if (n.right) {
    res = post_order_traversals(n.right, res);
  }
  res.push(n.value);
  return res;
}
test.skip("BinaryTree", () => {
  let bt = new BinaryTree();
  expect(pre_order_traversals(bt.root as Node, [])).toEqual([
    12, 4, 2, 1, 3, 5, 14, 13, 16,
  ]);
  expect(in_order_traversals(bt.root as Node, [])).toEqual([
    1, 2, 3, 4, 5, 12, 13, 14, 16,
  ]);
  expect(post_order_traversals(bt.root as Node, [])).toEqual([
    1, 3, 2, 5, 4, 13, 16, 14, 12,
  ]);
  expect(breadth_first_search([bt.root as Node], [])).toEqual([
    12, 4, 14, 2, 5, 13, 16, 1, 3,
  ]);
});
