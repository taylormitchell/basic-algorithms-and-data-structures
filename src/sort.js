export function quickSortSimple(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[arr.length - 1];
  const left = arr.filter((v) => v <= pivot);
  const right = arr.filter((v) => v > pivot);
  return [...quickSortSimple(left), pivot, ...quickSortSimple(right)];
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

export function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start >= end) {
    return arr;
  }
  const pivot = arr[end];
  let idxPivot = start;
  for (let idxRun = start; idxRun < end; idxRun++) {
    if (arr[idxRun] <= pivot) {
      swap(arr, idxPivot, idxRun);
      idxPivot++;
    }
  }
  swap(arr, idxPivot, end);
  quickSort(arr, start, idxPivot - 1);
  quickSort(arr, idxPivot + 1, end);
  return arr;
}
