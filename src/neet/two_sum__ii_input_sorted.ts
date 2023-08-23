let numbers = [5, 25, 75],
  target = 100;

function twoSumIiInputSorted() {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let current = numbers[left] + numbers[right];
    if (current === target) {
      return [left + 1, right + 1];
    } else if (current > target) {
      right -= 1;
    } else if (current < target) {
      left += 1;
    }
  }
}
console.log(twoSumIiInputSorted());
