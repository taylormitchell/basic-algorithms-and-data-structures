const { insert, remove, search, Node, keys, simpleTree } = require("./binarySearchTree");
const bst = require("./binarySearchTree");

test("print tree", () => {
  let root = simpleTree();
  console.log(bst.toString(root));
});

test("sanity", () => {
  let root = new Node(2);
  root = insert(new Node(1), root);
  root = insert(new Node(3), root);
  expect(root.key).toBe(2);
  expect(root.left.key).toBe(1);
  expect(root.right.key).toBe(3);
});

test("remove - 0 children", () => {
  let root = simpleTree();
  root = remove(6, root);
  expect(root.right.key).toEqual(5);
  expect(root.right.right).toEqual(null);
});

test("remove - 1 children", () => {
  let root = simpleTree();
  root = remove(5, root);
  expect(root.right.key).toEqual(6);
  expect(root.right.right).toEqual(null);
  expect(root.right.left).toEqual(null);
});

test("remove - 2 children", () => {
  let root = simpleTree();
  root = remove(3, root);
  expect(root.left.key).toBe(1);
  expect(root.left.right.key).toEqual(2);
  expect(root.left.left).toEqual(null);
});

test("remove - 2 children - successor right", () => {
  /*
        root <- parent
        /   \
     left   node <- successor
           /     \
          nil    right
    */
});

test("remove - 2 children - successor right left+", () => {
  /*
           1 == root                   1 == root
             \                           \
               9 == delete                 12 == successor
              /  \                        /  \
            8     33                    8     33 
                 /  \         ->             /  \
      parent == 32   39                     32   39
               /                           /
 successor == 12                          20
             /  \                        /  \
           nil   20                    ...   ...       
    */
});

test("remove - not in tree", () => {
  let root = simpleTree();
  let keysBefore = keys(root);
  root = remove(99, root);
  let keysAfter = keys(root);
  expect(keysBefore).toEqual(keysAfter);
});

test("search", () => {
  let nodeFind = new Node(3);
  let root = new Node(2);
  root = insert(new Node(1), root);
  root = insert(nodeFind, root);
  expect(search(3, root)).toBe(nodeFind);
  expect(search(0, root)).toBe(undefined);
});
