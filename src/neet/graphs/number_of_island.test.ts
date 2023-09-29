import { test, expect } from "bun:test";
let g = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
];

function bfs(visited: Set<number[]>, row: number, column: number) {
  let q: number[][] = [];
  visited.add([row, column]);
  q.push([row, column]);
  while (q.length) {
    let [row, column] = q.pop() as number[];
    let direction: number[][] = [
      // left
      [1, 0],
      // right
      [-1, 0],
      // top
      [0, 1],
      // bottom
      [0, -1],
    ];
    for (let dir in direction) {
      let r = row + Number(dir[0]);
      let c = column + Number(dir[1]);
      if (r < 0 || c < 0 || r >= g.length || c >= g[0].length) continue;
      if (g[r][c] == "1" && !visited.has([r, c])) {
        visited.add([r, c]);
        q.push([r, c]);
      }
    }
  }
}

function nums_of_islands(g: string[][]) {
  if (!g) return 0;
  let rows = g.length,
    cols = g[0].length;
  let count = 0;
  let visited = new Set<number[]>();

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (g[r][c] == "1" && !visited.has([r, c])) {
        bfs(visited, r, c);
        count += 1;
      }
    }
  }
  return count;
}

test.skip("nums_of_islands", () => {
  expect(nums_of_islands(g)).toBe(1);
});
