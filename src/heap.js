class Heap {
  constructor(arr, isTop = (p, c) => p < c) {
    this.values = heapify(arr, isTop);
    this.isTop = isTop;
  }

  push(value) {
    this.values.push(value);
    bubbleUp(this.values, this.values.length - 1, this.isTop);
  }

  pop() {
    if (!this.values) return;
    swap(this.values, 0, this.values.length - 1);
    const top = this.values.pop();
    bubbleDown(this.values, 0, this.isTop);
    return top;
  }
}

export class MinHeap extends Heap {
  constructor(...arr) {
    super(arr, (p, c) => p < c);
  }
}

export class MaxHeap extends Heap {
  constructor(...arr) {
    super(arr, (p, c) => p > c);
  }
}

function getParent(i) {
  return Math.floor((i - 1) / 2);
}

function getChildren(i) {
  return [2 * i + 1, 2 * i + 2];
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return arr;
}

function bubbleDown(values, p, isTop = (p, c) => p < c) {
  if (values[p] === undefined) return values;
  const [l, r] = getChildren(p);
  let top = p;
  if (values[l] !== undefined && !isTop(values[top], values[l])) {
    top = l;
  }
  if (values[r] !== undefined && !isTop(values[top], values[r])) {
    top = r;
  }
  if (top !== p) {
    swap(values, p, top);
    bubbleDown(values, top, isTop);
  }
  return values;
}

function bubbleUp(values, c, isTop = (p, c) => p < c) {
  if (values[c] === undefined) return values;
  const p = getParent(c);
  if (values[p] !== undefined && !isTop(values[p], values[c])) {
    swap(values, p, c);
    bubbleUp(values, p);
  }
  return values;
}

function heapify(values, isTop = (p, c) => p < c) {
  for (let p = getParent(values.length - 1); p >= 0; p--) {
    bubbleDown(values, p, isTop);
  }
  return values;
}
