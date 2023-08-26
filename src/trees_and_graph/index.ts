export interface Node {
  value: string;
  children: Node[];
}

export class Tree implements Node {
  value: string;
  children: Node[];
  constructor(value: string) {
    this.children = [];
    this.value = value;
  }

  addChild(value: string) {
    let ch = new Tree(value);
    this.children.push(ch);
    return ch;
  }
}

let t = new Tree("parent");
t.addChild("child1");
t.addChild("child2");
t.addChild("child3");

function traverse(tree: Node) {
  tree.children.forEach((tr) => {
    traverse(tr);
  });
}

traverse(t);
