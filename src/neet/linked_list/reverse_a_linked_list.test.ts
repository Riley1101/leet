class Node {
  value: number;
  next?: Node;
  constructor(value: number) {
    this.value = value;
    this.next;
  }
}

class LinkedList {
  head?: Node;
  length: number;
  constructor() {
    this.head;
    this.length = 0;
  }

  reverse_4() {
    let prev = undefined;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  reverse() {
    let prev = undefined;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  reverse_2() {
    let prev = undefined;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  reverse_3() {
    let prev = undefined;
    let cur = this.head;
    while (cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next;
    }
    this.head = prev;
  }

  push(value: number) {
    let newNode = new Node(value);
    if (this.head === undefined) {
      this.head = newNode;
      this.length += 1;
      return newNode;
    }
    let tmp = this.head;
    while (tmp) {
      if (tmp.next === undefined) {
        tmp.next = newNode;
        this.length += 1;
        return newNode;
      } else {
        tmp = tmp.next;
      }
    }
  }
  visit_nodes() {
    let tmp = this.head;
    let res = [];
    for (let i = 0; i < this.length; i++) {
      res.push(tmp?.value);
      tmp = tmp?.next;
    }
    return res;
  }
}

let l = new LinkedList();
l.push(1);
l.push(2);
l.push(3);
l.push(4);
l.push(5);
l.push(6);
l.visit_nodes();
l.reverse_4();
l.visit_nodes();
