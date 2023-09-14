let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

function sortWord(word: string) {
  return word.split("").sort().join("");
}

function grouping_anagram() {
  let map: { [strings: string]: string[] } = {};
  for (let i = 0; i < strs.length; i++) {
    let current = strs[i];
    let sorted = sortWord(current);
    if (sorted in map) {
      map[sorted].push(current);
    } else {
      map[sorted] = [current];
    }
  }
  return Object.keys(map).map((x) => map[x]);
}

function grouping_anagram_2() {
  let map = new Map<string, string[]>();
  let res: string[][] = [];
  for (let i of strs) {
    let current = sortWord(i);
    if (!map.has(current)) {
      map.set(current, [i]);
    } else {
      map.get(current)?.push(i);
    }
  }
  map.forEach((value, key) => {
    res.push(value);
  });
  return res;
}
