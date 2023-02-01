export function binarySearch(arr, value, start = 0, end = arr.length) {
  if (start >= end) {
    return null;
  }
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === value) {
    return mid;
  } else if (arr[mid] < value) {
    return binarySearch(arr, value, mid + 1, end);
  } else {
    return binarySearch(arr, value, start, mid);
  }
}
