import { expect, test } from "bun:test";
import { LinkedList, Node } from ".";
let l = new LinkedList();
l.from_array([1, 3, 4, 2, 4, 5, 1]);

function remove_duplicates(node: Node) {
  let s = new Set();
  let h: Node | null = node;
  let p = null;
  while (h) {
    if (s.has(h.value) && p) {
      p.next = h.next;
    }
    s.add(h.value);
    p = h;
    h = h.next;
  }
  return node;
}

test("remove_duplicates", () => {
  let res = remove_duplicates(l.head as Node);
  let g = l.print_node(res);
  expect(g).toEqual([1, 3, 4, 2, 5]);
});
