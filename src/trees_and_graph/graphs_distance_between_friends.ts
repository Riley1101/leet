let graph = {
  A: [
    { to: "B", w: 3 },
    { to: "D", w: 2 },
  ],
  B: [{ to: "C", w: 2 }],
  C: [{ to: "T", w: 2 }],
  D: [
    { to: "F", w: 1 },
    { to: "D", w: 4 },
  ],
  E: [{ to: "C", w: 5 }],
  F: [{ to: "C", w: 3 }],
  T: [],
};

type Element = keyof typeof graph;

function dfs(start: Element) {
  let set = new Set();
  let stack: Element[] = [start];
  while (stack.length) {
    let cur: Element = stack.pop() as Element;
    if (!set.has(cur)) {
        console.log(cur)
      let curNode = graph[cur];
      curNode.forEach((val) => {
        if (stack.indexOf(val.to as Element) === -1) {
          stack.push(val.to as Element);
        }
      });
    }else{
        set.add(cur)
    }
  }
}

console.log(dfs("A"));
