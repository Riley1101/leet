import { expect, test } from "bun:test";

import LinkedList, { Node } from ".";

function reverse(node: Node | undefined) {
  let cur = node;
  let prev = undefined;
  while (cur) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  return prev?.next;
}

let l = new LinkedList();
l.from_array([1, 2, 3, 4, 5, 6]);

test("Reverse LinkedList", () => {
  l.reverse();
  expect(l.visit_nodes()).toEqual([6, 5, 4, 3, 2, 1]);
});
