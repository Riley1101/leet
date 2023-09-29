import { test, expect } from "bun:test";
import exp from "constants";

type G = Record<string, string[]>;

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

/*
const g: G = {
  i: ["j", "k"],
  j: ["i", "k"],
  k: ["i", "m", "l", "j"],
  m: ["k"],
  l: ["k"],
  o: ["n"],
  n: ["o"],
}; 
*/
const buildGraph = (ed: string[][]): G => {
  const graph: G = {};
  for (let g of ed) {
    const [a, b] = g;
    if (!(a in graph)) {
      graph[a] = [];
    }
    if (!(b in graph)) {
      graph[b] = [];
    }
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

function hasPath(g: G, src: string, dst: string, visited: Set<string>) {
  if (visited.has(src)) return false;
  visited.add(src);
  if (src == dst) return true;
  for (let n of g[src]) {
    if (hasPath(g, n, dst, visited) == true) {
      return true;
    }
  }
  return false;
}

function depthFirst(g: string[][], src: string, dst: string) {
  const adj = buildGraph(g);
  let s = new Set<string>();
  const has = hasPath(adj, src, dst, s);
  expect(has).toBeTruthy();
}

test("depthFirst", () => {
  depthFirst(edges, "i", "l");
});
