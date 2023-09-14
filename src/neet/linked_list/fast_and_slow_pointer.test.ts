import { expect, test } from "bun:test";
import LinkedList, { Node } from ".";
const l = new LinkedList();
l.from_array([1, 2, 3, 4, 5, 6]);

/**
 * find middle using fast and slow pointer
 * divide the lists into two parts
 * reverse the second part
 */

function fast_and_slow(node: Node) {
  // divide the list
  let fast = node.next;
  let slow: Node | undefined = node;
  while (fast && fast.next) {
    slow = slow?.next;
    fast = fast.next.next;
  }

  let first = node;
  let second = slow?.next;
  slow && (slow.next = undefined);
  // reverse the second
  let prev = undefined;
  while (second) {
    let tmp = second.next;
    second.next = prev;
    prev = second;
    second = tmp;
  }
  // reassign the prev to second
  // reorder the list
  second = prev;
  while (first && second) {
    let tmp1 = first.next;
    let tmp2 = second.next;
    first.next = second;
    second.next = tmp1;
    first = tmp1 as Node;
    second = tmp2;
  }
}

test.skip("fast_and_slow", () => {
  expect(fast_and_slow(l.head as Node)).toEqual([1, 2, 3]);
});
