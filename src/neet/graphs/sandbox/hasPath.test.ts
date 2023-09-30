import { expect, test } from "bun:test";

type G = Record<string, string[]>;
const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];

function buildGraph(edges: string[][]): G {
  let graph: G = {};
  for (let i of edges) {
    let [x, y] = i;
    if (!(x in graph)) {
      graph[x] = [];
    }
    if (!(y in graph)) {
      graph[y] = [];
    }
    graph[x].push(y);
    graph[y].push(x);
  }
  return graph;
}

function traverse(g: G, start: string, end: string, set: Set<string>): boolean {
  if (set.has(start)) return false;
  set.add(start);
  if (start === end) return true;
  for (let i of g[start]) {
    let has = traverse(g, i, end, set);
    if (has) return true;
  }
  return false;
}

function hadPath(g: string[][], start: string, end: string) {
  let graph = buildGraph(g);
  let s = new Set<string>();
  return traverse(graph, start, end, s);
}

test("hasPath", () => {
  expect(hadPath(edges, "i", "o")).toBe(false);
});
