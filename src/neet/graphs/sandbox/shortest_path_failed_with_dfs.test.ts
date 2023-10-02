import { expect, test } from "bun:test";

let start = "w";
let end = "z";
let edges: string[][] = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
];

type G = Record<string, string[]>;

function buildGraph(edges: string[][]) {
  let g: G = {};
  for (let i of edges) {
    let [x, y] = i;
    if (!(x in g)) {
      g[x] = [];
    }
    if (!(y in g)) {
      g[y] = [];
    }
    g[x].push(y);
    g[y].push(x);
  }
  return g;
}

function traverse(
  g: G,
  current: [string, number],
  end: string,
  set: Set<string>,
) {
  if (set.has(current[0]) && current[0] !== end) return 0;
  set.add(current[0]);
  if (current[0] === end) {
    return current[1];
  }
  let localmax = 1;
  for (let i of g[current[0]]) {
    localmax += traverse(g, [i, localmax], end, set);
  }
  return localmax;
}

function shortestPath(edges: string[][], start: string, end: string) {
  let g: G = buildGraph(edges);
  let current: [string, number] = [start, 0];
  let s = new Set<string>();
  let max = traverse(g, current, end, s);
  return max;
}

test.skip("shortest", () => {
  let res = shortestPath(edges, start, end);
  expect(res).toBe(2);
});
