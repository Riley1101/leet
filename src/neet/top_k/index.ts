type Obj = {
  value: string;
  frequent: number;
};

let nums = [1, 1, 1, 2, 2, 3],
  k = 2;

export class MaxHeap {
  private data: Obj[];
  private length: number;
  constructor() {
    this.length = 0;
    this.data = [];
  }

  deleteElement(): Obj {
    let tmp = this.data[0];
    this.length--;
    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    return tmp;
  }

  addElement(ele: Obj) {
    if (this.length === 0) {
      this.data.push(ele);
      this.length++;
    } else {
      this.data.push(ele);
      this.heapifyUp(this.length++);
    }
  }

  private heapifyDown(idx: number) {
    let leftIdx = this.leftChild(idx);
    let leftV = this.data[leftIdx];
    let rightIdx = this.rightChild(idx);
    let rightV = this.data[rightIdx];

    let v = this.data[idx];
    // for one child
    if (idx > this.length || leftIdx >= this.length || rightIdx >= this.length)
      return;
    if (leftV.frequent > rightV.frequent && v.frequent < leftV.frequent) {
      [this.data[leftIdx], this.data[idx]] = [
        this.data[idx],
        this.data[leftIdx],
      ];
      this.heapifyDown(leftIdx);
    } else if (
      rightV.frequent > leftV.frequent &&
      v.frequent > rightV.frequent
    ) {
      [this.data[rightIdx], this.data[idx]] = [
        this.data[idx],
        this.data[rightIdx],
      ];
      this.heapifyDown(rightIdx);
    }
  }

  private heapifyUp(idx: number) {
    let v = this.data[idx];
    let p = this.parent(idx);
    let pV = this.data[p];
    if (v.frequent > pV.frequent) {
      [this.data[idx], this.data[p]] = [this.data[p], this.data[idx]];
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

function top_k() {
  let obj: { [key: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    element in obj ? (obj[element] += 1) : (obj[element] = 1);
  }
  let tmp: Obj[] = [];
  Object.keys(obj).forEach((item) => {
    tmp.push({ value: item, frequent: obj[item] });
  });
  let heap = new MaxHeap();
  tmp.forEach((item) => {
    heap.addElement(item);
  });
  let result = [];
  result.push(heap.deleteElement())
  console.log(heap)
  return result
}

console.log(top_k());
