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

function permutation(s1: string, s2: string) {
  if (s1.length > s2.length) return false;
  let s1Count = new Array(26).fill(0);
  let s2Count = new Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    let post1 = s1.charCodeAt(i) - "a".charCodeAt(0);
    let post2 = s2.charCodeAt(i) - "a".charCodeAt(0);
    s1Count[post1] += 1;
    s2Count[post2] += 1;
  }
  let matches = 0;
  for (let j = 0; j < 26; j++) {
    if (s1Count[j] == s2Count[j]) {
      matches++;
    }
  }
  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches == 26) return true;
    let p = s2.charCodeAt(right) - "a".charCodeAt(0);
    s2Count[p] += 1;
    if (s1Count[p] == s2Count[p]) {
      matches++;
    } else if (s1Count[p] + 1 == s2Count[p]) {
      matches--;
    }
  }

}

test("permutation", () => {
  expect(permutation(s1, s2)).toEqual(out);
});
