let s = "babad";

function check_palindomic(str: string) {
  let left = 0;
  let right = str.length - 1;
  while (left <= right) {
    console.log(left, right);
    if (str[left] !== str[right]) return false;
    right -= 1;
    left += 1;
  }
  return true;
}

function longest_palindomic_string() {
  if (check_palindomic(s)) return s;
  let res = "";
  let resLen = 0;
  for (let i = 0; i < s.length; i++) {
    let left = i,
      right = i;
    while (left >= 0 && right < s.length && s[left] == s[right]) {
      // even length
      if (right - left + 1 > resLen) {
        res = s.substring(left, right + 1);
        resLen = right - left + 1;
      }
      left -= 1;
      right += 1;
    }

    let left1 = i,
      right1 = i + 1;
    while (left1 >= 0 && right1 < s.length && s[left1] == s[right1]) {
      // even length
      if (right1 - left1 + 1 > resLen) {
        res = s.substring(left1, right1 + 1);
        resLen = right1 - left1 + 1;
      }
      left1 -= 1;
      right += 1;
    }
  }
  return res;
}

console.log(check_palindomic("1bab"));
