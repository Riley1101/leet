let array = ["leet", "code", "love", "you"];
function encode(str: string[]): string {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res = res + str[i].length + "#" + str[i];
  }
  return res;
}

function decode(str: string): string[] {
  let current = 0;
}

console.log(encode(array));
console.log(decode(encode(array)));
