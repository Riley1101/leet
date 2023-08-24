let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function maxStoreWater() {
  let maxLeft = [];
  let maxRight = [];
  let minLR = [];
  let cur = 0;
  let res = 0;
  for (let i = 0; i < height.length; i++) {
    maxLeft.push(cur);
    cur = Math.max(height[i], cur);
  }
  cur = 0;
  for (let i = height.length - 1; i >= 0; i--) {
    maxRight[i] = cur;
    cur = Math.max(height[i], cur);
  }
  for (let i = 0; i < height.length; i++) {
    minLR[i] = Math.min(maxLeft[i], maxRight[i]);
  }

  for (let i = 0; i < minLR.length; i++) {
    let exists = minLR[i] - height[i];
    if (exists > 0) {
      res += exists;
    }
  }
  return res;
}


function storeMostWater() {
  if (!height.length) return 0;
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let res = 0;
  while (left < right) {
    if (leftMax < rightMax) {
      left += 1;
      leftMax = Math.max(leftMax, height[left]);
      res += leftMax - height[left];
    } else {
      right -= 1;
      rightMax = Math.max(rightMax, height[right]);
      res += rightMax - height[right];
    }
  }
  return res;
}

console.log(storeMostWater());
