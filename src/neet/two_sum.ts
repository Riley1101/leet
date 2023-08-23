let nums = [1, 2, 3, 4, 5],
  target = 5;

function two_sum() {
  let map: { [string: string]: number } = {};
  for (let i = 0; i < nums.length; i++) {
    let to_find = target - nums[i];
    if (to_find in map) {
      return [map[to_find], i];
    }
    map[nums[i]] = i;
  }
}

function two_sum_two() {
  let map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    let to_find = target - nums[i];
    if (map.has(to_find)) {
      return [map.get(to_find), i];
    }
    map.set(nums[i], i);
  }
}

function two_sum_sorted() {
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        let cur = nums[l] + nums[r];
        if (cur == target) {
            return [l, r];
        } else if (cur > target) {
            r -= 1;
        } else if (target > cur) {
            l += 1;
        }
    }
}




let res = two_sum_sorted();

console.log(res);
