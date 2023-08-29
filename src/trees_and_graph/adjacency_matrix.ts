import graph, { WeightedAdjacencyMatrix } from "./data";

function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number) {
  const seen = new Array(graph.length).fill(false);
  const prev = new Array(graph.length).fill(-1);
  seen[source] = true;
  let q = [source];
  do {
    const curr = q.shift() as number;
    if (curr === needle) {
      break;
    }
    const adj = graph[curr];
    for (let i = 0; i < graph.length; i++) {
      if (adj[i]=== 0) continue;
      if (seen[i]) {
        continue;
      }
      seen[i] = true;
      prev[i] = curr;
      q.push(i);
    }
    seen[curr] = true;
  } while (q.length);

  let cur = needle;
  const out = [];
  while (prev[cur] !== -1) {
    out.push(cur);
    cur = prev[cur];
  }
  if (out.length) {
    return [source].concat(out.reverse());
  }
  return [];
}
console.log(bfs(graph, 0, 4));
