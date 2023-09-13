import { expect, test } from "bun:test";

import LinkedList, { Node } from ".";

let list1 = new LinkedList();
list1.from_array([1, 2, 3, 3, 5]);
let list2 = new LinkedList();
list2.from_array([2, 4, 5, 7]);

function merge_two_linked_list(
  list1: Node | undefined,
  list2: Node | undefined,
) {
  let dun = new Node(1);
  while (list1 && list2) {
    if (list1.value < list2.value) {
      dun.next = list1;
      list1 = list1.next;
    } else {
      dun.next = list2;
      list2 = list2.next;
    }
    dun = dun.next;
  }
  if (list1) {
    dun.next = list1;
  } else if (list2) {
    dun.next = list2;
  }

  return dun.next;
}
test("merge_two_linked_list", () => {
  let merged = merge_two_linked_list(list1.head, list2.head);
  let li = new LinkedList();
});
