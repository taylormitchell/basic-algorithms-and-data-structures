function radixSort(arr) {
  let maxDigit = getMaxDigit(arr);
  for (let i = 0; i < maxDigit; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (const num of arr) {
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    arr = buckets.flat();
  }
  return arr;
}

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function getMaxDigit(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

radixSort([23, 345, 5467, 12, 2345, 9852]);
