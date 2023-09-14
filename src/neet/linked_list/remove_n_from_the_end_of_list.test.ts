import { expect, test } from "bun:test";
import LinkedList, { Node } from ".";
const out = [1, 2, 3, 4, 6];

const l = new LinkedList();
l.from_array([1, 2, 3, 4, 5, 6]);

/**
 * description - Remove (n)th from the end of the list
 * @param node - Node
 * @return number[]
 * solution - two pointer technique
 * always maintain the distance between pointers by n
 * start left at the dummy but right at the (n)th place
 */
function remove_n_from_end(node: Node, n: number): number[] {
  let dum = new Node(0);
  dum.next = node;
  let left: Node | undefined = dum;
  let right: Node | undefined = node;
  for (let i = 0; i < n; i++) {
    right = right.next as Node;
  }
  while (right) {
    left = left?.next;
    right = right.next;
  }
  let tmp = left?.next;
  if (left?.next) {
    left.next = tmp?.next;
  }
  l.head = dum.next;
  l.length -= 1;
  return l.into_array();
}

test("remove_n_from_end", () => {
  expect(remove_n_from_end(l.head as Node, 2)).toEqual(out);
});
