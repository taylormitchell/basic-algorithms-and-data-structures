export class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}
export class LinkedList {
  constructor(...values) {
    this.head = null;
    this.tail = null;
    values.forEach((v) => this.push(v));
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }

  shift() {
    if (!this.head) {
      return;
    } else {
      const value = this.head.value;
      this.head = this.head.next;
      return value;
    }
  }

  find(fn) {
    const [, node] = this.findWithPrev(fn);
    return node ? node.value : undefined;
  }

  insert(value, fn) {
    return this.insertBefore(value, fn);
  }

  delete(value) {
    const [prev, node] = this.findWithPrev(value);
    if (!node) {
      // not found
      return false;
    } else if (!prev) {
      // delete head
      this.shift();
      return true;
    } else {
      // everything else
      prev.next = node.next;
      return true;
    }
  }

  insertAfter(value, fn) {
    const newNode = new Node(value);
    const [, node] = this.findWithPrev(fn);
    if (!node) {
      // not found
      return false;
    } else {
      newNode.next = node.next;
      node.next = newNode;
      return true;
    }
  }

  insertBefore(value, fn) {
    const [prev, node] = this.findWithPrev(fn);
    if (!node) {
      // not found
      return false;
    } else if (!prev) {
      // insert before head
      this.unshift(value);
      return true;
    } else {
      // insert everywhere else
      const newNode = new Node(value, node);
      prev.next = newNode;
      return true;
    }
  }

  findWithPrev(fnOrValue) {
    const fn = typeof fnOrValue === "function" ? fnOrValue : (node) => node.value === fnOrValue;
    let [prev, node] = [null, this.head];
    while (node) {
      if (fn(node)) {
        return [prev, node];
      }
      [prev, node] = [node, node.next];
    }
    return [null, null];
  }

  has(fnOrValue) {
    return this.find(fnOrValue) !== undefined;
  }

  values() {
    const values = [];
    let n = this.head;
    while (n) {
      values.push(n.value);
      n = n.next;
    }
    return values;
  }
}
