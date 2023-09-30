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

function bfs_directed_acylic(graph: G, src: string) {
  let queue = [src];
  let res = [];
  while (queue.length) {
    let cur = queue.shift() as string;
    res.push(cur);
    for (let n of graph[cur]) {
      queue.push(n);
    }
  }
  return res;
}

function traverse(graph: G, queue: string[], res: string[]): string[] {
  if (!queue.length) return res;
  let cur = queue.shift() as string;
  res.push(cur);
  for (let n of graph[cur]) {
    queue.push(n);
  }
  return traverse(graph, queue, res);
}

function bfs_directed_acylic_recursive(graph: G, src: string) {
  let res: string[] = [];
  return traverse(graph, [src], res);
}

test("bfs_directed_acylic", () => {
  let res = bfs_directed_acylic_recursive(graph, "a");
  expect(res).toEqual(["a", "b", "c", "d", "e", "f"]);
});
