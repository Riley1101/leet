let l = console.log;

let s = "ABAB",
  k = 2;

function characterReplacement() {
  let left = 0;
  let res = 0;
  let map: Record<string, number> = {};
  for (let right = 0; right < s.length; right++) {
    map[s[right]] = map[s[right]] ? map[s[right]] + 1 : 1;

    let most = Object.keys(map).reduce((a, b) => (map[a] > map[b] ? a : b));

    res = Math.max(res, right - left + 1);
    while (right - left + 1 - map[most] > k) {
      left += 1;
      map[s[left]] += 1;
    }
  }
  return res;
}
l(characterReplacement());
