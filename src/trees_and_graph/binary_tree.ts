export class Node {
  yes: Node | null;
  no: Node | null;
  question: string;
  constructor(value: string) {
    this.yes = null;
    this.no = null;
    this.question = value;
  }
}

export class BinaryTree {
  yes?: Node;
  no?: Node;
  question: string;
  constructor(ques: string) {
    this.question = ques;
    this.yes = undefined;
    this.no = undefined;
  }

  addNode(node: Node, question: string, type: "yes" | "no") {
    let newNode = new Node(question);
    if (type == "yes") {
      if (!node.yes) {
        node.yes = newNode;
      } else {
        this.addNode(node.yes, question, type);
      }
    } else if (type == "no") {
      if (!node.no) {
        node.no = newNode;
      } else {
        this.addNode(node.no, question, type);
      }
    }
  }
}

let bt = new BinaryTree("How do you like it?");
bt.addNode(bt as Node, "I liked it", "yes");
bt.addNode(bt as Node, "No, i hate it", "no");

bt.addNode(bt as Node, "Check it out", "yes");
bt.addNode(bt as Node, "where am I", "no");
bt.addNode(bt as Node, "Be gone", "no");

console.log(bt);
