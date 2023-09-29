import { expect, test } from "bun:test";

type G = Record<string, string[]>;
const g: G = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "h"],
  j: ["i"],
  k: [],
};

const hasPath = (g: G, src: string, dst: string) => {
  if (src == dst) return true;
  for (let neigh of g[src]) {
    if (hasPath(g, neigh, dst) === true) {
      return true;
    }
  }
  return false;
};

const hasPath_2 = (g: G, src: string, dst: string) => {
  const queue: string[] = [src];
  while (queue.length) {
    let cur = queue.pop() as string;
    if (cur == dst) return true;
    for (let neigh of g[cur]) {
      queue.push(neigh);
    }
  }
  return false;
};

test("hasPath", () => {
  let res = hasPath_2(g, "f", "h");
  expect(res).toBe(true);
});
