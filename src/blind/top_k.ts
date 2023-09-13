class MaxHeap {
  values: number[];
  length: number;
  constructor() {
    this.values = [];
    this.length = 0;
  }

  add(value: number) {
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
    if (l < this.length && lV > rV) {
      largest = l;
    }
    if (r < this.length && rV > lV) {
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
    if (V > pV) {
      this.values[p] = V;
      this.values[idx] = pV;
      this.heapifyUp(p);
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

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
function top_k() {
  let h = new MaxHeap();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    h.add(nums[i]);
  }
  for (let j = 0; j < k; j++) {
    res.push(h.remove());
  }
  return res;
}

console.log(top_k());
