export function radixSort(arr) {
  const maxDigit = Math.max(...arr.map((int) => int.toString().length));
  for (let i = 0; i < maxDigit; i++) {
    const buckets = Array.from({ length: 10 }, () => []);
    for (const num of arr) {
      let digit = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
      buckets[digit].push(num);
    }
    arr = buckets.flat();
  }
  return arr;
}
