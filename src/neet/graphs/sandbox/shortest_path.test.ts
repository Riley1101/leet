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

function traverse(g: G, queue: string[]) {}

function shortestPath(edges: string[][], start: string, end: string) {
  let g: G = buildGraph(edges);
  let s = new Set<string>();
  let shortes = 0;
  let q = [start];
}

test("shortest", () => {
  let res = shortestPath(edges, start, end);
  expect(res).toBe(2);
});
