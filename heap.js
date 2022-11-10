class Heap {
  constructor(values, compare = (a, b) => a > b) {
    this.values = heapify(values, compare);
    this.compare = compare;
  }

  pop() {
    if (!this.values) return;
    const top = this.values[0];
    this.values[0] = this.values.pop();
    this.values = heapifyDown(this.values, 0, this.compare);
    return top;
  }

  push(value) {
    this.values.push(value);
    heapifyUp(this.values, this.values.length - 1, this.compare);
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

function heapify(values, compare = (a, b) => a > b) {
  if (values.length === 0) return values;
  const lastParent = getParentIndex(values, values.length - 1);
  for (i = lastParent; i >= 0; i--) {
    values = heapifyDown(values, i, compare);
  }
  return values;
}

function heapifyUp(values, child, compare = (a, b) => a > b) {
  const parent = getParentIndex(values, child);
  if (parent !== null && compare(values[child], values[parent])) {
    swap(values, parent, child);
    values = heapifyUp(values, parent, compare);
  }
  return values;
}

function heapifyDown(values, parent, compare = (a, b) => a > b) {
  const [left, right] = getChildIndices(values, parent);

  let mostest = parent;
  if (left !== null && compare(values[left], values[mostest])) {
    mostest = left;
  }
  if (right !== null && compare(values[right], values[mostest])) {
    mostest = right;
  }

  if (mostest !== parent) {
    swap(values, parent, mostest);
    values = heapifyDown(values, mostest, compare);
  }
  return values;
}

function getParentIndex(values, child) {
  if (child < 0 || child > values.length - 1) throw new Error("invalid index");
  if (child === 0) return null;
  return Math.floor((child - 1) / 2);
}

function getChildIndices(values, parent) {
  if (parent < 0 || parent > values.length - 1) throw new Error("invalid index");
  let left = 2 * parent + 1;
  let right = left + 1;
  left = left < values.length ? left : null;
  right = right < values.length ? right : null;
  return [left, right];
}

function swap(values, a, b) {
  [values[a], values[b]] = [values[b], values[a]];
}

module.exports = {
  MinHeap,
  MaxHeap,
};
