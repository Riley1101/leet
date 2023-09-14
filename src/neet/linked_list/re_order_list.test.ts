import { test } from "bun:test";
import LinkedList, { Node } from ".";
const list = new LinkedList();
list.from_array([1, 2, 3, 4, 5]);

/**
 * @description - find the middle with fast and slow pointer
 * reverse the latter portion
 */
function reorder_linkedlist(head: Node) {
  /** find the middle */
  let slow: Node | undefined = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow?.next as Node;
    fast = fast.next.next;
  }
  let second = slow?.next;
  /** reverse the linkedlist */
  slow.next = undefined;
  let reversed = undefined;
  while (second) {
    let next = second.next;
    second.next = reversed;
    reversed = second;
    second = next;
  }

  /** merge the two lists */
  second = reversed;
  let first = head;
  while (second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1 as Node;
    second = tmp2;
  }
}

test("Reorder", () => {
  reorder_linkedlist(list.head as Node);
});
