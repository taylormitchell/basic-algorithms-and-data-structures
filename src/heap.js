class Heap {
  constructor(values, compare = (a, b) => a > b) {
    this.values = heapify(values, compare);
    this.compare = compare;
  }

  pop() {
    if (this.values.length === 0) return;
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

export class MinHeap extends Heap {
  constructor(...values) {
    super(values, (a, b) => a < b);
  }
}

export class MaxHeap extends Heap {
  constructor(...values) {
    super(values, (a, b) => a > b);
  }
}

export function heapify(values, compare = (a, b) => a > b) {
  if (values.length <= 1) return values;
  const lastParent = getParentIndex(values.length - 1);
  for (let i = lastParent; i >= 0; i--) {
    values = heapifyDown(values, i, compare);
  }
  return values;
}

function heapifyUp(values, child, compare = (a, b) => a > b) {
  if (values[child] === undefined) {
    throw new Error(
      `invalid index ${child} for array of length ${values.length}`
    );
  }
  const parent = getParentIndex(child);
  if (parent !== null && compare(values[child], values[parent])) {
    swap(values, parent, child);
    values = heapifyUp(values, parent, compare);
  }
  return values;
}

function heapifyDown(values, parent, compare = (a, b) => a > b) {
  if (values[parent] === undefined) {
    throw new Error(
      `invalid index ${parent} for array of length ${values.length}`
    );
  }
  const [left, right] = getChildIndices(parent);

  let mostest = parent;
  if (left < values.length && compare(values[left], values[mostest])) {
    mostest = left;
  }
  if (right < values.length && compare(values[right], values[mostest])) {
    mostest = right;
  }

  if (mostest !== parent) {
    swap(values, parent, mostest);
    values = heapifyDown(values, mostest, compare);
  }
  return values;
}

function getParentIndex(index) {
  if (index === 0) return null;
  const parent = Math.floor((index - 1) / 2);
  return parent;
}

function getChildIndices(index) {
  let left = 2 * index + 1;
  let right = left + 1;
  return [left, right];
}

function swap(values, a, b) {
  [values[a], values[b]] = [values[b], values[a]];
}
