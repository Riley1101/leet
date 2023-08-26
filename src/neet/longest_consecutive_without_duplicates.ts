let s = "bbbb";

function longest_consecutive() {
  let left = 0;
  let set = new Set();
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left += 1;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max;
}

console.log(longest_consecutive());
