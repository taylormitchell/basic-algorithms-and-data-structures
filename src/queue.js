import { LinkedListDoubly } from "./linkedListDoubly.js";

export class Queue {
  constructor(...items) {
    this.linkedList = new LinkedListDoubly(...items);
  }

  enqueue(item) {
    this.linkedList.append(item);
  }

  dequeue() {
    return this.linkedList.shift();
  }

  peak() {
    return this.linkedList.get(0);
  }

  values() {
    return this.linkedList.values();
  }
}
