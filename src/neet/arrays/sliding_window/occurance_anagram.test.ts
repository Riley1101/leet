import { test, expect } from "bun:test";

let text = "gotxxotgxdogt",
  word = "got";
let out = 3;

function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  let map: Record<string, number> = {};
  for (let i of str1) {
    map[i] = i in map ? map[i] + 1 : 1;
  }
  for (let j of str2) {
    if (j in map && map[j] !== 0) {
      map[j] -= 1;
    } else return false;
  }
  return true;
}

function occ(text: string, word: string) {
  let left = 0;
  let res = [];
  for (let right = 0; right < text.length; right++) {
    while (right - left + 1 > word.length) {
      let tmp = text.slice(left, right);
      console.log(tmp)
      if (isAnagram(tmp, word)) {
        res.push(left++);
      }
      left++;
    }
  }
  return res;
}

test.skip("occ", () => {
  expect(occ(text, word)).toEqual(out);
});
