import { test, expect } from "bun:test";

/**
 * @description to check if string is permutation
 *
 */
function permutation(s: string, t: string) {
  if (s.length !== t.length) return false;
  let chars: boolean[] = new Array(26).fill(false);
  for (let i = 0; i < s.length; i++) {
    let pos = s.charCodeAt(i) - "a".charCodeAt(0);
    chars[pos] = true;
  }
  for (let i = 0; i < t.length; i++) {
    let pos = t.charCodeAt(i) - "a".charCodeAt(0);
    chars[pos] = false;
  }
  for (let i of chars) {
    if (i) {
      return false;
    }
  }
  return true;
}

test("permutation", () => {
  let s1 = "rldwoo";
  let t1 = "worldo";
  expect(permutation(s1, t1)).toBe(true);

  let s2 = "abc";
  let t2 = "bca";
  expect(permutation(s2, t2)).toBe(true);

  let s3 = "hello";
  let t3 = "holla";
  expect(permutation(s3, t3)).toBe(false);

  let s4 = "abcde";
  let t4 = "edcba";
  expect(permutation(s4, t4)).toBe(true);

  let s5 = "apple";
  let t5 = "paple";
  expect(permutation(s5, t5)).toBe(true);

  let s6 = "world";
  let t6 = "word";
  expect(permutation(s6, t6)).toBe(false);
});
