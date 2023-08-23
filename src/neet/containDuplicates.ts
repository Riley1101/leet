let nums = [1, 2, 3, 1];

function contain_duplicates() {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return false;
    }
    set.add(nums[i]);
  }
  return true;
}

function contain_duplicates_2() {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}
contain_duplicates_2();
