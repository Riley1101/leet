let nums = [0, 1, 2, 4, 5, 6, 7];

function min_rotated_sorted() {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];

  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(res, nums[left]);
      return res;
    }
    let mid = Math.floor((left + right) / 2);
    res = Math.min(res, nums[mid]);
    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return res;
}

function rotated_sorted() {
  let left = 0;
  let right = nums.length - 1;
  let res = nums[0];
  while (left <= right) {
    if (nums[left] < nums[right]) {
      res = Math.min(nums[left], res);
      return res;
    } else {
      let mid = Math.floor((left + right) / 2);
      res = Math.min(nums[mid], res);
      if (nums[mid] >= nums[left]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return res;
}

let res = rotated_sorted();
console.log(res);
