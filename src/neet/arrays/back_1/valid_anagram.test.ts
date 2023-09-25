import { test, expect } from "bun:test";
let s = "anagram",
  t = "nagaram";

function valid_anagram() {
  let chars = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let c = s.charCodeAt(i);
    let p = c - "a".charCodeAt(0);
    chars[p] += 1;
  }
  for (let j = 0; j < t.length; j++) {
    let c = t.charCodeAt(j);
    let p = c - "a".charCodeAt(0);
    chars[p] -= 1;
  }
  for (let i of chars) {
    if (i !== 0) {
      return false;
    }
  }
  return true;
}

test("valid_anagram", () => {
  expect(valid_anagram()).toBe(true);
});
