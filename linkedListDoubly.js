class Node {
  constructor(value, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LinkedListDoubly {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    values.forEach((value) => this.append(value));
  }

  /**Insert value at head */
  push = (value) => {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  };

  /**Insert value at tail */
  append = (value) => {
    const node = new Node(value);
    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };

  /**Remove head and return it's value */
  shift = () => {
    if (this.head === null) {
      return null;
    }
    const value = this.head.value;
    this.deleteNode(this.head);
    return value;
  };

  /**
   * Get node by index
   * @param {number} index positive integer
   * @returns
   */
  getNodeByIndex = (index) => {
    let i = 0;
    let node = this.head;
    while (node) {
      if (i === index) {
        return node;
      }
      i++;
      node = node.next;
    }
    return null;
  };

  /**Insert value after index */
  insertAfter = (value, index) => {
    const node = new Node(value);

    // Get node at and after index
    const nodeAtIndex = this.getNodeByIndex(index);
    if (!nodeAtIndex) {
      return false;
    }
    const nodeAfterIndex = nodeAtIndex.next;

    // Link node to node at index
    nodeAtIndex.next = node;
    node.prev = nodeAtIndex;

    // Link node to node after index
    if (nodeAfterIndex) {
      nodeAfterIndex.prev = node;
      node.next = nodeAfterIndex;
    } else {
      this.tail = node;
    }
    return true;
  };

  /**Insert value before index */
  insertBefore = (value, index) => {
    const node = new Node(value);

    // Get node at and before index
    const nodeAtIndex = this.getNodeByIndex(index);
    if (!nodeAtIndex) {
      return false;
    }
    const nodeBeforeIndex = nodeAtIndex.prev;

    // Link node to node at index
    nodeAtIndex.prev = node;
    node.next = nodeAtIndex;

    // Link node to node before index
    if (nodeBeforeIndex) {
      nodeBeforeIndex.prev = node;
      node.next = nodeBeforeIndex;
    } else {
      this.head = node;
    }

    return true;
  };

  /**Get node by value */
  getNodeByValue = (value) => {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return null;
  };

  /**Get value by index */
  get = (index) => {
    const node = this.getNodeByIndex(index);
    return node ? node.value : null;
  };

  /**
   *
   * @param {*} node node must be in the linked list
   * @returns
   */
  deleteNode = (node) => {
    if (!node) return false;
    if (!node.next && !node.prev) {
      this.head = null;
      this.tail = null;
    } else if (!node.prev) {
      this.head = this.head.next;
      this.head.prev = null;
      return;
    } else if (!node.next) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      return;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  };

  delete = (value) => {
    const node = this.getNodeByValue(value);
    return this.deleteNode(node);
  };

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
