import { expect, test } from "bun:test";

let s = "anagram",
  t = "nagaram";
let out = true;

function valid_anagram(s: string, t: string) {
  if (s.length !== t.length) return false;
  let charMap: number[] = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    let cIndx = s.charCodeAt(i) - "a".charCodeAt(0);
    charMap[cIndx]++;
  }
  for (let i = 0; i < t.length; i++) {
    let cIndx = t.charCodeAt(i) - "a".charCodeAt(0);
    charMap[cIndx]--;
  }
  for (let i of charMap) {
    if (i !== 0) {
      return false;
    }
  }
  return true;
}

test("valid_anagram", () => {
  expect(valid_anagram(s, t)).toBe(out);
});
