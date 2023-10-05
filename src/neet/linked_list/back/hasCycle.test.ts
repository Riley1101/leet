import { expect, test } from "bun:test";
import LinkedList, { Node } from "./";

const ll = new LinkedList();
ll.from_array([1, 2, 3, 4, 5, 1]);

function hasCyclic(head: Node): boolean {
  let tmp = head;
  let set = new Set<number>();
  while (tmp) {
    if (set.has(tmp.value)) {
      return true;
    }
    tmp = tmp.next as Node;
    set.add(tmp.value);
  }
  return false
}

test("has cycle ", () => {
  let a = hasCyclic(ll.head as Node);

  expect(hasCyclic(ll.head as Node)).toEqual(true);
});
