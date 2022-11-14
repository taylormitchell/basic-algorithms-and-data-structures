let Stack;

describe.each(["../src/stack", "../practice/stack"])("%s", (filename) => {
  beforeAll(() => {
    const { Stack: cls } = require(filename);
    Stack = cls;
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
