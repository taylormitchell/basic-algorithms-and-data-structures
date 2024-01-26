import { insert, Node, isAVL } from "../src/AVLTree";
import { toString } from "../src/binaryTree";

describe("AVLTree", () => {
  test("AVL tree should remain balanced after insertions", () => {
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
});
