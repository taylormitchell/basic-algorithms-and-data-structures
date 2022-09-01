class Node {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LinkedListDoubly {
  constructor(...values) {
    this.head = values.length > 0 ? new Node(values[0]) : null;
    let prevNode = this.head;
    for (const value of values.slice(1)) {
      const currNode = new Node(value);
      prevNode.next = currNode;
      currNode.prev = prevNode;
      prevNode = currNode;
    }
    this.tail = prevNode;
  }

  isEmpty = () => {
    return !this.head;
  };

  get = (index) => {
    const node = this.getNodeByIndex(index);
    return node ? node.value : null;
  };

  push = (value) => {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }
  };

  append = (value) => {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  };

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

  getNodeByIndex = (index) => {
    if (index >= 0) {
      let i = 0;
      let node = this.head;
      while (node) {
        if (i === index) {
          return node;
        }
        node = node.next;
        i++;
      }
      return null;
    } else {
      let i = -1;
      let node = this.tail;
      while (node) {
        if (i === index) {
          return node;
        }
        node = node.prev;
        i--;
      }
      return null;
    }
  };

  delete = (value) => {
    const node = this.getNodeByValue(value);
    if (!node) {
      return false;
    }
    if (node === this.head && node === this.tail) {
      this.head = null;
      this.tail = null;
    } else if (node === this.head) {
      this.head = this.head.next;
      this.head.prev = null;
    } else if (node === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
    return true;
  };

  insertAfter = (value, index) => {
    if (index < 0) {
      throw "index must be a positive integer";
    }
    const node = new Node(value);
    const prevNode = this.getNodeByIndex(index);

    // when the linked list is empty, default to inserting the value
    // in the only available position, regardless of the index specified
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    }
    // index is at or after the tail
    else if (!prevNode || prevNode === this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    // index before the tail
    else {
      const nextNode = prevNode.next;
      prevNode.next = node;
      node.prev = prevNode;

      nextNode.prev = node;
      node.next = nextNode;
    }
  };

  insertBefore = (value, index) => {
    if (index < 0) {
      throw "index must be a positive integer";
    }
    const node = new Node(value);
    const nextNode = this.getNodeByIndex(index);

    // when the linked list is empty, default to inserting the value
    // in the only available position, regardless of the index specified
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else if (nextNode === this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    // index is after the tail
    else if (!nextNode) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    // index after the head, up to the tail
    else {
      const prevNode = nextNode.prev;

      prevNode.next = node;
      node.prev = prevNode;

      nextNode.prev = node;
      node.next = nextNode;
    }
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
