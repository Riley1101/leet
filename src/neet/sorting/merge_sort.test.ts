import { expect, test } from "bun:test";

const arr1 = [8, 3, 12, 5, 1, 9];
const arr2 = [3.14, 2.71, 1.618, 0.99, 4.2, 5.55];
const arr3 = [-10, -5, -3, -8, -1, -7];
const arr4 = [42, 3.14, -8, 0, 99, 7.77];
const arr5 = [17, 23, 9, 33, 6, 11];

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift() as number);
    } else {
      result.push(right.shift() as number);
    }
  }
  return result.concat(left, right);
}

function merge_sort(nums: number[]): number[] {
  if (nums.length < 2) return nums;
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  let sortedLeft = merge_sort(left);
  let sortedRight = merge_sort(right);
  return merge(sortedLeft, sortedRight);
}

test("insertion_sort", () => {
  expect(merge_sort(arr1)).toEqual(arr1.sort((a, b) => a - b));
  expect(merge_sort(arr2)).toEqual(arr2.sort((a, b) => a - b));
  expect(merge_sort(arr3)).toEqual(arr3.sort((a, b) => a - b));
  expect(merge_sort(arr4)).toEqual(arr4.sort((a, b) => a - b));
  expect(merge_sort(arr5)).toEqual(arr5.sort((a, b) => a - b));
});
