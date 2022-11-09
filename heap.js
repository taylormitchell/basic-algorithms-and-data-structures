class Heap {
  constructor(values, shouldSwap = (a, b) => a > b) {
    this.values = heapify(values, shouldSwap);
  }

  pop() {
    const last = this.values.length - 1;
    [this.values[0], this.values[last]] = [this.values[last], this.values[0]];
    const minValue = this.values.pop();
    this.values = heapifyDown(this.values);
    return minValue;
  }

  push(value) {
    this.values.push(value);
    this.values = heapifyUp(this.values, this.values.length - 1);
  }
}

class MinHeap extends Heap {
  constructor(...values) {
    super(values, (a, b) => a < b);
  }
}

class MaxHeap extends Heap {
  constructor(...values) {
    super(values, (a, b) => a > b);
  }
}

function getParentIndex(arr, i) {
  if (i === 0) return null;
  if (i < 0 || i >= arr.length) {
    throw new Error("Index out of bounds");
  }
  return Math.floor((i - 1) / 2);
}

function getChildIndices(arr, i) {
  if (i < 0 || i >= arr.length) {
    throw new Error("Index out of bounds");
  }
  let left = 2 * i + 1;
  left = left < arr.length ? left : null;
  let right = 2 * i + 2;
  right = right < arr.length ? right : null;
  return [left, right];
}

function heapify(arr, shouldSwap = (a, b) => a > b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    arr = heapifyDown(arr, i, shouldSwap);
  }
  return arr;
}

function heapifyDown(arr, parent = 0, shouldSwap = (a, b) => a > b) {
  const [left, right] = getChildIndices(arr, parent);

  let toSwap = parent;
  if (left && shouldSwap(arr[left], arr[toSwap])) {
    toSwap = left;
  }
  if (right && shouldSwap(arr[right], arr[toSwap])) {
    toSwap = right;
  }

  if (toSwap !== parent) {
    [arr[toSwap], arr[parent]] = [arr[parent], arr[toSwap]];
    arr = heapifyDown(arr, toSwap, shouldSwap);
  }
  return arr;
}

function heapifyUp(arr, child, shouldSwap = (a, b) => a > b) {
  if (!child) {
    child = arr.length - 1;
  }
  const parent = getParentIndex(child);

  if (parent && shouldSwap(arr[child], arr[parent])) {
    [arr[child], arr[parent]] = [arr[parent], arr[child]];
    arr = heapifyUp(arr, parent, shouldSwap);
  }
  return arr;
}

module.exports = {
  MaxHeap,
  MinHeap,
};
