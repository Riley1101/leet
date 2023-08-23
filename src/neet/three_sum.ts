let nums = [-1, 0, 1, 2, -1, -4];

function three_sum() {
  let result = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let a = nums[i];
    if (i > 0 && a == nums[i + 1]) continue;
    let l = i + 1;
    let r = nums.length - 1;
    while (l < r) {
      let three = a + nums[l] + nums[r];
      if (three > 0) {
        r--;
      } else if (three < 0) {
        l++;
      } else {
        result.push([a, nums[l], nums[r]]);
        l += 1;
        while (nums[l] == nums[l - 1] && l < r) {
          l += 1;
        }
      }
    }
  }
  return result;
}
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res: number[][] = [];

  nums.forEach((value, idx): void => {
    if (idx > 0 && value === nums[idx - 1]) return;
    let left = idx + 1,
      right = nums.length - 1;

    while (left < right) {
      let sum = value + nums[left] + nums[right];
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        res.push([value, nums[left], nums[right]]);
        left++;
        while (left < right && nums[left] === nums[left - 1]) left++;
      }
    }
  });
  return res;
}
console.log(three_sum());
console.log(threeSum(nums));
