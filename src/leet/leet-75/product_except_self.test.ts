import { test, expect } from "bun:test"

let nums = [1, 2, 3, 4]
let out = [24, 12, 8, 6]

function productExceptSelf(nums: number[]): number[] {
    let prefix = [1]
    let postfix = []
    postfix[nums.length - 1] = 1 
    let result= []

    for (let i = 1; i < nums.length ; i++) {
        prefix[i] = prefix[i - 1 ] * nums[i  - 1]
    }

    for (let i = nums.length - 2 ;  i >= 0 ; i--) {
        postfix[i] = postfix[i + 1]  * nums[i  + 1]
        
    }
    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix[i] * postfix[i]
    }
    return result

};


test("productExceptSelf", () => {
    let res = productExceptSelf(nums)
    expect(res).toEqual(out)
})
