let s = "ADOBECODEBANC",
  t = "ABC";
function min_widnow() {
  let mapT: Record<string, number> = {};
  let mapS: Record<string, number> = {};
  let left = 0;
  for (let i = 0; i < s.length; i++) {
    mapT[t[i]] = mapT[t[i]] ? (mapT[t[i]] += 1) : 1;
  }
  for (let right = 0; right < s.length; right++) {
    mapS[s[right]] = mapS[s[right]] ? (mapS[s[right]] += 1) : 1;

    while (mapT[s[right]] >= mapS[s[right]]) {

    }
  }
  console.log(mapT, mapS);
}

console.log(min_widnow());
