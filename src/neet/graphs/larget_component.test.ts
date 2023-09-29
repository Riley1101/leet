import { expect, test } from "bun:test";

type G = Record<string, string[]>;

let g: G = {
  0: ["8", "1", "5"],
  1: ["0"],
  5: ["0", "8"],
  8: ["0", "5"],
  2: ["3", "4"],
  3: ["2", "4"],
  4: ["3", "2"],
};

function traverse(g: G, current: string, set: Set<string>): number {
  if (set.has(current)) return 0;
  set.add(current);
  let size = 1;
  for (let n of g[current]) {
    size += traverse(g, n, set);
  }
  return size;
}

function larget_component(g: G) {
  let s = new Set<string>();
  let max = -Infinity;
  for (let n in g) {
    const size = traverse(g, n, s);
    max = Math.max(size, max);
  }
  return max;
}

test("larget_component", () => {
  let z = larget_component(g);
  expect(z).toBe(4);
});
