import { expect, test } from "bun:test";

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
let out = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

function sort_str(str: string) {
  return str.split("").sort().join("");
}

function group_anagrams() {
  let map: Record<string, string[]> = {};
  for (let i of strs) {
    let sorted = sort_str(i);
    if (sorted in map) {
      map[sorted].push(i);
    } else {
      map[sorted] = [i];
    }
  }
  let res: string[][] = [];
  Object.values(map).forEach((v) => {
    res.push(v);
  });
  return res;
}

test.skip("group_anagrams", () => {
  expect(group_anagrams()).toBe(out);
});
