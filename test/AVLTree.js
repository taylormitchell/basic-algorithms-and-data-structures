import { insert, remove, Node, isAVL, AVLTree } from "../src/AVLTree";
import { toString } from "../src/binaryTree";

describe("AVLTree", () => {
  test("should remain balanced after insertion", () => {
    const tree = new AVLTree();
    tree.insert(new Node(10));
    tree.insert(new Node(20));
    tree.insert(new Node(30));
    tree.insert(new Node(40));
    tree.insert(new Node(50));
    tree.insert(new Node(25));
    console.log(tree.toString());
    expect(tree.validate()).toBe(true);
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
