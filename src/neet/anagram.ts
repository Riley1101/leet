let s = "anagram",
  t = "nagoram";

export function anagram() {
  if (s.length !== t.length) return false;
  let set: { [key: string]: number } = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] in set) {
      set[s[i]] += 1;
    } else {
      set[s[i]] = 1;
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!set[t[i]] || set[t[i]] === 0) return false;
    if (set[t[i]] > 0) {
      set[t[i]] -= 1;
    }
  }

  return true;
}

export function anagram_2() {
  if (s.length !== t.length) return false;
  let set: { [key: string]: number } = {};
  for (let char of s) {
    char in set ? (set[char] += 1) : (set[char] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    let curr = t[i];
    if (curr in set && set[curr] !== 0) {
      set[curr] -= 1;
    } else {
      return false;
    }
  }
  return true;
}

let res = anagram_2();
console.log(res);
