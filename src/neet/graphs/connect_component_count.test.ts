import { test, expect } from "bun:test";

type G = Record<string, number[]>;

function traverse(graph: G, current: string, visited: Set<string>) {
  if (visited.has(current)) return false;
  visited.add(current);
  for (let ne of graph[current]) {
    traverse(graph, ne.toString(), visited);
  }
  return true;
}

function connectedComponentCount(graph: G) {
  const visited = new Set<string>();
  let count = 0;
  for (let node in graph) {
    let isNew = traverse(graph, node, visited);
    if (isNew) {
      count += 1;
    }
  }
  return count;
}

test("connectedComponentCount", () => {
  const data1: G = {
    0: [1, 2],
    1: [0, 3],
    2: [0],
    3: [1],
    4: [],
  };

  // Test case 1: Graph with 2 connected components
  let res1 = connectedComponentCount(data1);
  expect(res1).toBe(2);
});
