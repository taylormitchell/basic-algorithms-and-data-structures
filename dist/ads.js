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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkedList\": () => (/* reexport safe */ _linkedList_js__WEBPACK_IMPORTED_MODULE_0__.LinkedList)\n/* harmony export */ });\n/* harmony import */ var _linkedList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linkedList.js */ \"./src/linkedList.js\");\n\n\n\n\n\n//# sourceURL=webpack://ads/./src/ads.js?");

/***/ }),

/***/ "./src/linkedList.js":
/*!***************************!*\
  !*** ./src/linkedList.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LinkedList\": () => (/* binding */ LinkedList)\n/* harmony export */ });\nclass Node {\n  constructor(item, next = null) {\n    this.item = item;\n    this.next = next;\n  }\n}\n\nclass LinkedList {\n  constructor(...items) {\n    this.head = items.length > 0 ? new Node(items[0]) : null;\n    let prevNode = this.head;\n    for (const item of items.slice(1)) {\n      const node = new Node(item);\n      prevNode.next = node;\n      prevNode = node;\n    }\n    this.tail = prevNode;\n  }\n\n  push(item) {\n    const node = new Node(item);\n    node.next = this.head;\n    this.head = node;\n    if (!this.tail) {\n      this.tail = node;\n    }\n  }\n\n  append(item) {\n    if (!this.tail) {\n      this.push(item);\n    } else {\n      const node = new Node(item);\n      this.tail.next = node;\n      this.tail = node;\n    }\n  }\n\n  pop() {\n    if (!this.head) {\n      return;\n    }\n    const node = this.head;\n    this.head = this.head.next;\n    if (!this.head) {\n      this.tail = null;\n    }\n    return node.item;\n  }\n\n  find(fn) {\n    fn = this.fnify(fn);\n    let node = this.head;\n    while (node) {\n      if (fn(node.item)) {\n        return node.item;\n      }\n      node = node.next;\n    }\n  }\n\n  insert(item, fn) {\n    fn = this.fnify(fn);\n    let prevNode = null;\n    let node = this.head;\n    while (node) {\n      if (fn(node.item)) {\n        const newNode = new Node(item);\n        newNode.next = node;\n        if (prevNode) {\n          newNode.next = node;\n          prevNode.next = newNode;\n        } else {\n          newNode.next = this.head;\n          this.head = newNode;\n        }\n        return true;\n      }\n      prevNode = node;\n      node = node.next;\n    }\n    return false;\n  }\n\n  has(fn) {\n    return this.find(fn) !== undefined;\n  }\n\n  delete(fn) {\n    fn = this.fnify(fn);\n    let prevNode = null;\n    let node = this.head;\n    while (node) {\n      if (fn(node.item)) {\n        if (!prevNode) {\n          this.head = this.head.next;\n        } else if (!node.next) {\n          this.tail = prevNode;\n          this.tail.next = null;\n        } else {\n          prevNode.next = node.next;\n        }\n        return true;\n      }\n      prevNode = node;\n      node = node.next;\n    }\n    return false;\n  }\n\n  values() {\n    const result = [];\n    let node = this.head;\n    while (node) {\n      result.push(node.item);\n      node = node.next;\n    }\n    return result;\n  }\n\n  fnify(value) {\n    if (typeof value === \"function\") {\n      return value;\n    }\n    return (item) => item === value;\n  }\n}\n\n\n//# sourceURL=webpack://ads/./src/linkedList.js?");

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