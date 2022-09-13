class Node {
  constructor(value, next = null, prev = null) {}
}

class LinkedListDoubly {
  constructor(...values) {}

  /**Insert value at head */
  push = (value) => {};

  /**Insert value at tail */
  append = (value) => {};

  /**Remove head and return it's value */
  shift = () => {};

  /**
   * Get node by index
   * @param {number} index positive integer
   * @returns
   */
  getNodeByIndex = (index) => {};

  /**Insert value after index */
  insertAfter = (value, index) => {};

  /**Insert value before index */
  insertBefore = (value, index) => {};

  /**Get node by value */
  getNodeByValue = (value) => {};

  /**Get value by index */
  get = (index) => {};

  /**
   *
   * @param {*} node node must be in the linked list
   * @returns
   */
  deleteNode = (node) => {};

  delete = (value) => {};

  values = () => {};

  valuesReverse = () => {};
}

module.exports = { LinkedListDoubly, Node };
