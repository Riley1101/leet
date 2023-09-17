import { test, expect } from "bun:test";

function is_unique_2(s: string) {
  let set = new Set();
  for (let i of s) {
    if (set.has(i)) {
      return false;
    }
    set.add(i);
  }
  return true;
}

test("is unique", () => {
  let s = "hello world";
  expect(is_unique_2(s)).toBe(false);
});
