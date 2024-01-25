import { randomInt } from "./util.js";

// BST
export class Node {
  constructor(value, key = null, left = null, right = null) {
    this.value = value;
    this.key = key || value;
    this.left = left;
    this.right = right;
    this.height = calcHeight(left, right);
  }
}

function calcHeight(left, right) {
  return Math.max(left?.height || 0, right?.height || 0) + 1;
}

function calcBalance(left, right) {
  return (right?.height || 0) - (left?.height || 0);
}

/**
 * Left rotation
 *
 * Example:
 *                  5 (root)                 6
 *                 / \          ->         /  \
 *   (root.left) rl   6 (pivot)           5     7
 *                   /  \                / \
 *  (pivot.left)   pl    7             rl  pl
 *
 */
function leftRotate(root) {
  let pivot = root.right;
  root.right = pivot.left;
  pivot.left = root;
  root.height = calcHeight(root.left, root.right);
  pivot.height = calcHeight(pivot.left, pivot.right);
  return pivot;
}

/**
 * Right rotation
 *
 * Example:
 *
 *    (root)  5                            4
 *          /   \                        /  \
 * (pivot) 4    rr (root.right)  ->    3     5
 *        / \                               / \
 *       3  pr (pivot.right)              pr  rr
 */
function rightRotate(root) {
  let pivot = root.left;
  root.left = pivot.right;
  pivot.right = root;
  root.height = calcHeight(root.left, root.right);
  pivot.height = calcHeight(pivot.left, pivot.right);
  return pivot;
}

export function insert(root, node) {
  if (!root) {
    return node;
  }
  if (node.key <= root.key) {
    root.left = insert(root.left, node);
  } else {
    root.right = insert(root.right, node);
  }

  root.height = calcHeight(root.left, root.right);
  let balance = calcBalance(root.left, root.right);

  // Left Left
  if (balance > 1 && node.key < root.left.key) {
    return rightRotate(root);
  }
  // Right Right
  if (balance < -1 && node.key > root.right.key) {
    return leftRotate(root);
  }
  // Left Right
  if (balance > 1 && node.key > root.left.key) {
    root.left = leftRotate(root.left);
    return rightRotate(root);
  }
  // Right Left
  if (balance < -1 && node.key < root.right.key) {
    root.right = rightRotate(root.right);
    return leftRotate(root);
  }

  return root;
}

export function search(root, key) {
  if (!root) {
    return null;
  }
  if (key === root.key) {
    return root;
  } else if (key < root.key) {
    return search(root.left, key);
  } else {
    return search(root.right, key);
  }
}

export function remove(root, key) {
  if (!root) {
    return null;
  }

  if (root.key === key) {
    // Now that we have the matching node, we need to find
    // a suitable node to replace it in the tree.

    /**
    * If the node has 0 or 1 children, then replace it
    * with it's other child
       
    *    root
    *   /    \
    * null    node
    *        /    \
    *     (...)   (...)
    */
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    } else {
      // Otherwise it has 2 children, in which case we'll replace it
      // with the next-largest node from it's right subtree
      let nextNode;

      /**
       * If the right child doesn't have a left sub-tree,
       * then it's the next largest node.
       *    root
       *        \
       *         nextNode
       *         /     \
       *       null    (...)
       */
      nextNode = root.right;
      if (nextNode.left === null) {
        nextNode.left = root.left;
        return nextNode;
      } else {
        /**
         * Otherwise we need to drill down to the far left leaf node
         *
         *    root
         *        \
         *       root.right
         *         /
         *       ...
         *       /
         *    parentNode
         *    /
         *  nextNode
         *  /    \
         * null   (...)
         */
        let parentNode;
        while (nextNode.left) {
          parentNode = nextNode;
          nextNode = nextNode.left;
        }
        // replace nextNode with it's own children
        parentNode.left = nextNode.right;
        // then sub nextNode
        nextNode.left = root.left;
        nextNode.right = root.right;
        return nextNode;
      }
    }
  } else {
    // Otherwise, keep drilling down to find matching node
    if (root.key > key) {
      root.left = remove(root.left, key);
    } else {
      root.right = remove(root.right, key);
    }
    return root;
  }
}

// Helpers

/**
 * ```
 *      4
 *    2   5
 *  1  3    6
 * ```
 * @returns
 */
export function simpleTree() {
  let root = null;
  root = insert(root, new Node(4));
  root = insert(root, new Node(2));
  root = insert(root, new Node(1));
  root = insert(root, new Node(3));
  root = insert(root, new Node(5));
  root = insert(root, new Node(6));
  return root;
}

export function randomTree(size = 10, min = 0, max = 100) {
  if (size <= 0) {
    return null;
  }
  let root = new Node(randomInt(min, max));
  for (let i = 1; i < size; i++) {
    insert(root, new Node(randomInt(min, max)));
  }
  return root;
}
