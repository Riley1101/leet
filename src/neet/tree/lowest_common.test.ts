import { BinaryTree, Node } from "./binary_tree.test";

let t = new BinaryTree();
t.from_array([6, 2, 8, 0, 4, 7, 9, 3, 5]);

function lowest_common(root: Node, p: Node, q: Node) {
  let cur = root;
  while (cur) {
    if (p.value > cur.value && q.value > cur.value) {
      cur = cur.right as Node;
    } else if (p.value < cur.value && q.value < cur.value) {
      cur = cur.left as Node;
    } else {
      return cur;
    }
  }
}
