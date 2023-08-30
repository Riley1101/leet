let s = "pwwkew";

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

function longest_substring_without_repeats() {
  let left = 0;
  let set = new Set(s[left]);
  let max = 0;
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[right]);
      left += 1;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
}

function longest_consecutive_no_repeats() {
  let left = 0;
  let max = 0;
  let set = new Set();
  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    max = Math.max(max, right - left + 1);
  }
  return max
}

console.log(longest_consecutive_no_repeats());
