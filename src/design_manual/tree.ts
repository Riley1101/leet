class Node {
  value: number;
  left?: Node;
  right?: Node;
  constructor(value: number) {
    this.value = value;
    this.left;
    this.right;
  }
}

class Tree {
  root?: Node;
  constructor() {
    this.root;
  }
  addChild(value: number) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return newNode;
    }
    let tmp = this.root;
    while (tmp) {
      if (value < tmp.value) {
        if (!tmp.left) {
          tmp.left = newNode;
          return newNode;
        }
        tmp = tmp.left;
      } else {
        if (!tmp.right) {
          tmp.right = newNode;
          return newNode;
        }
        tmp = tmp.right;
      }
    }
  }
}

let t = new Tree();
t.addChild(7);
t.addChild(10);
t.addChild(22);
t.addChild(8);
t.addChild(2);
t.addChild(3);
t.addChild(1);

function bfs(R: Node) {
  let queue = [R];
  let result = [];
  while (queue.length) {
    let v = queue.shift();
    result.push(v?.value);
    if (v?.left) {
      queue.push(v.left);
    }
    if (v?.right) {
      queue.push(v.right);
    }
  }
  console.log(result);
}

function dfs(R: Node) {
  let stack = [R];
  let result: number[] = [];
  while (stack.length) {
    let v = stack.pop();
    if (v?.right) {
      stack.push(v.right);
    }
    if (v?.left) {
      stack.push(v.left);
    }
    result.push(v?.value as number);
  }
  console.log(result);
}

function dfs_2(R: Node, result: number[]) {
  let v = R;
  if (v.left) {
    result = dfs_2(v.left, result);
  }
  if (v.right) {
    result = dfs_2(v.right, result);
  }
  result.push(v.value)
  return result;
}

console.log(dfs_2(t.root as Node, []));
