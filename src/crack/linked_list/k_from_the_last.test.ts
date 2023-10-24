import { expect, test } from "bun:test";
import { LinkedList, Node } from ".";
let l = new LinkedList();
l.from_array([1, 3, 4, 2, 4, 5, 1]);

function K_th_from_last(node: Node, n: number) {
  let first: Node | null = node;
  let slow: Node | null = new Node(1);
  slow.next = node;

  for (let i = 0; i < n; i++) {
    if (first) first = first.next;
  }
  while (first && slow) {
    first = first.next;
    slow = slow.next;
  }
  if (slow && slow.next) {
    slow.next = slow.next?.next;
  }
  return node;
}

test("K_th_from_last", () => {
  let res = K_th_from_last(l.head as Node, 2);
  let o = l.print_node(res);
  expect(o).toEqual([1, 3, 4, 2, 4, 1]);
});
