class Node {
  value: string;
  next: Node | undefined;
  constructor(value: string) {
    this.value = value;
    this.next;
  }
}

class LinkedList {
  head?: Node;
  constructor() {
    this.head;
  }
  addNode(value: string) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return newNode;
    }
    let tmp = this.head;
    while (tmp) {
      if (!tmp.next) {
        tmp.next = newNode;
        return newNode;
      } else {
        tmp = tmp.next;
      }
    }
  }
  insertNode(value: string, target: string) {
    let newNode = new Node(value);
    let tmp = this.head;
    let parent = this.head;
    while (tmp) {
      if (tmp.value === target) {
        if (parent) {
          newNode.next = tmp;
          parent.next = newNode;
          return newNode;
        }
      } else {
        parent = tmp;
        tmp = tmp.next;
      }
    }
  }
}

let li = new LinkedList();
li.addNode("Hello");
li.addNode("World");
li.insertNode("Between", "World");
console.log(li);
