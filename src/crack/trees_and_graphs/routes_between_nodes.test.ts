import { expect, test } from "bun:test";

let g = [[0, 2, 4], [3, 4], [3], [], []];

function routes_between_nodes(start: number, end: number) {
  let stack = [...g[start]];
  while (stack.length) {
    let cur = stack.pop() as number;
    if (cur === end) return true;
    stack = stack.concat(g[cur]);
  }
  return false;
}

test("routes_between_nodes", () => {
  expect(routes_between_nodes(1, 4)).toBe(true);
});
