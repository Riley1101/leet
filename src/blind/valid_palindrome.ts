let s = "A man, a plan, a canal: Panama";

function valid_palindrome() {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let start = 0;
  let end = s.length - 1;
  console.log(s)
  while (start <= end) {
    if (s[start] !== s[end]) {
      return false;
    } else {
      start += 1;
      end -= 1;
    }
  }
  return true;
}

console.log(valid_palindrome());
