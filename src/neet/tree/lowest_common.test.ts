import { BinaryTree, TreeNode } from "./binary_tree.test";

let t = new BinaryTree();
t.from_array([6, 2, 8, 0, 4, 7, 9, 3, 5]);

function lowest_common(root: TreeNode, p: TreeNode, q: TreeNode) {
  let cur = root;
  while (cur) {
    if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right as TreeNode;
    } else if (p.val < cur.val && q.val < cur.val) {
      cur = cur.left as TreeNode;
    } else {
      return cur;
    }
  }
}
