import { expect, test } from "bun:test";

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"],
  out = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

/**
 * @description
 * - add all the elements to a map
 * - set sorted string as an anagram and group them all together
 * - map the map to [[]]
 * @param strs - string[]
 */
function group_anagram(strs: string[]) {
  let m: Record<string, string[]> = {};
  let sor = (s: string) => s.split("").sort().join("");

  for (let i of strs) {
    let s = sor(i);
    if (s in m) {
      m[s].push(i);
    } else {
      m[s] = [i];
    }
  }
  return Object.keys(m).map((item) => m[item]);
}
test("group_anagram", () => {
  group_anagram(strs);
});
