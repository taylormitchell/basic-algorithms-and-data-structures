class Node {
  constructor() {}
}

class LinkedListDoubly {
  constructor(...values) {}

  isEmpty = () => {};

  /**Get value by index */
  get = (index) => {};

  /**Insert value at head */
  push = (value) => {};

  /**Insert value at tail */
  append = (value) => {};

  /**Get node by value */
  getNodeByValue = (value) => {};

  /**
   * Get node by index
   * @param {number} index positive integer for forward indexing and negative integer for reverse indexing
   * @returns
   */
  getNodeByIndex = (index) => {};

  delete = (value) => {};

  /**Insert value after index */
  insertAfter = (value, index) => {};

  /**Insert value before index */
  insertBefore = (value, index) => {};

  values = () => {
    let result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  };

  valuesReverse = () => {
    let result = [];
    let node = this.tail;
    while (node) {
      result.push(node.value);
      node = node.prev;
    }
    return result;
  };
}

module.exports = { LinkedListDoubly, Node };
