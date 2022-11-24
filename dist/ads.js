/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var ads;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ads.js":
/*!********************!*\
  !*** ./src/ads.js ***!
  \********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"binarySearchTree\": () => (/* reexport module object */ _binarySearchTree_js__WEBPACK_IMPORTED_MODULE_2__),\n/* harmony export */   \"binaryTree\": () => (/* reexport module object */ _binaryTree_js__WEBPACK_IMPORTED_MODULE_3__),\n/* harmony export */   \"hashTable\": () => (/* reexport module object */ _hashTable_js__WEBPACK_IMPORTED_MODULE_4__),\n/* harmony export */   \"heap\": () => (/* reexport module object */ _heap_js__WEBPACK_IMPORTED_MODULE_5__),\n/* harmony export */   \"linkedList\": () => (/* reexport module object */ _linkedList_js__WEBPACK_IMPORTED_MODULE_0__),\n/* harmony export */   \"linkedListDoubly\": () => (/* reexport module object */ _linkedListDoubly_js__WEBPACK_IMPORTED_MODULE_1__),\n/* harmony export */   \"queue\": () => (/* reexport module object */ _queue_js__WEBPACK_IMPORTED_MODULE_6__),\n/* harmony export */   \"stack\": () => (/* reexport module object */ _stack_js__WEBPACK_IMPORTED_MODULE_7__),\n/* harmony export */   \"util\": () => (/* reexport module object */ _util_js__WEBPACK_IMPORTED_MODULE_8__)\n/* harmony export */ });\n/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ \"./src/linkedList.js\");\n/* harmony import */ var _linkedListDoubly_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linkedListDoubly.js */ \"./src/linkedListDoubly.js\");\n/* harmony import */ var _binarySearchTree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./binarySearchTree.js */ \"./src/binarySearchTree.js\");\n/* harmony import */ var _binaryTree_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binaryTree.js */ \"./src/binaryTree.js\");\n/* harmony import */ var _hashTable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hashTable.js */ \"./src/hashTable.js\");\n/* harmony import */ var _heap_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heap.js */ \"./src/heap.js\");\n/* harmony import */ var _queue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./queue.js */ \"./src/queue.js\");\n/* harmony import */ var _stack_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stack.js */ \"./src/stack.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ads/./src/ads.js?");

/***/ }),

/***/ "./src/binarySearchTree.js":
/*!*********************************!*\
  !*** ./src/binarySearchTree.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node),\n/* harmony export */   \"insert\": () => (/* binding */ insert),\n/* harmony export */   \"randomTree\": () => (/* binding */ randomTree),\n/* harmony export */   \"remove\": () => (/* binding */ remove),\n/* harmony export */   \"search\": () => (/* binding */ search),\n/* harmony export */   \"simpleTree\": () => (/* binding */ simpleTree)\n/* harmony export */ });\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n\n// BST\nclass Node {\n  constructor(value, key = null, left = null, right = null) {\n    this.value = value;\n    this.key = key || value;\n    this.left = left;\n    this.right = right;\n  }\n}\n\nfunction insert(root, node) {\n  if (!root) {\n    return node;\n  }\n  if (node.key <= root.key) {\n    root.left = insert(root.left, node);\n  } else {\n    root.right = insert(root.right, node);\n  }\n  return root;\n}\n\nfunction search(root, key) {\n  if (!root) {\n    return null;\n  }\n  if (key === root.key) {\n    return root;\n  } else if (key < root.key) {\n    return search(root.left, key);\n  } else {\n    return search(root.right, key);\n  }\n}\n\nfunction remove(root, key) {\n  if (!root) {\n    return null;\n  }\n\n  if (root.key === key) {\n    // Now that we have the matching node, we need to find\n    // a suitable node to replace it in the tree.\n\n    /**\n    * If the node has 0 or 1 children, then replace it\n    * with it's other child\n       \n    *    root\n    *   /    \\\n    * null    node\n    *        /    \\\n    *     (...)   (...)\n    */\n    if (root.left === null) {\n      return root.right;\n    } else if (root.right === null) {\n      return root.left;\n    } else {\n      // Otherwise it has 2 children, in which case we'll replace it\n      // with the next-largest node from it's right subtree\n      let nextNode;\n\n      /**\n       * If the right child doesn't have a left sub-tree,\n       * then it's the next largest node.\n       *    root\n       *        \\\n       *         nextNode\n       *         /     \\\n       *       null    (...)\n       */\n      nextNode = root.right;\n      if (nextNode.left === null) {\n        nextNode.left = root.left;\n        return nextNode;\n      } else {\n        /**\n         * Otherwise we need to drill down to the far left leaf node\n         *\n         *    root\n         *        \\\n         *       root.right\n         *         /\n         *       ...\n         *       /\n         *    parentNode\n         *    /\n         *  nextNode\n         *  /    \\\n         * null   (...)\n         */\n        let parentNode;\n        while (nextNode.left) {\n          parentNode = nextNode;\n          nextNode = nextNode.left;\n        }\n        // replace nextNode with it's own children\n        parentNode.left = nextNode.right;\n        // then sub nextNode\n        nextNode.left = root.left;\n        nextNode.right = root.right;\n        return nextNode;\n      }\n    }\n  } else {\n    // Otherwise, keep drilling down to find matching node\n    if (root.key > key) {\n      root.left = remove(root.left, key);\n    } else {\n      root.right = remove(root.right, key);\n    }\n    return root;\n  }\n}\n\n// Helpers\n\n/**\n * ```\n *      4\n *    2   5\n *  1  3    6\n * ```\n * @returns\n */\nfunction simpleTree() {\n  let root = null;\n  root = insert(root, new Node(4));\n  root = insert(root, new Node(2));\n  root = insert(root, new Node(1));\n  root = insert(root, new Node(3));\n  root = insert(root, new Node(5));\n  root = insert(root, new Node(6));\n  return root;\n}\n\nfunction randomTree(size = 10, min = 0, max = 100) {\n  if (size <= 0) {\n    return null;\n  }\n  let root = new Node((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.randomInt)(min, max));\n  for (let i = 1; i < size; i++) {\n    insert(root, new Node((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.randomInt)(min, max)));\n  }\n  return root;\n}\n\n\n//# sourceURL=webpack://ads/./src/binarySearchTree.js?");

/***/ }),

/***/ "./src/binaryTree.js":
/*!***************************!*\
  !*** ./src/binaryTree.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Node\": () => (/* binding */ Node),\n/* harmony export */   \"fromArray\": () => (/* binding */ fromArray),\n/* harmony export */   \"fromObject\": () => (/* binding */ fromObject),\n/* harmony export */   \"getChildIndices\": () => (/* binding */ getChildIndices),\n/* harmony export */   \"toObject\": () => (/* binding */ toObject),\n/* harmony export */   \"toString\": () => (/* binding */ toString)\n/* harmony export */ });\nclass Node {\n  constructor(value, key = null, left = null, right = null) {\n    this.value = value;\n    this.key = key || value;\n    this.left = left;\n    this.right = right;\n  }\n}\n\n/**\n * Convery a tree to a string representation\n *\n * Example output:\n *\n * ```\n *        20134534534\n *   ┌─────────┴──┐\n *   46           83\n * ┌─┴─┐        ┌─┴─┐\n * 45  50       71  86\n *    ┌┴─┐\n *       53\n *      ┌┴─┐\n *         58\n *        ┌┴─┐\n *           63\n * ```\n *\n * @reference https://www.w3.org/TR/xml-entity-names/025.html\n */\nfunction toString(root) {\n  function toStringArray(root) {\n    if (!root) {\n      return [[\" \"], 0];\n    }\n\n    if (!root.left && !root.right) {\n      let line = root.key.toString();\n      return [[line], Math.floor((line.length - 1) / 2)];\n    }\n\n    // Create strings of subtree and root\n    let [leftLines, leftRootIndex] = toStringArray(root.left);\n    let leftWidth = leftLines[0].length;\n    let [rightLines, rightRootIndex] = toStringArray(root.right);\n    let rightWidth = rightLines[0].length;\n    let rootString = root.key.toString();\n\n    // Create root line\n    let lineRoot = rootString;\n\n    // Create children lines\n    let linesChildren = [];\n    linesChildren.push(\n      \" \".repeat(leftRootIndex) +\n        \"┌\" +\n        \"─\".repeat(leftWidth - leftRootIndex - 1) +\n        \"┴\" +\n        \"─\".repeat(rightRootIndex) +\n        \"┐\" +\n        \" \".repeat(rightWidth - rightRootIndex - 1)\n    );\n    let i = 0;\n    while (i < leftLines.length || i < rightLines.length) {\n      linesChildren.push(\n        (leftLines[i] || \" \".repeat(leftWidth)) + \" \" + (rightLines[i] || \" \".repeat(rightWidth))\n      );\n      i++;\n    }\n\n    // Add padding to align root and it's children\n    let rootMidIndex = Math.floor(rootString.length - 1 / 2);\n    let rootBranchIndex = leftWidth;\n    if (rootBranchIndex > rootMidIndex) {\n      /*\n      root mid \n      ↓   root branch\n      1      ↓         \n        ┌────┴───┐ \n       ...      ...\n      */\n      let padding = \" \".repeat(rootBranchIndex - rootMidIndex);\n      lineRoot = padding + lineRoot;\n      rootMidIndex = padding + rootMidIndex;\n    } else if (rootMidIndex > rootBranchIndex) {\n      /*\n         root mid \n            ↓\n      12345672342343  \n      ┌┴┐ \n      ...\n       ↑\n      root branch \n      */\n      let padding = \" \".repeat(rootMidIndex - rootBranchIndex);\n      linesChildren = linesChildren.map((line) => padding + line);\n      rootBranchIndex = padding + rootBranchIndex;\n    }\n    let lines = [lineRoot, ...linesChildren];\n\n    return [lines, rootMidIndex];\n  }\n  let [lines, rootIndex] = toStringArray(root);\n  return lines.join(\"\\n\");\n}\n\nfunction toObject(root) {\n  if (!root) {\n    return null;\n  }\n  return {\n    key: root.key,\n    value: root.value,\n    left: toObject(root.left),\n    right: toObject(root.right),\n  };\n}\n\nfunction fromObject(obj) {\n  if (!obj) {\n    return null;\n  }\n  let root = new Node(obj.key, obj.value);\n  if (obj.left && obj.left.key > root.key) {\n    throw new Error(\"Invalid left child\");\n  }\n  root.left = fromObject(obj.left);\n  if (obj.right && obj.right.key < root.key) {\n    throw new Error(\"Invalid right child\");\n  }\n  root.right = fromObject(obj.right);\n  return root;\n}\n\n/**\n * Take an array of values and convert it to a binary tree\n */\nfunction fromArray(array) {\n  if (!array.length) {\n    return null;\n  }\n  let root = new Node(array[0]);\n  let queue = [root];\n  let i = 0;\n  while (queue.length) {\n    let node = queue.shift();\n    let [leftIndex, rightIndex] = getChildIndices(i);\n    if (leftIndex < array.length) {\n      node.left = new Node(array[leftIndex]);\n      queue.push(node.left);\n    }\n    if (rightIndex < array.length) {\n      node.right = new Node(array[rightIndex]);\n      queue.push(node.right);\n    }\n    i++;\n  }\n  return root;\n}\n\nfunction getChildIndices(index) {\n  return [index * 2 + 1, index * 2 + 2];\n}\n\n\n//# sourceURL=webpack://ads/./src/binaryTree.js?");

/***/ }),

/***/ "./src/hashTable.js":
/*!**************************!*\
  !*** ./src/hashTable.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HashTable\": () => (/* binding */ HashTable)\n/* harmony export */ });\n// https://github.com/donnemartin/system-design-primer/blob/master/solutions/object_oriented_design/hash_table/hash_map.ipynb\n\nclass Item {\n  constructor(key, value) {\n    this.key = key;\n    this.value = value;\n  }\n}\n\nclass HashTable {\n  constructor(size = 10) {\n    this.size = size;\n    this.buckets = new Array(size);\n    this.prime = 31;\n  }\n\n  /**\n   * Generates the bucket index for a given key\n   * @param {string} key\n   */\n  hash(key) {\n    let keyAsInteger;\n    if (typeof key === \"number\") {\n      keyAsInteger = key;\n    } else {\n      let keyCharCodes = key\n        .toString()\n        .split(\"\")\n        .map((char) => char.charCodeAt(0)); // abc => [97, 98, 99]\n      keyAsInteger = keyCharCodes.reduce((acc, curr) => acc + curr, 0); // [97, 98, 99] => 609\n    }\n    return (keyAsInteger * this.prime) % this.size; // 609 % 10 = 9\n  }\n\n  set(key, value) {\n    const index = this.hash(key);\n    if (!this.buckets[index]) {\n      this.buckets[index] = []; // this should be a linked list\n    }\n    let items = this.buckets[index];\n    for (let i = 0; i < items.length; i++) {\n      if (items[i].key === key) {\n        items[i].value = value;\n        return;\n      }\n    }\n    items.push(new Item(key, value));\n  }\n\n  get(key) {\n    const index = this.hash(key);\n    if (!this.buckets[index]) {\n      return null;\n    }\n    let items = this.buckets[index];\n    for (let i = 0; i < items.length; i++) {\n      if (items[i].key === key) {\n        return items[i].value;\n      }\n    }\n    return null;\n  }\n\n  delete(key) {\n    const index = this.hash(key);\n    if (!this.buckets[index]) {\n      return false;\n    }\n    const items = this.buckets[index];\n    for (let i = 0; i < items.length; i++) {\n      if (items[i].key === key) {\n        items.splice(i, 1);\n        return true;\n      }\n    }\n    return false;\n  }\n\n  entries() {\n    let entries = [];\n    for (let i = 0; i < this.buckets.length; i++) {\n      if (!this.buckets[i]) continue;\n      for (let j = 0; j < this.buckets[i].length; j++) {\n        entries.push([this.buckets[i][j].key, this.buckets[i][j].value]);\n      }\n    }\n    return entries;\n  }\n}\n\n\n//# sourceURL=webpack://ads/./src/hashTable.js?");

/***/ }),

/***/ "./src/heap.js":
/*!*********************!*\
  !*** ./src/heap.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MaxHeap\": () => (/* binding */ MaxHeap),\n/* harmony export */   \"MinHeap\": () => (/* binding */ MinHeap),\n/* harmony export */   \"heapify\": () => (/* binding */ heapify)\n/* harmony export */ });\nclass Heap {\n  constructor(values, compare = (a, b) => a > b) {\n    this.values = heapify(values, compare);\n    this.compare = compare;\n  }\n\n  pop() {\n    if (!this.values) return;\n    const top = this.values[0];\n    this.values[0] = this.values.pop();\n    this.values = heapifyDown(this.values, 0, this.compare);\n    return top;\n  }\n\n  push(value) {\n    this.values.push(value);\n    heapifyUp(this.values, this.values.length - 1, this.compare);\n  }\n}\n\nclass MinHeap extends Heap {\n  constructor(...values) {\n    super(values, (a, b) => a < b);\n  }\n}\n\nclass MaxHeap extends Heap {\n  constructor(...values) {\n    super(values, (a, b) => a > b);\n  }\n}\n\nfunction heapify(values, compare = (a, b) => a > b) {\n  if (values.length === 0) return values;\n  const lastParent = getParentIndex(values.length - 1);\n  for (let i = lastParent; i >= 0; i--) {\n    values = heapifyDown(values, i, compare);\n  }\n  return values;\n}\n\nfunction heapifyUp(values, child, compare = (a, b) => a > b) {\n  if (child < 0 || child > values.length - 1) {\n    throw new Error(`invalid index ${child} for array of length ${values.length}`);\n  }\n  const parent = getParentIndex(child);\n  if (parent !== null && compare(values[child], values[parent])) {\n    swap(values, parent, child);\n    values = heapifyUp(values, parent, compare);\n  }\n  return values;\n}\n\nfunction heapifyDown(values, parent, compare = (a, b) => a > b) {\n  if (parent < 0 || parent > values.length - 1) {\n    throw new Error(`invalid index ${parent} for array of length ${values.length}`);\n  }\n  const [left, right] = getChildIndices(parent);\n\n  let mostest = parent;\n  if (left < values.length && compare(values[left], values[mostest])) {\n    mostest = left;\n  }\n  if (right < values.length && compare(values[right], values[mostest])) {\n    mostest = right;\n  }\n\n  if (mostest !== parent) {\n    swap(values, parent, mostest);\n    values = heapifyDown(values, mostest, compare);\n  }\n  return values;\n}\n\nfunction getParentIndex(index) {\n  if (index === 0) return null;\n  const parent = Math.floor((index - 1) / 2);\n  return parent;\n}\n\nfunction getChildIndices(index) {\n  let left = 2 * index + 1;\n  let right = left + 1;\n  return [left, right];\n}\n\nfunction swap(values, a, b) {\n  [values[a], values[b]] = [values[b], values[a]];\n}\n\n\n//# sourceURL=webpack://ads/./src/heap.js?");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkedList\": () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass Node {\n  constructor(item, next = null) {\n    this.item = item;\n    this.next = next;\n  }\n}\n\nclass LinkedList {\n  constructor(...items) {\n    this.head = items.length > 0 ? new Node(items[0]) : null;\n    let prevNode = this.head;\n    for (const item of items.slice(1)) {\n      const node = new Node(item);\n      prevNode.next = node;\n      prevNode = node;\n    }\n    this.tail = prevNode;\n  }\n\n  push(item) {\n    const node = new Node(item);\n    node.next = this.head;\n    this.head = node;\n    if (!this.tail) {\n      this.tail = node;\n    }\n  }\n\n  append(item) {\n    if (!this.tail) {\n      this.push(item);\n    } else {\n      const node = new Node(item);\n      this.tail.next = node;\n      this.tail = node;\n    }\n  }\n\n  pop() {\n    if (!this.head) {\n      return;\n    }\n    const node = this.head;\n    this.head = this.head.next;\n    if (!this.head) {\n      this.tail = null;\n    }\n    return node.item;\n  }\n\n  find(fn) {\n    fn = this.fnify(fn);\n    let node = this.head;\n    while (node) {\n      if (fn(node.item)) {\n        return node.item;\n      }\n      node = node.next;\n    }\n  }\n\n  insert(item, fn) {\n    fn = this.fnify(fn);\n    let prevNode = null;\n    let node = this.head;\n    while (node) {\n      if (fn(node.item)) {\n        const newNode = new Node(item);\n        newNode.next = node;\n        if (prevNode) {\n          newNode.next = node;\n          prevNode.next = newNode;\n        } else {\n          newNode.next = this.head;\n          this.head = newNode;\n        }\n        return true;\n      }\n      prevNode = node;\n      node = node.next;\n    }\n    return false;\n  }\n\n  has(fn) {\n    return this.find(fn) !== undefined;\n  }\n\n  delete(fn) {\n    fn = this.fnify(fn);\n    let prevNode = null;\n    let node = this.head;\n    while (node) {\n      if (fn(node.item)) {\n        if (!prevNode) {\n          this.head = this.head.next;\n        } else if (!node.next) {\n          this.tail = prevNode;\n          this.tail.next = null;\n        } else {\n          prevNode.next = node.next;\n        }\n        return true;\n      }\n      prevNode = node;\n      node = node.next;\n    }\n    return false;\n  }\n\n  values() {\n    const result = [];\n    let node = this.head;\n    while (node) {\n      result.push(node.item);\n      node = node.next;\n    }\n    return result;\n  }\n\n  fnify(value) {\n    if (typeof value === \"function\") {\n      return value;\n    }\n    return (item) => item === value;\n  }\n}\n\n\n//# sourceURL=webpack://ads/./src/linkedList.js?");

/***/ }),

/***/ "./src/linkedListDoubly.js":
/*!*********************************!*\
  !*** ./src/linkedListDoubly.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkedListDoubly\": () => (/* binding */ LinkedListDoubly)\n/* harmony export */ });\nclass Node {\n  constructor(value, next = null, prev = null) {\n    this.value = value;\n    this.next = next;\n    this.prev = prev;\n  }\n}\n\nclass LinkedListDoubly {\n  constructor(...values) {\n    this.head = null;\n    this.tail = null;\n    values.forEach((value) => this.append(value));\n  }\n\n  /**Insert value at head */\n  push = (value) => {\n    const node = new Node(value);\n    if (!this.head) {\n      this.head = node;\n      this.tail = node;\n    } else {\n      node.next = this.head;\n      this.head.prev = node;\n      this.head = node;\n    }\n  };\n\n  /**Insert value at tail */\n  append = (value) => {\n    const node = new Node(value);\n    if (!this.tail) {\n      this.head = this.tail = node;\n    } else {\n      this.tail.next = node;\n      node.prev = this.tail;\n      this.tail = node;\n    }\n  };\n\n  /**Remove head and return it's value */\n  shift = () => {\n    if (this.head === null) {\n      return null;\n    }\n    const value = this.head.value;\n    this.deleteNode(this.head);\n    return value;\n  };\n\n  /**\n   * Get node by index\n   * @param {number} index positive integer\n   * @returns\n   */\n  getNodeByIndex = (index) => {\n    let i = 0;\n    let node = this.head;\n    while (node) {\n      if (i === index) {\n        return node;\n      }\n      i++;\n      node = node.next;\n    }\n    return null;\n  };\n\n  /**Insert value after index */\n  insertAfter = (value, index) => {\n    const nodeAtIndex = this.getNodeByIndex(index);\n    if (!nodeAtIndex) {\n      // insert after tail\n      this.append(value);\n    } else {\n      const node = new Node(value);\n      // insert anywhere else\n      const nodeAfterIndex = nodeAtIndex.next;\n\n      nodeAtIndex.next = node;\n      node.prev = nodeAtIndex;\n\n      node.next = nodeAfterIndex;\n      nodeAfterIndex.prev = node;\n    }\n  };\n\n  /**Insert value before index */\n  insertBefore = (value, index) => {\n    const nodeAtIndex = this.getNodeByIndex(index);\n    if (!nodeAtIndex) {\n      this.append(value);\n    } else if (index === 0) {\n      this.push(value);\n    } else {\n      const node = new Node(value);\n      // insert in middle\n      const nodeBeforeIndex = nodeAtIndex.prev;\n\n      nodeBeforeIndex.next = node;\n      node.prev = nodeBeforeIndex;\n\n      node.next = nodeAtIndex;\n      nodeAtIndex.prev = node;\n    }\n  };\n\n  /**Get node by value */\n  getNodeByValue = (value) => {\n    let node = this.head;\n    while (node) {\n      if (node.value === value) {\n        return node;\n      }\n      node = node.next;\n    }\n    return null;\n  };\n\n  /**Get value by index */\n  get = (index) => {\n    const node = this.getNodeByIndex(index);\n    return node ? node.value : null;\n  };\n\n  /**\n   *\n   * @param {*} node node must be in the linked list\n   * @returns\n   */\n  deleteNode = (node) => {\n    if (!node) return false;\n    if (!node.next && !node.prev) {\n      this.head = null;\n      this.tail = null;\n    } else if (!node.prev) {\n      this.head = this.head.next;\n      this.head.prev = null;\n      return;\n    } else if (!node.next) {\n      this.tail = this.tail.prev;\n      this.tail.next = null;\n      return;\n    } else {\n      node.prev.next = node.next;\n      node.next.prev = node.prev;\n    }\n  };\n\n  delete = (value) => {\n    const node = this.getNodeByValue(value);\n    return this.deleteNode(node);\n  };\n\n  values = () => {\n    let result = [];\n    let node = this.head;\n    while (node) {\n      result.push(node.value);\n      node = node.next;\n    }\n    return result;\n  };\n\n  valuesReverse = () => {\n    let result = [];\n    let node = this.tail;\n    while (node) {\n      result.push(node.value);\n      node = node.prev;\n    }\n    return result;\n  };\n}\n\n\n//# sourceURL=webpack://ads/./src/linkedListDoubly.js?");

/***/ }),

/***/ "./src/queue.js":
/*!**********************!*\
  !*** ./src/queue.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Queue\": () => (/* binding */ Queue)\n/* harmony export */ });\n/* harmony import */ var _linkedListDoubly_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedListDoubly.js */ \"./src/linkedListDoubly.js\");\n\n\nclass Queue {\n  constructor(...items) {\n    this.linkedList = new _linkedListDoubly_js__WEBPACK_IMPORTED_MODULE_0__.LinkedListDoubly(...items);\n  }\n\n  enqueue(item) {\n    this.linkedList.append(item);\n  }\n\n  dequeue() {\n    return this.linkedList.shift();\n  }\n\n  peak() {\n    return this.linkedList.get(0);\n  }\n\n  values() {\n    return this.linkedList.values();\n  }\n}\n\n\n//# sourceURL=webpack://ads/./src/queue.js?");

/***/ }),

/***/ "./src/stack.js":
/*!**********************!*\
  !*** ./src/stack.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Stack\": () => (/* binding */ Stack)\n/* harmony export */ });\nclass Stack {\n  constructor(...items) {\n    this.items = items;\n  }\n\n  push(item) {\n    return this.items.push(item);\n  }\n\n  pop() {\n    return this.items.pop();\n  }\n\n  peek() {\n    return this.items[this.items.length - 1];\n  }\n\n  values() {\n    return this.items;\n  }\n}\n\n\n//# sourceURL=webpack://ads/./src/stack.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"randomInt\": () => (/* binding */ randomInt),\n/* harmony export */   \"randomIntArray\": () => (/* binding */ randomIntArray),\n/* harmony export */   \"timeit\": () => (/* binding */ timeit)\n/* harmony export */ });\nfunction timeit(f, n) {\n  const start = process.hrtime.bigint();\n  for (var i = 0; i < n; i++) {\n    f();\n  }\n  const end = process.hrtime.bigint();\n  return parseInt(end - start);\n}\n\nfunction randomInt(min = 0, max = 100) {\n  const range = max - min;\n  return Math.floor(Math.random() * range) + min;\n}\n\nfunction randomIntArray(size = 10, min = 0, max = 100) {\n  const arr = [];\n  for (let i = 0; i < size; i++) {\n    arr.push(randomInt(min, max));\n  }\n  return arr;\n}\n\n\n//# sourceURL=webpack://ads/./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ads.js");
/******/ 	ads = __webpack_exports__;
/******/ 	
/******/ })()
;