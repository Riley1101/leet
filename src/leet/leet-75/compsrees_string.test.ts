
import { expect, test } from "bun:test";


let str = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]
let out = 4

// a a b  b c c 
//     i 
//     j 

function string_compress(chars: string[]): number {
    let i = 0
    let j = 0
    let count = 0
    let length = chars.length
    while (i < length) {
        while (chars[j] == chars[i]) {
            j++
        }
        if (chars[j] !== chars[i]) {
            let len = j - i 
            if (len > 1 && len < 10) {
                chars[i + 1] = len.toString()
            }
            else if (len > 9) {
            }
            i = j
        }
    }
    return count - 1
}

test.skip("compress string", () => {
    expect(string_compress(str)).toEqual(out);
});
