import { expect, test } from "bun:test";

import LinkedList, { Node } from "..";

let l1 = new LinkedList();
l1.from_array([1, 2, 4]);
let l2 = new LinkedList();
l2.from_array([1, 3, 4]);
let out = [1, 1, 2, 3, 4, 4];

function merge_two_linkedList(one: Node | undefined, two: Node | undefined) {
  let tmp = new Node(0);
  while (one && two) {
    if (one.value < two.value) {
      tmp.next = one;
      one = one.next;
    } else {
      tmp.next = two;
      two = two.next;
    }
    tmp = tmp.next as Node;
  }
  if (one) {
    tmp.next = one;
  } else if (two) {
    tmp.next = two;
  }
  console.log(tmp)
  return tmp.next;
}

test.skip("merge_two_linkedList", () => {
  let re = new LinkedList();
  re.head = merge_two_linkedList(l1.head, l2.head) as Node;
  expect(re.into_array()).toEqual(out);
});
