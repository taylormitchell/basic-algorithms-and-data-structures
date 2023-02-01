import * as src from "../src/binarySearch";
// import * as practice from "../practice/binarySearch.js";
let binarySearch;

describe.each([
  ["src", src],
  // ["practice", practice]
])("%s", (_, module) => {
  beforeAll(() => {
    binarySearch = module.binarySearch;
  });
  test("mid", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toEqual(2);
  });
  test("start", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1)).toEqual(0);
  });
  test("end", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5)).toEqual(4);
  });
  test("mid-left", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 2)).toEqual(1);
  });
  test("missing", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBeNull();
  });
  test("empty", () => {
    expect(binarySearch([], 6)).toBeNull();
  });
});
