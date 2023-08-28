let nums = [100, 4, 200, 1, 3, 2];

function longest_consecutive_sequence() {
  let longest = 0;
  let set = new Set(nums);
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(nums[i] - 1)) {
      let length = 0;
      while (set.has(nums[i] + length)) {
        length += 1;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
}

function longest_consex() {
  let set = new Set(nums);
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (!set.has(value - 1)) {
      let length = 0;
      while (set.has(value + length)) {
        length += 1;
      }
      max = Math.max(length, max);
    }
  }
  return max;
}

console.log(longest_consex());
