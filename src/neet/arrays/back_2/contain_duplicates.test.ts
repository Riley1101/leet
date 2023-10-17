import { expect, test } from "bun:test";

let nums = [1, 2, 3, 1];
let out = true;
function contain_dups() {
  let se = new Set();
  for (let i of nums) {
    if (se.has(i)) {
      return true;
    }
    se.add(i);
  }
  return false;
}

test("dups", () => {
  expect(contain_dups()).toBe(out);
});
