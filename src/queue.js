const { LinkedListDoubly } = require("./linkedListDoubly");

class Queue {
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

module.exports = {
  Queue,
};
