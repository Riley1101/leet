import LinkedList, { Node } from ".";

let list1 = new LinkedList();
list1.from_array([1, 2, 3, 3, 5]);
let list2 = new LinkedList();
list2.from_array([2, 4, 5, 7]);

function merge_two_linked_list(
  list1: Node | undefined,
  list2: Node | undefined,
) {
  let dumm = new Node(1);
  let tail = dumm;

  while (list1 && list2) {
    if (list1.value < list2.value) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  if (list1) {
    tail.next = list1;
  } else if (list2) {
    tail.next = list2;
  }
  console.log(dumm.next);
  return dumm.next;
}

merge_two_linked_list(list1.head, list2.head);
