let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function most_water() {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    if (area > max) {
      max = area;
    }
    if (height[left] < height[right]) {
      left++;
    } else {
      right -= 1;
    }
  }
  return max;
}
console.log(most_water());
