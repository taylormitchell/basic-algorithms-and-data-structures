let MinHeap;

describe.each(["../src/heap", "../practice/heap"])("%s", (filename) => {
  beforeAll(() => {
    const module = require(filename);
    MinHeap = module.MinHeap;
  });

  test("constructor", () => {
    let heap, values;
    // values are heapified
    heap = new MinHeap(2, 1, 3);
    expect(new MinHeap(2, 1, 3).values).toEqual([1, 2, 3]);
    // already heapified values stay in same order
    values = [1, 2, 3, 4, 5, 6, 7];
    heap = new MinHeap(...values);
    expect(heap.values).toEqual(values);
  });

  test("push", () => {
    const heap = new MinHeap(1, 2, 3);

    heap.push(0);
    expect(heap.values).toEqual([0, 1, 3, 2]);

    heap.push(4);
    expect(heap.values).toEqual([0, 1, 3, 2, 4]);
  });

  describe("pop", () => {
    test("empty", () => {
      const heap = new MinHeap();
      expect(heap.pop()).toBeUndefined();
    });

    test("bubble down to left only", () => {
      const heap = new MinHeap(1, 2, 3, 4, 5, 6, 7);
      expect(heap.pop()).toEqual(1);
      expect(heap.values).toEqual([2, 4, 3, 7, 5, 6]);
    });

    test("bubble down to right then left", () => {
      const heap = new MinHeap(1, 8, 4, 9, 10, 5, 6);
      expect(heap.pop()).toEqual(1);
      expect(heap.values).toEqual([4, 8, 5, 9, 10, 6]);
    });
  });
});
