import { expect, test } from "bun:test";

class MinStack {
  t: number;
  data: number[];
  min: number[];
  constructor() {
    this.t = -1;
    this.data = [];
    this.min = [];
  }

  push(val: number): void {
    if (this.t === -1) {
      this.data.push(val);
      this.min.push(val);
      this.t++;
    } else {
      this.data.push(val);
      this.min.push(Math.min(this.min[this.t], val));
      this.t++;
    }
  }
  pop(): void {
    this.data.pop();
    this.min.pop();
    this.t--;
  }

  top(): number {
    return this.data[this.t];
  }

  getMin(): number {
    return this.min[this.t];
  }
}
const input = [
  "MinStack",
  "push",
  "push",
  "push",
  "getMin",
  "pop",
  "top",
  "getMin",
];
function min_stack() {
  let s = new MinStack();
  s.push(-1);
  s.push(4);
  s.push(0);
  s.push(4);
  s.push(-3);
  console.log(s.data);
  console.log(s.getMin());
  s.pop();
  console.log(s.getMin());
  console.log(s.data);
}

test("min stack", () => {
  min_stack();
});
