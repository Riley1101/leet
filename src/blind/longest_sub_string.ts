let s = "abcabcbb";
function longest_sub_strings() {
  let set = new Set();
  let start = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (set.has(current)) {
      while (s[start] !== current) {
        set.delete(s[start]);
        start++;
      }
      start++;
    }
    set.add(current);
    result = Math.max(result, i - start + 1);
  }
  return result;
}

function longest_sub_strings_better() {
  let set = new Set();
  let start = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      set.delete(s[start]);
      start++;
    }
    set.add(s[i]);
    result = Math.max(result, i - start + 1);
  }
  return result;
}

function longest_sub_strings_best() {
  let set = new Set();
  let start = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      start++;
      set.delete(s[i]);
    }
    set.add(s[i]);
    result = Math.max(result, i - start + 1);
  }
  return result;
}

function longest_sub_strings_1() {
  let set = new Set();
  let start = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    while (set.has(s[i])) {
      start++;
      set.delete(s[i]);
    }
    set.add(s[i]);
    result = Math.max(result, i - start + 1);
  }
  return result;
}
console.log(longest_sub_strings_best());
