import { test } from "bun:test";

let s = "abccabd";
let l = 3;
function all_sub_strings(str: string, l: number) {
  let res = [];
  for (let left = 0; left < str.length; left++) {
    let right = 0;
    let s = "";
    while (right < l) {
      s = s + str[right++];
    }
    res.push(s);
  }
  return res;
}

test("all_sub_strings", () => {
  let res = all_sub_strings(s, l);
  console.log(res);
});
