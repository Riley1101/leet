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
type Graph = {
  [key in Element]: { to: Element; w: number }[];
};

function bfs(graph: Graph, target: Element): number {
  let queue: Element[] = [target];
  let set = new Set(target);
  let distance = 0;
  while (queue.length) {
    let curChar = queue.shift() as Element;
    let cur = graph[curChar];
    console.log(curChar)
    if (curChar === "T") {
      return distance;
    }
    cur.forEach((item) => {
      distance += item.w;
      if (!set.has(item.to)) {
        queue.push(item.to);
      }
      set.add(item.to);
    });
  }
  return distance;
}

console.log(bfs(graph as Graph, "B"));
