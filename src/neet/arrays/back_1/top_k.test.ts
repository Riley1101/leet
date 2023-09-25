import { expect, test } from "bun:test";
let nums = [1, 1, 1, 2, 2, 3],
  k = 2;
let out = [1, 2];

function top_k() {
  let m = new Map<string, number>();
  for (let i = 0; i < nums.length; i++) {
    let c = nums[i].toString();
    if (m.has(c)) {
      m.set(c, (m.get(c) as number) + 1);
    } else {
      m.set(c, 1);
    }
  }
  let count = Array.from(m)
    .map(([k, _]) => [k, _])
    .sort((a, b) => (b[1] as number) - (a[1] as number));
  let res = [];
  for (let j = 0; j < k; j++) {
    res.push(Number(count[j][0]));
  }
  return res;
}

test("top_k", () => {
  expect(top_k()).toEqual(out);
});
