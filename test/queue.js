import * as src from "../src/queue.js";
import * as practice from "../practice/queue.js";
let Queue;

describe.each([
  ["src", src],
  // ["practice", practice]
])("%s", (_, module) => {
  beforeAll(() => {
    Queue = module.Queue;
  });

  test("constructor", () => {
    let queue = new Queue();
    expect(queue.values()).toEqual([]);
    queue = new Queue(1, 2, 3);
    expect(queue.values()).toEqual([1, 2, 3]);
  });

  test("enqueue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.values()).toEqual([1, 2, 3]);
  });

  test("dequeue", () => {
    const queue = new Queue(1, 2, 3);
    const item = queue.dequeue();
    expect(item).toEqual(1);
    expect(queue.values()).toEqual([2, 3]);
  });
});
