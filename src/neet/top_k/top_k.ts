let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

export class MaxHeap {
  public length: number;
  data: Node[];
  constructor() {
    this.length = 0;
    this.data = [];
  }

  delete() {
    if (this.length === 0) {
      return -1;
    }
    this.length--;
    console.log(this.data, this.length);
    let out = this.data[0];
    return out;
  }

  private heapifyDown(idx: number) {
    let lIdx = this.leftChild(idx);
    let rIdx = this.rightChild(idx);
    if (idx > this.length || lIdx > this.length || rIdx > this.length) {
      return;
    }
    let v = this.data[idx];
    let lV = this.data[lIdx];
    let rV = this.data[rIdx];
    if (lV.count > rV.count && v.count < lV.count) {
      this.data[idx] = lV;
      this.data[lIdx] = v;
      this.heapifyDown(lIdx);
    } else if (rV.count > lV.count && v.count < rV.count) {
      this.data[idx] = rV;
      this.data[rIdx] = v;
      this.heapifyDown(rIdx);
    }
  }

  private heapifyUp(idx: number) {
    if (idx === 0) return;
    let p = this.parent(idx);
    let pV = this.data[p];
    let v = this.data[idx];
    if (v.count >= pV.count) {
      this.data[idx] = pV;
      this.data[p] = v;
      this.heapifyUp(p);
    }
  }

  insert(value: number, count: number) {
    let newNode = new Node(value, count);
    this.data[this.length] = newNode;
    this.heapifyUp(this.length++);
  }

  private leftChild(index: number) {
    return 2 * index + 1;
  }

  private rightChild(index: number) {
    return 2 * index + 2;
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }
}

export class Node {
  value: number;
  count: number;
  constructor(value: number, count: number) {
    this.value = value;
    this.count = count;
  }
}

function topK() {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let cu = map.get(nums[i]);
    if (cu) {
      map.set(nums[i], cu + 1);
    } else {
      map.set(nums[i], 1);
    }
  }
  let list = [...map];
  list.sort((o1, o2) => {
    if (o1[1] == o2[1]) return o2[0] - o1[0];
    else return o2[1] - o1[1];
  });
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(list[i][0]);
  }
  return result;
}

function top_k_2() {
  let count: { [key: string]: number } = {};
  for (let i of nums) {
    if (i in count) {
      count[i] += 1;
    } else {
      count[i] = 1;
    }
  }
  let objs: (number | number)[][] = [];
  Object.keys(count).forEach((item) => {
    objs.push([Number(item), count[item]]);
  });
  let sorted = objs.sort((a, b) => a[1] - b[2]);
  let result = [];
  for (let i = 0; i < k; i++) {
    result.push(sorted[i][0]);
  }
  return result;
}

console.log(top_k_2());
