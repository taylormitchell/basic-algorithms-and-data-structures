import * as src from "../src/sort";
// import * as practice from "../practice/sort.js";
let quickSort;

describe.each([
  ["src", src],
  // ["practice", practice]
])("%s", (_, module) => {
  beforeAll(() => {
    quickSort = module.quickSort;
  });
  test("empty", () => {
    expect(quickSort([])).toEqual([]);
  });
  test("single", () => {
    expect(quickSort([1])).toEqual([1]);
  });
  test("sorted", () => {
    expect(quickSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("reversed", () => {
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
