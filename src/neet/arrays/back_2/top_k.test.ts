import { expect, test } from "bun:test";

let values = [1, 1, 1, 2, 2, 3],
  k = 2;
let out = [1, 2];

function top_k() {
  let map: Record<string, number> = {};
  for (let i of values) {
    if (i in map) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  }
  let v = Object.entries(map).sort((a, b) => b[1] - a[1]);
  let res = [];
  for (let i = 0; i < k; i++) {
    res.push(parseInt(v[i][0]));
  }
  return res;
}

test("top_k", () => {
  expect(top_k()).toEqual(out);
});
