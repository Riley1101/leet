import { expect, test } from "bun:test";

type G = Record<string, string[]>;

let g: G = {
  0: ["8", "1", "5", "4"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

function traverse(g: G, cur: string, s: Set<string>) {
  if (s.has(cur)) return 0;
  s.add(cur);
  let localMax = 1;
  for (let neig in g[cur]) {
    localMax += traverse(g, neig, s);
  }
  return localMax;
}

function largest_island(graph: G) {
  let n = "0";
  let s = new Set<string>();
  let max = -Infinity;
  for (let i in graph[n]) {
    let localMax = traverse(graph, i, s);
    max = Math.max(max, localMax);
  }
  return max;
}

test("largest_island", () => {
  let res = largest_island(g);
  expect(res).toBe(4);
});
