import { expect, test } from "bun:test";

const graph: Record<string, string[]> = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

function breadthFirstSearch(graph: Record<string, string[]>, source: string) {
  const stack = [source];
  let res = [];
  while (stack.length > 0) {
    const cur = stack.pop() as string;
    res.push(cur);
    for (let nei of graph[cur]) {
      stack.push(nei);
    }
  }
  return res;
}

test("breadthFirstSearch", () => {
  const res = breadthFirstSearch(graph, "a");
  expect(res).toEqual(["a", "c", "e", "b", "d", "f"]);
});
