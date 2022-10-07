/**
 * Heap
 *
 * @todo implement in js (see https://www.youtube.com/watch?v=t0Cq6tVNRBA&ab_channel=HackerRank for reference)
 * @todo derive the equation for the parent/child index of a tree stored in an array then make it intuitive
 *
 *
 * Q:
 * A:
 *
 */
class MinHeap {
  constructor(...values) {
    this.values = values;
    if (!this.isHeap()) {
      this.values = [];
      values.forEach((v) => this.insert(v));
    }
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  pop() {
    if (!this.values) {
      return undefined;
    }
    this.swap(0, this.values.length - 1);
    const minValue = this.values.pop();
    this.bubbleDown();
    return minValue;
  }

  swap(i, j) {
    const value = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = value;
  }

  getParentIndex(i) {
    if (i <= 0) {
      return null;
    }
    return Math.floor((i - 1) / 2);
  }

  getChildIndices(i) {
    let i_left = 2 * i + 1;
    let i_right = i_left + 1;
    i_left = this.values[i_left] ? i_left : null;
    i_right = this.values[i_right] ? i_right : null;
    return [i_left, i_right];
  }

  bubbleUp(i) {
    if (!(i > 0 && i < this.values.length)) {
      i = this.values.length - 1;
    }
    const i_parent = this.getParentIndex(i);
    if (i_parent === null || this.values[i_parent] <= this.values[i]) {
      return;
    }
    this.swap(i, i_parent);
    return this.bubbleUp(i_parent);
  }

  bubbleDown(i) {
    if (!(i > 0 && i < this.values.length)) {
      i = 0;
    }
    const [i_left, i_right] = this.getChildIndices(i);
    if (i_left && this.values[i] > this.values[i_left]) {
      this.swap(i, i_left);
      this.bubbleDown(i_left);
    } else if (i_right && this.values[i] > this.values[i_right]) {
      this.swap(i, i_right);
      this.bubbleDown(i_right);
    }
    return;
  }

  isHeap() {
    return this.values.every((v, i) => {
      const [i_left, i_right] = this.getChildIndices(i);
      if (i_left && this.values[i_left] < v) {
        return false;
      }
      if (i_right && this.values[i_right] < v) {
        return false;
      }
      return true;
    });
  }
}

module.exports = { MinHeap };
