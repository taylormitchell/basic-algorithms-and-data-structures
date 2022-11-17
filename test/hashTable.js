import * as src from "../src/hashTable.js";
import * as practice from "../practice/hashTable.js";
let HashTable;

describe.each([
  ["src", src],
  // ["practice", practice]
])("%s", (_, module) => {
  beforeAll(() => {
    HashTable = module.HashTable;
  });

  describe("set", () => {
    test("should set a value", () => {
      let hashTable = new HashTable();
      hashTable.set("a", 1);
      expect(hashTable.get("a")).toEqual(1);
    });
    test("should set many values", () => {
      let hashTable = new HashTable();
      hashTable.set("a", 1);
      hashTable.set("b", 2);
      hashTable.set("c", 3);
      expect(hashTable.get("a")).toEqual(1);
      expect(hashTable.get("b")).toEqual(2);
      expect(hashTable.get("c")).toEqual(3);
    });
    test("should overwrite a value", () => {
      let hashTable = new HashTable();
      hashTable.set("a", 1);
      hashTable.set("a", 2);
      expect(hashTable.get("a")).toEqual(2);
    });
  });

  describe("get", () => {
    test("should get a value", () => {
      let hashTable = new HashTable();
      hashTable.set("a", 1);
      expect(hashTable.get("a")).toEqual(1);
    });
    test("should return null when missing a value", () => {
      let hashTable = new HashTable();
      expect(hashTable.get("a")).toEqual(null);
    });
  });

  describe("delete", () => {
    test("should delete a value", () => {
      let hashTable = new HashTable();
      hashTable.set("a", 1);
      hashTable.delete("a");
      expect(hashTable.get("a")).toEqual(null);
    });
    test("should return false when missing a value", () => {
      let hashTable = new HashTable();
      expect(hashTable.delete("a")).toEqual(false);
    });
  });
});
