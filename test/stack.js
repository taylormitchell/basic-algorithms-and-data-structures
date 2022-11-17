import * as src from "../src/stack.js";
import * as practice from "../practice/stack.js";
let Stack;

describe.each([
  ["src", src],
  // ["practice", practice]
])("%s", (_, module) => {
  beforeAll(() => {
    Stack = module.Stack;
  });

  test("constructor", () => {
    let stack = new Stack();
    expect(stack.values()).toEqual([]);
    stack = new Stack(1, 2, 3);
    expect(stack.values()).toEqual([1, 2, 3]);
  });

  test("push", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.values()).toEqual([1, 2, 3]);
  });

  test("pop", () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    const item = stack.pop();
    expect(item).toEqual(3);
    expect(stack.values()).toEqual([1, 2]);
  });
});
