let MinHeap;

describe.each([
  // "./heap.todo",
  "./heap",
])("%s", (filename) => {
  beforeAll(() => {
    const module = require(filename);
    MinHeap = module.MinHeap;
  });

  test("constructor", () => {
    const heap = new MinHeap(2, 1, 3);
    expect(heap.values).toEqual([1, 2, 3]);
  });

  test("insert", () => {
    const values = [1, 2, 3];
    const heap = new MinHeap(...values);
    expect(heap.values).toEqual(values);

    heap.insert(0);
    expect(heap.values).toEqual([0, 1, 3, 2]);

    heap.insert(4);
    expect(heap.values).toEqual([0, 1, 3, 2, 4]);
  });

  describe("pop", () => {
    test("empty", () => {
      const heap = new MinHeap();
      expect(heap.pop()).toBeUndefined();
    });

    test("bubble down to left only", () => {
      const values = [1, 2, 3, 4, 5, 6, 7];
      const heap = new MinHeap(...values);
      expect(heap.values).toEqual(values);

      expect(heap.pop()).toEqual(1);
      expect(heap.values).toEqual([2, 4, 3, 7, 5, 6]);
    });

    test("bubble down to right then left", () => {
      const values = [1, 8, 4, 9, 10, 5, 6];
      const heap = new MinHeap(...values);
      expect(heap.values).toEqual(values);

      expect(heap.pop()).toEqual(1);
      expect(heap.values).toEqual([4, 8, 5, 9, 10, 6]);
    });
  });
});
