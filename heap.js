/**
 * Heap
 */
class MinHeap {
  constructor(...values) {
    this.values = minHeapifyArray(values);
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  pop() {
    if (!this.values) {
      return undefined;
    }
    swap(this.values, 0, this.values.length - 1);
    const minValue = this.values.pop();
    this.bubbleDown();
    return minValue;
  }

  bubbleUp(i) {
    if (!(i > 0 && i < this.values.length)) {
      i = this.values.length - 1;
    }
    const i_parent = getParentIndex(i);
    if (i_parent === null || this.values[i_parent] <= this.values[i]) {
      return;
    }
    swap(this.values, i, i_parent);
    return this.bubbleUp(i_parent);
  }

  bubbleDown(i) {
    if (!(i > 0 && i < this.values.length)) {
      i = 0;
    }
    const [i_left, i_right] = getChildIndices(i);
    if (this.values[i] > this.values[i_left]) {
      swap(this.values, i, i_left);
      this.bubbleDown(i_left);
    } else if (this.values[i] > this.values[i_right]) {
      swap(this.values, i, i_right);
      this.bubbleDown(i_right);
    }
    return;
  }
}

function minHeapifyArray(arr) {
  const lastChild = arr.length - 1;
  const lastParent = getParentIndex(lastChild);
  for (i = lastParent; i >= 0; i--) {
    minHeapifyUp(arr, i);
  }
  return arr;
}

const getParentIndex = (i) => (i > 0 ? Math.floor((i - 1) / 2) : null);
const getChildIndices = (i) => [2 * i + 1, 2 * i + 2];

function swap(arr, i, j) {
  const v = arr[i];
  arr[i] = arr[j];
  arr[j] = v;
  return arr;
}

function minHeapifyUp(arr, i_parent) {
  if (!arr[i_parent]) {
    return;
  }
  const [i_left, i_right] = getChildIndices(i_parent);

  // find smallest of parents and children
  let i_smallest = i_parent;
  if (arr[i_left] < arr[i_parent]) {
    i_smallest = i_left;
  }
  if (arr[i_right < arr[i_parent]]) {
    i_smallest = i_right;
  }

  // if smallest is not parent, swap and recurse down the tree
  if (i_smallest !== i_parent) {
    swap(arr, i_smallest, i_parent);
    minHeapifyUp(arr, i_smallest);
  }
}

function isMinHeap(arr) {
  return arr.every((v, i) => {
    const [i_left, i_right] = getChildIndices(i);
    if (arr[i_left] < v) {
      return false;
    }
    if (arr[i_right] < v) {
      return false;
    }
    return true;
  });
}

module.exports = { MinHeap };
