let s = "()";
function valid_parenthesis() {
  let stack: string[] = [];
  if (s.length < 1) return false;
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    console.log(cur);
    if (cur == "(" || cur == "[" || cur == "{") {
      stack.push(cur);
    } else {
      let top = stack[stack.length - 1];
      if (top === "(" && s[i] === ")") {
        stack.pop();
      } else if (top === "{" && s[i] === "}") {
        stack.pop();
      } else if (top === "[" && s[i] === "]") {
        stack.pop();
      } else return false;
    }
  }
  if (stack.length > 0) {
    return false;
  } else {
    return true;
  }
}

console.log(valid_parenthesis());
