import { expect, test } from "bun:test";
import { LinkedList, Node } from ".";
let l = new LinkedList();
l.from_array([1, 3, 5, 4, 7, 1]);

function delete_middle(node: Node) {
  let slow: Node | null = new Node(1);
  slow.next = new Node(2);
  slow.next.next = node;
  let fast: Node | null = node;
  while (fast && slow) {
    slow = slow.next;
    fast = fast.next?.next as Node;
  }
  if (slow && slow.next) slow.next = slow?.next?.next;
  return node;
}

test("delete_middle", () => {
  let res = delete_middle(l.head as Node);
  let o = l.print_node(res);
  expect(o).toEqual([1, 3, 4, 7, 1]);
});
