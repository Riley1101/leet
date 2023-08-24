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

  private traverse(value: string, children: Node[]): Node | undefined {
    for (let i = 0; i < children.length; i++) {
      let chi = children[i];
      if (chi.value === value) {
        return chi;
      } else {
        return this.traverse(value, chi.children);
      }
    }
  }

  private traverse_p(
    value: string,
    p: Node,
  ):
    | {
        p: Node;
        v: Node;
      }
    | undefined {
    let children = p.children;
    for (let i = 0; i < children.length; i++) {
      let c = children[i];
      if (c.value === value) {
        return { p: p, v: c };
      } else return this.traverse_p(value, c);
    }
  }
  findChild(value: string) {
    return this.traverse(value, this.children);
  }
  removeChild(value: string) {
    let target = this.traverse_p(value, this);
    target?.p.children.concat(target.v.children);
    target?.p.children.filter((val) => val.value === value);
  }
}

let t = new Tree("parent");
t.addChild("Jog").addChild("Cool").addChild("lol");

t.removeChild("Cool");
console.log(t);
