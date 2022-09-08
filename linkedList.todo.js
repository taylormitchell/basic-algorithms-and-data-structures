class Node {
  constructor() {}
}

class LinkedList {
  constructor(...values) {}

  push = (value) => {};

  delete = (value) => {};

  /**Insert at index */
  insert = (value, index) => {};

  has = (value) => {};

  values = () => {
    let result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  };
}

module.exports = { LinkedList, Node };
