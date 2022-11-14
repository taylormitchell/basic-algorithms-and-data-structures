class Node {
  constructor(item, next = null) {
    this.item = item;
    this.next = next;
  }
}

export class LinkedList {
  constructor(...items) {
    this.head = items.length > 0 ? new Node(items[0]) : null;
    let prevNode = this.head;
    for (const item of items.slice(1)) {
      const node = new Node(item);
      prevNode.next = node;
      prevNode = node;
    }
    this.tail = prevNode;
  }

  push(item) {
    const node = new Node(item);
    node.next = this.head;
    this.head = node;
    if (!this.tail) {
      this.tail = node;
    }
  }

  append(item) {
    if (!this.tail) {
      this.push(item);
    } else {
      const node = new Node(item);
      this.tail.next = node;
      this.tail = node;
    }
  }

  pop() {
    if (!this.head) {
      return;
    }
    const node = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    return node.item;
  }

  find(fn) {
    fn = this.fnify(fn);
    let node = this.head;
    while (node) {
      if (fn(node.item)) {
        return node.item;
      }
      node = node.next;
    }
  }

  insert(item, fn) {
    fn = this.fnify(fn);
    let prevNode = null;
    let node = this.head;
    while (node) {
      if (fn(node.item)) {
        const newNode = new Node(item);
        newNode.next = node;
        if (prevNode) {
          newNode.next = node;
          prevNode.next = newNode;
        } else {
          newNode.next = this.head;
          this.head = newNode;
        }
        return true;
      }
      prevNode = node;
      node = node.next;
    }
    return false;
  }

  has(fn) {
    return this.find(fn) !== undefined;
  }

  delete(fn) {
    fn = this.fnify(fn);
    let prevNode = null;
    let node = this.head;
    while (node) {
      if (fn(node.item)) {
        if (!prevNode) {
          this.head = this.head.next;
        } else if (!node.next) {
          this.tail = prevNode;
          this.tail.next = null;
        } else {
          prevNode.next = node.next;
        }
        return true;
      }
      prevNode = node;
      node = node.next;
    }
    return false;
  }

  values() {
    const result = [];
    let node = this.head;
    while (node) {
      result.push(node.item);
      node = node.next;
    }
    return result;
  }

  fnify(value) {
    if (typeof value === "function") {
      return value;
    }
    return (item) => item === value;
  }
}
