const { LinkedListDoubly } = require("./linkedListDoubly");
const asciichart = require("asciichart");
const { timeit } = require("./util");

class QueueWithArray {
  constructor(data = []) {
    this.data = data;
  }

  enqueue(item) {
    this.data.push(item);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data[0];
  }

  print() {
    console.log(this.data);
  }
}

class QueueWithObject {
  constructor(data = []) {
    this.data = {};
    this.head = 0;
    this.tail = 0;
    for (let item of data) {
      this.enqueue(item);
    }
  }

  enqueue(item) {
    this.data[this.tail] = item;
    this.tail++;
  }

  dequeue() {
    const item = this.data[this.head];
    delete this.data[this.head];
    this.head++;
    return item;
  }

  peek() {
    return this.data[this.head];
  }
}

class QueueWithLinkedList {
  constructor(data = []) {
    this.data = new LinkedListDoubly();
    for (let item of data) {
      this.enqueue(item);
    }
  }

  enqueue(item) {
    this.data.append(item);
  }

  dequeue() {
    return this.data.shift();
  }

  peek() {
    return this.data.head;
  }
}

function comparePerformance() {
  const maxSize = 100_000;
  const runs = 10;

  for (const Cls of [QueueWithArray, QueueWithObject, QueueWithLinkedList]) {
    let results = [];
    for (let size = 1000; size <= maxSize; size *= 2) {
      let averageElapsedTime = 0;
      for (let i = 0; i < runs; i++) {
        const queue = new Cls(new Array(size).fill(0).map((_, i) => i));
        averageElapsedTime += timeit(() => queue.dequeue(), size);
      }
      averageElapsedTime /= runs;
      let averageElapsedTimeInMs = averageElapsedTime / 1_000_000;
      results.push(averageElapsedTimeInMs);
    }
    console.log(Cls.name);
    console.log(asciichart.plot(results));
    console.log(`first: ${results[0]} ms`);
    console.log(`last: ${results[results.length - 1]} ms`);
    console.log("");
  }
}

if (require.main === module) {
  comparePerformance();
}

class Queue extends QueueWithLinkedList {}

module.exports = {
  Queue,
};
