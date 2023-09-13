/**
 * @module {Node, LinkedList}
 */
export class Node {
  value: number;
  next?: Node;
  constructor(value: number) {
    this.value = value;
    this.next;
  }
}

export default class LinkedList {
  head?: Node;
  length: number;
  constructor() {
    this.head;
    this.length = 0;
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
  from_array(arrs: number[]) {
    for (let i of arrs) {
      this.push(i);
    }
  }
}
