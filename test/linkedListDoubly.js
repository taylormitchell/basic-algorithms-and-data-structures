import * as src from "../src/linkedListDoubly.js";
import * as practice from "../practice/linkedListDoubly.js";
let LinkedListDoubly;

describe.each([
  ["src", src],
  // ["practice", practice]
])("%s", (_, module) => {
  beforeAll(() => {
    LinkedListDoubly = module.LinkedListDoubly;
  });

  test("constructor", () => {
    let ll, values;

    values = [];
    ll = new LinkedListDoubly(values);
    expect(ll.head).toEqual(undefined);
    expect(ll.tail).toEqual(undefined);

    values = [0];
    ll = new LinkedListDoubly(values);
    expect(ll.peak()).toEqual(values[0]);

    values = [0, 1, 2];
    ll = new LinkedListDoubly(values);

    expect(ll.head.value).toEqual(0);
    expect(ll.head.next.value).toEqual(1);
    expect(ll.head.prev).toEqual(undefined);

    expect(ll.head.next.prev.value).toEqual(0);
    expect(ll.head.next.next.value).toEqual(2);

    expect(ll.tail.value).toEqual(2);
    expect(ll.tail.prev.value).toEqual(1);
    expect(ll.tail.next).toEqual(undefined);
  });

  test("insert", () => {
    let values = [1, 3, 4];
    let ll = new LinkedListDoubly(values);

    ll.insertBefore(1, 0);
    expect(ll.values()).toEqual([0, 1, 3, 4]);
    expect(ll.valuesReverse()).toEqual([0, 1, 3, 4].reverse());

    ll.insertAfter(1, 2);
    expect(ll.values()).toEqual([0, 1, 2, 3, 4]);
    expect(ll.valuesReverse()).toEqual([0, 1, 2, 3, 4].reverse());
  });

  test("unshift", () => {
    let values = [1, 2, 3];
    let ll = new LinkedListDoubly(values);
    ll.unshift(0);
    expect(ll.values()).toEqual([0, 1, 2, 3]);
    expect(ll.valuesReverse()).toEqual([0, 1, 2, 3].reverse());
  });

  test("push", () => {
    let values = [1, 2, 3];
    let ll = new LinkedListDoubly(values);
    ll.push(4);
    ll.push(5);
    expect(ll.values()).toEqual([1, 2, 3, 4, 5]);
    expect(ll.valuesReverse()).toEqual([1, 2, 3, 4, 5].reverse());
  });

  test("delete", () => {
    let values = [1, 2, 3, 4, 5];
    let ll = new LinkedListDoubly(values);

    // delete head
    ll.delete(1);
    expect(ll.values()).toEqual([2, 3, 4, 5]);

    // delete middle
    ll.delete(3);
    expect(ll.values()).toEqual([2, 4, 5]);

    // delete tail
    ll.delete(5);
    expect(ll.values()).toEqual([2, 4]);
    expect(ll.valuesReverse()).toEqual([2, 4].reverse());

    // try deleting non-contained node
    ll.delete(6);
    expect(ll.values()).toEqual([2, 4]);
  });

  test("delete last node", () => {
    let values = [0];
    let ll = new LinkedListDoubly(values);
    ll.delete(0);
    expect(ll.head).toEqual(undefined);
    expect(ll.tail).toEqual(undefined);
  });
});
