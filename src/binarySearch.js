export function binarySearch(arr, value, start = 0, end = arr.length) {
  if (start >= end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  if (value === arr[mid]) {
    return mid;
  } else if (value < arr[mid]) {
    return binarySearch(arr, value, start, mid);
  } else {
    return binarySearch(arr, value, mid + 1, end);
  }
}
