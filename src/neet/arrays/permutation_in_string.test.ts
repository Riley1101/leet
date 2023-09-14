import { expect, test } from "bun:test";

let s1 = "a";
let s2 = "ab";
let out = true;

/**
 * two pointers
 *  e i d b a o o
 *  ------i
 *  --------j
 */
function permuattion() {
  let map: Record<string, number> = {};
  for (let j of s1) {
    if (j in map) {
      map[j] += 1;
    } else {
      map[j] = 1;
    }
  }
  let left = 0;
  let right = 0;
  while (left < s2.length && right < s2.length) {
    if (
      left !== right &&
      s2[left] in map &&
      s2[right] in map &&
      right - left <= 1
    ) {
      return true;
    }
    if (s2[right] in map) {
      left = right;
    }
    right += 1;
  }
  return false;
}

test.skip("replace_gratest_right", () => {
  expect(permuattion()).toEqual(out);
});
