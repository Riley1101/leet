import { expect, test } from "bun:test";

type T = {
  name: string;
  count: number;
};

class MaxHeap {
  values: T[];
  length: number;
  constructor() {
    this.values = [];
    this.length = 0;
  }

  add(value: T) {
    this.values[this.length] = value;
    this.heapifyUp(this.length++);
  }

  remove() {
    if (this.length == 0) {
      return;
    }
    let out = this.values[0];
    this.length--;
    if (this.length == 0) {
      this.values = [];
      return out;
    }
    this.values[0] = this.values[this.length];
    this.heapifyDown(0);
    return out;
  }

  private heapifyDown(idx: number) {
    let l = this.leftChild(idx);
    let r = this.rightChild(idx);
    let largest = idx;
    let lV = this.values[l];
    let rV = this.values[r];
    let v = this.values[idx];
    if (l < this.length && lV.count > rV.count) {
      largest = l;
    }
    if (r < this.length && rV.count > lV.count) {
      largest = r;
    }
    if (largest !== idx) {
      this.values[idx] = this.values[largest];
      this.values[largest] = v;
      this.heapifyDown(largest);
    }
  }

  private heapifyUp(idx: number) {
    let p = this.parent(idx);
    let pV = this.values[p];
    let V = this.values[idx];
    if (pV && V) {
      if (V.count > pV.count) {
        this.values[p] = V;
        this.values[idx] = pV;
        this.heapifyUp(p);
      }
    }
  }

  private leftChild(idx: number) {
    return 2 * idx + 1;
  }
  private rightChild(idx: number) {
    return 2 * idx + 2;
  }
  private parent(idx: number) {
    return Math.floor((idx - 1) / 2);
  }
}

let nums = [5, 3, 1, 1, 1, 3, 5, 73, 1],
  k = 3;
function top_k() {
  let h = new MaxHeap();
  let map: Record<string, number> = {};

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = nums[i] in map ? map[nums[i]] + 1 : 1;
  }

  let d = [];
  for (let i in map) {
    d.push({ name: i, count: map[i] });
  }
  console.log(d,'d')
  for (let i of d) {
    h.add(i);
  }
  /* for (let i = 0; i < k; i++) {
    res.push(Number(h.remove()?.name));
  } */
  console.log(h);
}

test("top_k", () => {
  expect(top_k()).toEqual([1, 3, 5]);
});
