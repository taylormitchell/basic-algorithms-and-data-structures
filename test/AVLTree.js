import { insert, remove, Node, isAVL } from "../src/AVLTree";
import { toString } from "../src/binaryTree";

describe("AVLTree", () => {
  test("should remain balanced after insertion", () => {
    let root = null;
    root = insert(root, new Node(10));
    root = insert(root, new Node(20));
    root = insert(root, new Node(30));
    root = insert(root, new Node(40));
    root = insert(root, new Node(50));
    root = insert(root, new Node(25));
    console.log(toString(root));
    expect(isAVL(root)).toBe(true);
  });

  test("should remain balanced after deletion", () => {
    let root = new Node(4, {
      left: new Node(2, {
        left: new Node(1),
        right: new Node(3),
      }),
      right: new Node(5),
    });
    console.log(toString(root));
    root = remove(root, 5);
    console.log(toString(root));
    expect(isAVL(root)).toBe(true);
  });

  test("left-left imbalance after insertion", () => {
    let root = new Node(4, {
      left: new Node(3),
    });
    console.log(toString(root));
    root = insert(root, new Node(2));
    console.log(toString(root));
    expect(isAVL(root)).toBe(true);
  });

  test("left-right imbalance after insertion", () => {
    let root = new Node(4, {
      left: new Node(2),
    });
    console.log(toString(root));
    root = insert(root, new Node(3));
    console.log(toString(root));
    expect(isAVL(root)).toBe(true);
  });

  test("right-right imbalance after insertion", () => {
    let root = new Node(4, {
      right: new Node(5),
    });
    console.log(toString(root));
    root = insert(root, new Node(6));
    console.log(toString(root));
    expect(isAVL(root)).toBe(true);
  });

  test("right-left imbalance after insertion", () => {
    let root = new Node(4, {
      right: new Node(6),
    });
    console.log(toString(root));
    root = insert(root, new Node(5));
    console.log(toString(root));
    expect(isAVL(root)).toBe(true);
  });
});
