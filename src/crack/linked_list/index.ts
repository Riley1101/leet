export class Node {
  value: number | null;
  next: Node | null;
  constructor(value: number| null = null) {
    this.value = value;
    this.next = null;
  }
}

export class LinkedList {
  head: Node | null;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  push(val: number) {
    let newNode = new Node(val);
    if (this.head == null) {
      this.head = new Node(val);
      this.length++;
      return val;
    }
    let tmp: Node | null = this.head;
    while (tmp) {
      if (tmp.next == null) {
        tmp.next = newNode;
        this.length++;
        return newNode;
      }
      tmp = tmp.next;
    }
    return newNode;
  }

  from_array(nums: number[]) {
    for (let i of nums) {
      this.push(i);
    }
  }

  print_list() {
    let tmp: Node | null = this.head;
    for (let i = 0; i < this.length; i++) {
      if (tmp) {
        console.log(tmp?.value);
        tmp = tmp.next;
      }
    }
  }

  print_node(node: Node): number[] {
    let v = [];
    let n: Node | null = node;
    while (n) {
      v.push(n.value);
      n = n.next;
    }
    return v;
  }
}
