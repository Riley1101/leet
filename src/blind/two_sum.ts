let nums = [2, 7, 11, 15];
let target = 9;

function check_two_sums(arr: number[], target: number) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[i] + arr[j] == target && i != j) {
        return [i, j];
      }
    }
  }
}

function better_check_two_sums(nums: number[], target: number) {
  let map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    let to_find = target - nums[i];
    if (to_find in map) {
      return [map[to_find], i];
    }
    map[nums[i]] = i;
  }
}
console.log(better_check_two_sums(nums, target));
