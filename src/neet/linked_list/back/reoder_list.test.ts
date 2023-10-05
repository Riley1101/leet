import { expect, test } from "bun:test";
import LinkedList, { Node } from "./";

const ll = new LinkedList();
ll.from_array([1, 2, 3, 4, 5]);

function reorder(head: Node): Node | undefined {
  let slow = head;
  let fast = head.next;

  /**
   * split the list
   */
  while (fast && fast.next) {
    slow = slow.next as Node;
    fast = fast.next.next;
  }

  /**
   * reverse the second
   */
  let second = slow.next;
  slow.next = undefined 
  let prev = undefined;
  while (second) {
    let next = second.next;
    second.next = prev;
    prev = second;
    second = next;
  }

  second = prev;
  let first = head;
  while (second) {
    let tmp1 = first.next as Node;
    let tmp2 = second.next as Node;
    first.next = second;
    second.next = tmp1;
    first = tmp1;
    second = tmp2;
  }
  return first;
}

test.skip("reverse_linkedList", () => {
  let a = reorder(ll.head as Node);
  ll.head = a;
  console.log(ll.into_array());

  expect(ll.into_array()).toEqual([1, 5, 2, 4, 3]);
});
