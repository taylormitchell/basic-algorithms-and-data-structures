class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor(...values) {
    this.head = values.length > 0 ? new Node(values[0]) : null;
    let prevNode = this.head;
    for (const value of values.slice(1)) {
      let currNode = new Node(value);
      prevNode.next = currNode;
      prevNode = currNode;
    }
  }

  push = (value) => {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  };

  delete = (value) => {
    // handle no head and value at head cases
    if (!this.head) {
      return false;
    } else if (this.head.value === value) {
      this.head = this.head.next;
      return true;
    }

    // handle the rest
    let prevNode = this.head;
    let currNode = this.head.next;
    while (currNode) {
      if (currNode.value === value) {
        prevNode.next = currNode.next;
        return true;
      }
    }
    return false;
  };

  /**
   * Insert at index
   * @param {*} value
   * @param {*} index
   * @returns
   */
  insert = (value, index) => {
    if (!this.head) {
      return false;
    }
    if (index === 0) {
      this.push(value);
      return true;
    }

    let node = new Node(value);
    let prevNode = this.head;
    let currNode = this.head.next;
    let i = 1;
    while (currNode) {
      if (i === index) {
        prevNode.next = node;
        node.next = currNode;
        return true;
      }
      i++;
      prevNode = currNode;
      currNode = currNode.next;
    }
    return false;
  };

  has = (value) => {
    let currNode = this.head;
    while (currNode) {
      if (currNode.value === value) {
        return true;
      }
      currNode = currNode.next;
    }
    return false;
  };
  search = (value) => {};

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
