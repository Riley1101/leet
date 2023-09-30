import { expect, test } from "bun:test";
type G = Record<string, string[]>;

const graph: G = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

/**
 * Dfs on directed acyclic graph
 *  a -> b
 *  |    |
 *  c    d
 *  |    |
 *  e    f
 */
function dfs_directed(graph: G, src: string) {
  let res = [];
  let stack: string[] = [src];
  while (stack.length > 0) {
    let cur = stack.pop() as string;
    res.push(cur);
    for (let n of graph[cur]) {
      stack.push(n);
    }
  }
  return res;
}

/**
 * Dfs on directed acyclic graph
 *  a -> b
 *  |    |
 *  c    d
 *  |    |
 *  e    f
 */

function traverse(g: G, src: string, res: string[]) {
  for (let i of g[src]) {
    res.push(i);
    traverse(g, i, res);
  }
  return res;
}
function dfs_directed_recursive(graph: G, src: string) {
  let res = [src];
  return traverse(graph, src, res);
}

test("dfs", () => {
  let res = dfs_directed_recursive(graph, "a");
  expect(res).toEqual(["a", "b", "d", "f", "c", "e"]);
});
