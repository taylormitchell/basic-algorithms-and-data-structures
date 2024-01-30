import { toString, search } from "./binarySearchTree.js";
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

function calcHeight(node) {
  return Math.max(node.left?.height || 0, node.right?.height || 0) + 1;
}

function calcBalance(node) {
  return (node.left?.height || 0) - (node.right?.height || 0);
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
  root.height = calcHeight(root);
  pivot.height = calcHeight(pivot);
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
  root.height = calcHeight(root);
  pivot.height = calcHeight(pivot);
  return pivot;
}

function rebalance(root) {
  if (!root) return null;
  root.height = calcHeight(root);
  const balance = calcBalance(root);
  // Left
  if (balance > 1) {
    // Left
    if (calcBalance(root.left) >= 0) {
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
    if (calcBalance(root.right) <= 0) {
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
  return rebalance(root);
}

export function remove(root, key) {
  if (!root) return null;
  if (root.key > key) {
    root.left = remove(root.left, key);
    return rebalance(root);
  } else if (root.key < key) {
    root.right = remove(root.right, key);
    return rebalance(root);
  } else {
    // 0 or 1 child
    if (root.left === null) {
      return root.right;
    } else if (root.right === null) {
      return root.left;
    }
    // 2 children
    else {
      if (!root.right.left) {
        // next largest node is the right child
        root.right.left = root.left;
        return rebalance(root.right);
      } else {
        // next largest node is the leftmost node of the right subtree
        let nextNode;
        root.right = removeMinimum(root.right, (node) => {
          nextNode = node;
        });
        nextNode.left = root.left;
        nextNode.right = root.right;
        return rebalance(nextNode);
      }
    }
  }
}

/**
 * Remove the minimum node from the tree and return the new root. Optionally,
 * call a callback with the removed node.
 */
function removeMinimum(root, callback) {
  if (!root) {
    return null;
  }
  if (!root.left) {
    callback?.(root);
    return root.right;
  }
  root.left = removeMinimum(root.left, setMin);
  return rebalance(root);
}

export function isAVL(node) {
  if (node === null) return true;
  return Math.abs(calcBalance(node.left, node.right)) <= 1 && isAVL(node.left) && isAVL(node.right);
}

export class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    this.root = insert(this.root, node);
  }

  search(key) {
    return search(this.root, key);
  }

  remove(key) {
    this.root = remove(this.root, key);
  }

  validate() {
    return isAVL(this.root);
  }

  toString() {
    return toString(this.root);
  }
}
