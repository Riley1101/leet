import { expect, test } from "bun:test";
import LinkedList, { Node } from "./";

const ll = new LinkedList();
ll.from_array([1, 2, 3, 4, 5]);

function reverse_linkedList(head: Node): Node | undefined {
  let cur = head;
  let prev = undefined;
  while (cur) {
    let back = cur.next as Node;
    cur.next = prev;
    prev = cur;
    cur = back;
  }
  return prev;
}

test("reverse_linkedList", () => {
  let a = reverse_linkedList(ll.head as Node);
  ll.head = a;

  expect(ll.into_array()).toEqual([5, 4, 3, 2, 1]);
});
