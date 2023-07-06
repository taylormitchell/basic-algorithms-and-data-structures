import { quickSort } from "../src/quickSort";
import { radixSort } from "../src/radixSort";
import { mergeSort } from "../src/mergeSort";

[quickSort, radixSort, mergeSort].forEach((sort) => {
  describe(sort.name, () => {
    test("empty", () => {
      expect(sort([])).toEqual([]);
    });
    test("single", () => {
      expect(sort([1])).toEqual([1]);
    });
    test("two", () => {
      expect(sort([2, 1])).toEqual([1, 2]);
    });
    test("sorted", () => {
      expect(sort([1, 2, 3])).toEqual([1, 2, 3]);
    });
    test("reversed", () => {
      expect(sort([3, 2, 1])).toEqual([1, 2, 3]);
    });
  });
});
