import * as src from "../src/mergeSort.js";
// import * as practice from "../practice/mergeSort.js";
let mergeSort;

describe.each([
  ["src", src],
  // ["practice", practice],
])("%s", (_, module) => {
  beforeAll(() => {
    mergeSort = module.mergeSort;
  });
  test("empty", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("single", () => {
    expect(mergeSort([1])).toEqual([1]);
  });
  test("two", () => {
    expect(mergeSort([2, 1])).toEqual([1, 2]);
  });
  test("sorted", () => {
    expect(mergeSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test("reversed", () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
