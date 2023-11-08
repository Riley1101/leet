function canPlaceFlower(flowerBed: number[], n: number) {
  let f = [0, ...flowerBed, 0];
  for (let i = 0; i < f.length - 1; i++) {
    if (f[i - 1] === 0 && f[i] == 0 && f[i + 1] == 0) {
      f[i] = 1;
      n--;
    }
  }
  if (n <= 0) {
    return true;
  }
  return false;
}
