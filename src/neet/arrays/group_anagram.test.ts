let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

let out = [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]];

/**
 * iterate the array
 * create a hashmap
 * sort curr
 * check if
 * sorted value exists in map
 * use sorted value as key
 * if so push the array of the key
 * if not create new array with the key
 * iterate all the value of map and push it in an array
 */

let sort = (word: string) => word.split("").sort().join("");

function group_anagram() {
  let res: string[][] = [];
  let map: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    let cur = sort(strs[i]);
    if (cur in map) {
      map[cur] = [...map[cur], strs[i]];
    } else {
      map[cur] = [strs[i]];
    }
  }

  for (let i in map) {
    res.push(map[i]);
  }

  return res;
}
