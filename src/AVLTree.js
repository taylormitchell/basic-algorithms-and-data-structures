import { randomInt } from "./util.js";

// BST
export class Node {
  constructor(value, { key = null, left = null, right = null } = {}) {
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
function rotateLeft(root) {
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
 *    (root)  5                           4
 *          /   \                        /  \
 * (pivot) 4    rr (root.right)  ->    3     5
 *        / \                               / \
 *       3  pr (pivot.right)              pr  rr
 */
function rotateRight(root) {
  let pivot = root.left;
  root.left = pivot.right;
  pivot.right = root;
  root.height = calcHeight(root.left, root.right);
  pivot.height = calcHeight(pivot.left, pivot.right);
  return pivot;
}

function rebalance(root) {
  const balance = calcBalance(root.left, root.right);
  // Left
  if (balance > 1) {
    // Left
    if (calcBalance(root.left?.left, root.left?.right) >= 0) {
      return rotateRight(root);
    }
    // Right
    else {
      root.left = rotateLeft(root.left);
      return rotateRight(root);
    }
  }
  // Right
  else if (balance < -1) {
    // Right
    if (calcBalance(root.right?.left, root.right?.right) <= 0) {
      return rotateLeft(root);
    }
    // Left
    else {
      root.right = rotateRight(root.right);
      return rotateLeft(root);
    }
  } else {
    // Already balanced
    return root;
  }
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
  return rebalance(root);
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

export function min(root) {
  if (!root) {
    return null;
  }
  if (!root.left) {
    return root;
  }
  return min(root.left);
}

export function remove(root, key) {
  let res = null;
  if (!root) {
    return res;
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
      res = root.right;
    } else if (root.right === null) {
      res = root.left;
    } else {
      // Otherwise it has 2 children, in which case we'll replace it
      // with the next-largest node from it's right subtree
      const nextNode = min(root.right);
      /**
       * The nextNode is either the root.right or it's way down the left side
       * of the right subtree. We need to handle both cases differently.
       *
       * case 1:                   case 2:
       *
       *    root                      root
       *        \                    /    \
       *         nextNode          ...  root.right
       *         /     \                   /    \
       *       null    (...)             ...    ...
       *                                 /
       *                              parentNode
       *                              /        \
       *                            nextNode   ...
       *                            /    \
       *                           null   ...
       */
      if (nextNode === root.right) {
        // case 1
        nextNode.left = root.left;
        res = nextNode;
      } else {
        // case 2
        // replace nextNode with it's own children
        parentNode.left = nextNode.right;
        // then sub nextNode
        nextNode.left = root.left;
        nextNode.right = root.right;
        res = nextNode;
      }
    }
  } else {
    // Otherwise, keep drilling down to find matching node
    if (root.key > key) {
      root.left = remove(root.left, key);
    } else {
      root.right = remove(root.right, key);
    }
    res = root;
  }
  // Update height and rebalance
  res.height = calcHeight(res.left, res.right);
  return rebalance(res);
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
  return new Node(4, {
    left: new Node(2, {
      left: new Node(1),
      right: new Node(3),
    }),
    right: new Node(5, {
      right: new Node(6),
    }),
  });
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

export function isAVL(node) {
  if (node === null) return true;
  return Math.abs(calcBalance(node.left, node.right)) <= 1 && isAVL(node.left) && isAVL(node.right);
}
