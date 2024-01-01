import { expect, test } from "bun:test";


let s = "abc", t = "ahbgdc"

// a b c
// i

// a h b g d c 
// j 
//
// base case - i !== s.length || j !== t.length
//

function is_subseq(s: string, t: string): boolean {
    let i = 0
    let j = 0
    while (i !== s.length || j !== t.length) {
        if (t[j] == s[i]) {
            i++
        }
        j++
    }
    if (i === s.length) {
        return true
    }
    return false
}

test("move zeros", () => {
    expect(is_subseq(s, t)).toEqual(true);
});
