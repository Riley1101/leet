import { expect, test } from "bun:test";
import LinkedList, { Node } from "./";

const ll = new LinkedList();
ll.from_array([1, 2, 3, 4, 5]);
let end = 2;

function remove_from_nth_end(head: Node): Node | undefined {
  let tmp = new Node(0);
  tmp.next = head;

  let fast = head;
  for (let i = 0; i < end; i++) {
    fast = fast.next as Node;
  }

  let slow = tmp;
  while (fast) {
    fast = fast.next as Node;
    slow = slow.next as Node;
  }
  let ne = slow.next;
  slow.next = ne?.next;
  return tmp.next;
}

test("removefrom n end", () => {
  let a = remove_from_nth_end(ll.head as Node);
  ll.head = a;

  expect(ll.into_array()).toEqual([1, 2, 3, 5]);
});
