let arr = [1, 3, 2, 1, 4, 65, 12, 46, 7];

function insertionSort(): number[] {
  for (let i = 0; i < arr.length; i++) {
    let j = i - 1;
    let cur = arr[i];
    while (arr[j] > cur && j > -1) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = cur;
  }
  return arr;
}

function bubbleSort() {
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
        swapped = true;
      }
    }
  }
  if (!swapped) return arr;
  return arr;
}

function selectionSort() {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort());
