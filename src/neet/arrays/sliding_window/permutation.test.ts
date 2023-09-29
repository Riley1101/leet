import { expect, test } from "bun:test";

let s1 = "adc",
  s2 = "dcda";
let out = true;
/**
 *  use window so split the words into s2's length
 *  left,
 *  right
 *  write a method to check if its permutation
 */

function isPermutation(check: string, target: string) {
  if (check.length !== target.length) return false;
  let map: Record<string, number> = {};
  for (let i of check) {
    map[i] = i in map ? map[i] + 1 : 1;
  }
  for (let i of target) {
    if (i in map) {
      if (map[i] === 0) {
        return false;
      }
      map[i] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

function permutation(s1: string, s2: string) {
  let left = 0;
  for (let right = 0; right < s2.length; right++) {
    while (right - left + 1 >= s1.length) {
      let s = s2.slice(left, right + 1);
      if (isPermutation(s, s1)) {
        return true;
      }
      left++;
    }
  }
  return false;
}

test("permutation", () => {
  expect(permutation(s1, s2)).toEqual(out);
});
