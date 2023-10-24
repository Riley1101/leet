import { test } from "bun:test";

import { LinkedList, Node } from ".";

let l = new LinkedList();
l.from_array([1, 3, 4, 2, 4, 5, 1]);

function partition(head: Node | null, target: number) {
  let left = new Node();
  let right = new Node();
  let ltail = left;
  let rtail = right;
  while (head) {
    if (head.value && head.value < target) {
      ltail.next = head;
      ltail = ltail.next;
    } else {
      rtail.next = head;
      rtail = rtail.next;
    }
    head = head.next;
  }
  ltail.next = right.next;
  rtail.next = null;
  return left.next;
}

function partition_2(node: Node | null, target: number) {
  let left = new Node();
  let right = new Node();
  let ltail = left;
  let rtail = right;
  while (node) {
    if (node.value && node.value < target) {
      ltail.next = node;
      ltail = ltail.next;
    } else {
      rtail.next = node;
      rtail = rtail.next;
    }
    ltail.next = right.next;
    rtail.next = null;

    node = node.next;
  }
}

test("partition", () => {
  let res = partition(l.head as Node, 5);
  console.log(res);
});
