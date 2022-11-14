let bst, Node, binaryTree;

describe.each(["../src/binarySearchTree", "../practice/binarySearchTree"])("%s", (filename) => {
  beforeAll(() => {
    bst = require(filename);
    binaryTree = require("./binaryTree");
    Node = bst.Node;
  });
  test("toObject", () => {
    root = new Node(5, null, new Node(3), new Node(7));
    const actual = binaryTree.toObject(root);
    const expected = {
      key: 5,
      value: 5,
      left: {
        key: 3,
        value: 3,
        left: null,
        right: null,
      },
      right: {
        key: 7,
        value: 7,
        left: null,
        right: null,
      },
    };
    expect(actual).toEqual(expected);
  });

  test("simpleTree", () => {
    let root = bst.simpleTree();
    const expected = {
      key: 4,
      value: 4,
      left: {
        key: 2,
        value: 2,
        left: {
          key: 1,
          value: 1,
          left: null,
          right: null,
        },
        right: {
          key: 3,
          value: 3,
          left: null,
          right: null,
        },
      },
      right: {
        key: 5,
        value: 5,
        left: null,
        right: {
          key: 6,
          value: 6,
          left: null,
          right: null,
        },
      },
    };
    const actual = binaryTree.toObject(root);
    expect(actual).toEqual(expected);
  });
  test("sanity", () => {
    let root = new Node(2);
    root = bst.insert(root, new Node(1));
    root = bst.insert(root, new Node(3));
    expect(root.key).toBe(2);
    expect(root.left.key).toBe(1);
    expect(root.right.key).toBe(3);
  });

  test("remove - 0 children", () => {
    let root = bst.simpleTree();
    root = bst.remove(root, 6);
    expect(root.right.key).toEqual(5);
    expect(root.right.right).toEqual(null);
  });

  test("remove - 1 children", () => {
    let root = bst.simpleTree();
    root = bst.remove(root, 5);
    expect(root.right.key).toEqual(6);
    expect(root.right.right).toEqual(null);
    expect(root.right.left).toEqual(null);
  });

  test("remove - 2 children", () => {
    let root = bst.simpleTree();
    root = bst.remove(root, 2);
    expect(root.left.key).toBe(3);
    expect(root.left.right).toEqual(null);
    expect(root.left.left.key).toEqual(1);
  });

  /**
   * @todo
   *        root <- parent
   *        /   \
   *     left   node <- successor
   *           /     \
   *          null    right
   */
  test("remove - 2 children - successor right", () => {
    const root = binaryTree.fromObject({
      key: 3,
      value: 3,
      left: {
        key: 2,
        value: 2,
        left: null,
        right: null,
      },
      right: {
        key: 4,
        value: 4,
        left: null,
        right: {
          key: 5,
          value: 5,
          left: null,
          right: null,
        },
      },
    });
    const actual = binaryTree.toObject(bst.remove(root, 4));
    const expected = {
      key: 3,
      value: 3,
      left: {
        key: 2,
        value: 2,
        left: null,
        right: null,
      },
      right: {
        key: 5,
        value: 5,
        left: null,
        right: null,
      },
    };
    expect(actual).toEqual(expected);
  });

  /**
   * @todo
   *           1 == root                   1 == root
   *             \                           \
   *               9 == delete                 12 == successor
   *              /  \                        /  \
   *            8     33                    8     33
   *                 /  \         ->             /  \
   *      parent == 32   39                     32   39
   *               /                           /
   * successor == 12                          20
   *             /  \                        /  \
   *           nil   20                    ...   ...
   */
  test("remove - 2 children - successor right left+", () => {});

  test("remove - not in tree", () => {
    let root = new Node(2, null, new Node(1), new Node(3));
    let before = binaryTree.toObject(root);
    root = bst.remove(root, 99);
    let after = binaryTree.toObject(root);
    expect(before).toEqual(after);
  });

  test("search", () => {
    let node = new Node(3);
    let root = new Node(2, null, new Node(1), node);
    expect(bst.search(root, 3)).toBe(node);
    expect(bst.search(root, 0)).toBe(null);
  });
});
