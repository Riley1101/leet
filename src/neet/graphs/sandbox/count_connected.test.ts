import { test, expect } from "bun:test";
import data from "../../../trees_and_graph/data";

type G = Record<string, number[]>;
const data1: G = {
  0: [1, 2],
  1: [0, 3],
  2: [0],
  3: [1],
  4: [],
};

function traverse(g: G, cur: string, set: Set<string>) {
  if (set.has(cur)) {
    return false;
  }
  set.add(cur);
  for (let i of g[cur]) {
    traverse(g, i.toString(), set);
  }
  return true;
}

function count_connected(g: G) {
  let s = new Set<string>();
  let count = 0;
  for (let i in g) {
    let isNew = traverse(g, i.toString(), s);
    if (isNew) {
      count++;
    }
  }
  return count;
}

test("count_connected", () => {
  let count = count_connected(data1);
  expect(count).toBe(2);
});
