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
    this.values = [];
    values.forEach((v) => this.insert(v));
  }

  insert(value) {
    this.values.push(value);
    this.bubbleDown(0);
  }

  pop() {
    if (!this.values) {
      return undefined;
    }
    this.swap(0, this.values.length - 1);
    const minValue = this.values.pop();
    this.bubbleUp(this.values.length - 1);
    return minValue;
  }

  swap(i, j) {
    const value = this.values[i];
    this.values[i] = this.values[j];
    this.values[j] = value;
  }

  getParentIndex(i) {
    if (i === 0) {
      return null;
    }
    return Math.floor(i - 1 / 2);
  }

  getChildIndices(i) {
    let i_left = 2 * i + 1;
    let i_right = i_left + 1;
    i_left = this.values[i_left] ? i_left : null;
    i_right = this.values[i_right] ? i_right : null;
    return [i_left, i_right];
  }

  bubbleUp(i) {
    i_parent = this.getParentIndex(i);
    if (this.values[i_parent] <= this.values[i]) {
      return;
    }
    this.swap(i, i_parent);
    return bubbleUp(i_parent);
  }

  bubbleDown(i) {
    const [i_left, i_right] = this.getChildIndices(i);
    if (i_left && this.values[i] < this.values[i_left]) {
      this.swap(i, i_left);
      bubbleDown(i_left);
    } else if (i_right && this.values[i] < this.values[i_right]) {
      this.swap(i, i_right);
      bubbleDown(i_right);
    }
    return;
  }
}
