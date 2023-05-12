class Node {
  constructor(value, key, prev, next) {
    this.value = value;
    this.key = key || value;
    this.prev = prev;
    this.next = next;
  }
}
export class LinkedListDoubly {
  constructor(arr, keys = []) {
    this.head;
    this.tail;
    arr.forEach((v, i) => this.push(v, keys[i]));
  }

  // add
  push(value, key) {
    const node = new Node(value, key);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }
  unshift(value, key) {
    const node = new Node(value, key);
    if (this.isEmpty()) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  // remove
  shift() {
    let res;
    if (this.isEmpty()) {
      return res;
    } else if (this.head === this.tail) {
      res = this.head;
      this.head = this.tail = undefined;
      return res;
    } else {
      res = this.head;
      this.head = this.head.next;
      this.head.prev = undefined;
      return res;
    }
  }
  pop() {
    let res;
    if (this.isEmpty()) {
      return res;
    } else if (this.head === this.tail) {
      res = this.head;
      this.head = this.tail = undefined;
      return res;
    } else {
      res = this.tail;
      this.tail = this.tail.prev;
      this.tail.next = undefined;
      return res;
    }
  }
  delete(key) {
    if (this.isEmpty()) {
      return;
    } else if (this.head.key === key) {
      return this.shift();
    } else if (this.tail.key === key) {
      return this.pop();
    } else {
      const node = this.get(key);
      if (!node) return;
      node.prev.next = node.next;
      node.next.prev = node.prev;
      return node;
    }
  }

  // insert
  insertBefore(beforeKey, value, key) {
    if (this.isEmpty()) {
      return;
    } else if (this.head.key === beforeKey) {
      return this.unshift(value, key);
    } else {
      const newNode = new Node(value, key);
      const node = this.get(beforeKey);
      newNode.prev = node.prev;
      newNode.next = node;
      node.prev.next = newNode;
      node.prev = newNode;
    }
  }
  insertAfter(afterKey, value, key) {
    if (this.isEmpty()) {
      return;
    } else if (this.tail.key === afterKey) {
      return this.push(value, key);
    } else {
      const newNode = new Node(value, key);
      const node = this.get(afterKey);
      newNode.prev = node;
      newNode.next = node.next;
      node.next.prev = newNode;
      node.next = newNode;
    }
  }

  // helpers
  get(key) {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        return node;
      }
      node = node.next;
    }
  }
  isEmpty() {
    return this.head === undefined;
  }

  peak() {
    return this.head?.value;
  }

  values() {
    let result = [];
    let node = this.head;
    while (node) {
      result.push(node.value);
      node = node.next;
    }
    return result;
  }

  valuesReverse() {
    let result = [];
    let node = this.tail;
    while (node) {
      result.push(node.value);
      node = node.prev;
    }
    return result;
  }
}
