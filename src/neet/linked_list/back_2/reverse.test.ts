import { test } from "bun:test";
import LinkedList, { Node } from "..";

let l = new LinkedList();
l.from_array([1, 2, 3, 4, 5]);

function reverse(node: Node) {
  let cur: Node | undefined = node;
  let prev: Node | undefined = undefined;
  while (cur) {
    let tmp: Node | undefined = cur.next;
    cur.next = prev;
    prev = cur;
    cur = tmp;
  }
  console.log(prev);
}

function reverse_recursive(node: Node, prev: Node): Node {
  if (!node) return prev;
  let tmp = node.next;
  node.next = prev;
  return reverse_recursive(tmp as Node, node);
}

test("reverse", () => {
  //  reverse(l.head as Node);
  let es = reverse_recursive(l.head as Node, new Node(1));
  l.head = es;
  let res = l.visit_nodes();

  console.log(res);
});
