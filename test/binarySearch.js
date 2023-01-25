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
    binarySearch([1, 2, 3, 4, 5], 3);
  });
  test("start", () => {
    binarySearch([1, 2, 3, 4, 5], 1);
  });
  test("end", () => {
    binarySearch([1, 2, 3, 4, 5], 5);
  });
  test("mid-left", () => {
    binarySearch([1, 2, 3, 4, 5], 2);
  });
  test("missing", () => {
    binarySearch([1, 2, 3, 4, 5], 6);
  });
  test("empty", () => {
    binarySearch([], 6);
  });
});
