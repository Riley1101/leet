import { test, expect } from "bun:test";

/**
 * lets says chars is between a - z
 */
let char = "abcdefgHIGJKML";
function isUnique(s: string) {
  let arr = new Array(128).fill(false);
  for (let i = 0; i < s.length; i++) {
    let char = s.charCodeAt(i);
    let position = char - "A".charCodeAt(0);
    if (arr[position] == true) return false;
    arr[position] = true;
  }
  return true;
}

test("is unique", () => {
  expect(isUnique(char)).toBe(true);
});
