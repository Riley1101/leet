import { expect, test } from "bun:test";

let nums = [3, 1, 3, 4, 3], k = 3

// map {} 
// counter = 0
// 1 2 3 4 
// l 

function max_k_sum(nums: number[], k: number): number {
    let counter = 0;
    let map = new Map<number, number>();

    // Count occurrences of each number in the array
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }

    // Iterate through the array to find pairs
    for (let num of nums) {
        let tofind = k - num;

        // Check if there is a pair
        if (map.has(tofind) && map.get(tofind)! > 0) {
            // Decrement the count for the found number
            map.set(tofind, map.get(tofind)! - 1);

            // Increment the counter
            counter++;
        }
    }

    return counter;
}
test("max K sum", () => {
    expect(max_k_sum(nums, k)).toEqual(3);
});
