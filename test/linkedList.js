import { LinkedList as srcLinkedList } from "../src/linkedList.js";
// import { LinkedList as practiceLinkedList } from "../practice/linkedList.js";
let LinkedList;

describe.each([
  srcLinkedList,
  //practiceLinkedList
])("%s", (cls) => {
  beforeAll(() => {
    LinkedList = cls;
    // LinkedList = require(filename).LinkedList;
  });

  test("constructor", () => {
    let ll = new LinkedList();
    expect(ll.head).toEqual(null);

    ll = new LinkedList(1, 2, 3);
    expect(ll.values()).toEqual([1, 2, 3]);
  });

  test("insert", () => {
    let values = [1, 3, 4];
    let ll = new LinkedList(...values);
    ll.insert(0, 1);
    expect(ll.values()).toEqual([0, 1, 3, 4]);
    ll.insert(2, 3);
    expect(ll.values()).toEqual([0, 1, 2, 3, 4]);
  });

  test("push", () => {
    let ll = new LinkedList(1, 2, 3);
    ll.push(0);
    expect(ll.values()).toEqual([0, 1, 2, 3]);
  });

  test("delete", () => {
    let ll = new LinkedList(1, 2, 3, 4);

    // delete head
    ll.delete(1);
    expect(ll.values()).toEqual([2, 3, 4]);

    // delete middle
    ll.delete(3);
    expect(ll.values()).toEqual([2, 4]);

    // delete tail
    ll.delete(4);
    expect(ll.values()).toEqual([2]);

    // try deleting non-contained node
    expect(ll.delete(0)).toEqual(false);
    expect(ll.values()).toEqual([2]);
  });

  test("delete from empty", () => {
    let ll = new LinkedList();
    expect(ll.delete(0)).toEqual(false);
  });

  test("has", () => {
    let ll = new LinkedList();
    expect(ll.has(2)).toEqual(false);
    ll = new LinkedList(1, 2, 3);
    expect(ll.has(1)).toEqual(true);
    expect(ll.has(2)).toEqual(true);
    expect(ll.has(3)).toEqual(true);
    expect(ll.has(4)).toEqual(false);
  });
});
