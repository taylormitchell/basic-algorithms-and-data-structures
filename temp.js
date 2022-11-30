class Node {
  constructor(value, key = null, left = null, right = null) {
    this.value = value;
    this.key = key || value;
    this.left = left;
    this.right = right;
  }
}
/**
 * Convery a tree to a string representation
 *
 * Example output:
 *
 * ```
 *        20134534534
 *   ┌─────────┴──┐
 *   46           83
 * ┌─┴─┐        ┌─┴─┐
 * 45  50       71  86
 *    ┌┴─┐
 *       53
 *      ┌┴─┐
 *         58
 *        ┌┴─┐
 *           63
 * ```
 *
 * @reference https://www.w3.org/TR/xml-entity-names/025.html
 */
function toString(root) {
  function toStringArray(root) {
    if (!root) {
      return [[" "], 0];
    }

    if (!root.left && !root.right) {
      let line = root.key.toString();
      return [[line], Math.floor((line.length - 1) / 2)];
    }

    // Create strings of subtree and root
    let [leftLines, leftRootIndex] = toStringArray(root.left);
    let leftWidth = leftLines[0].length;
    let [rightLines, rightRootIndex] = toStringArray(root.right);
    let rightWidth = rightLines[0].length;
    let rootString = root.key.toString();

    // Create root line
    let lineRoot = rootString;

    // Create children lines
    let linesChildren = [];
    linesChildren.push(
      " ".repeat(leftRootIndex) +
        "┌" +
        "─".repeat(leftWidth - leftRootIndex - 1) +
        "┴" +
        "─".repeat(rightRootIndex) +
        "┐" +
        " ".repeat(rightWidth - rightRootIndex - 1)
    );
    let i = 0;
    while (i < leftLines.length || i < rightLines.length) {
      linesChildren.push(
        (leftLines[i] || " ".repeat(leftWidth)) +
          " " +
          (rightLines[i] || " ".repeat(rightWidth))
      );
      i++;
    }

    // Add padding to align root and it's children
    let rootMidIndex = Math.floor(rootString.length - 1 / 2);
    let rootBranchIndex = leftWidth;
    if (rootBranchIndex > rootMidIndex) {
      /*
root mid 
↓   root branch
1      ↓         
  ┌────┴───┐ 
 ...      ...
*/
      let padding = " ".repeat(rootBranchIndex - rootMidIndex);
      lineRoot = padding + lineRoot;
      rootMidIndex = padding + rootMidIndex;
    } else if (rootMidIndex > rootBranchIndex) {
      /*
   root mid 
      ↓
12345672342343  
┌┴┐ 
...
 ↑
root branch 
*/
      let padding = " ".repeat(rootMidIndex - rootBranchIndex);
      linesChildren = linesChildren.map((line) => padding + line);
      rootBranchIndex = padding + rootBranchIndex;
    }
    let lines = [lineRoot, ...linesChildren];

    return [lines, rootMidIndex];
  }
  let [lines, rootIndex] = toStringArray(root);
  return lines.join("\n");
}

function toObject(root) {
  if (!root) {
    return null;
  }
  return {
    key: root.key,
    value: root.value,
    left: toObject(root.left),
    right: toObject(root.right),
  };
}

function fromArray(array) {
  if (!array.length) {
    return null;
  }
  let root = new Node(array[0]);
  let queue = [root];
  let i = 0;
  while (queue.length) {
    let node = queue.shift();
    let [leftIndex, rightIndex] = getChildIndices(i);
    if (leftIndex < array.length) {
      node.left = new Node(array[leftIndex]);
      queue.push(node.left);
    }
    if (rightIndex < array.length) {
      node.right = new Node(array[rightIndex]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

function randomInt(min = 0, max = 100) {
  const range = max - min;
  return Math.floor(Math.random() * range) + min;
}

function randomIntArray(size = 10, min = 0, max = 100) {
  const arr = [];
  for (let i = 0; i < size; i++) {
    arr.push(randomInt(min, max));
  }
  return arr;
}

function heapify(values, compare = (a, b) => a > b) {
  if (values.length === 0) return values;
  const lastParent = getParentIndex(values.length - 1);
  for (let i = lastParent; i >= 0; i--) {
    values = heapifyDown(values, i, compare);
  }
  return values;
}

function heapifyUp(values, child, compare = (a, b) => a > b) {
  if (child < 0 || child > values.length - 1) {
    throw new Error(
      `invalid index ${child} for array of length ${values.length}`
    );
  }
  const parent = getParentIndex(child);
  if (parent !== null && compare(values[child], values[parent])) {
    swap(values, parent, child);
    values = heapifyUp(values, parent, compare);
  }
  return values;
}

function heapifyDown(values, parent, compare = (a, b) => a > b) {
  if (parent < 0 || parent > values.length - 1) {
    throw new Error(
      `invalid index ${parent} for array of length ${values.length}`
    );
  }
  const [left, right] = getChildIndices(parent);

  let mostest = parent;
  if (left < values.length && compare(values[left], values[mostest])) {
    mostest = left;
  }
  if (right < values.length && compare(values[right], values[mostest])) {
    mostest = right;
  }

  if (mostest !== parent) {
    swap(values, parent, mostest);
    values = heapifyDown(values, mostest, compare);
  }
  return values;
}

function getParentIndex(index) {
  if (index === 0) return null;
  const parent = Math.floor((index - 1) / 2);
  return parent;
}

function getChildIndices(index) {
  let left = 2 * index + 1;
  let right = left + 1;
  return [left, right];
}

function swap(values, a, b) {
  [values[a], values[b]] = [values[b], values[a]];
}

function front() {
  let { heapType, arr, arrHeapified } = window;
  if (!heapType || !arr || !arrHeapified) {
    arr = randomIntArray(10);
    // randomly choose min or max heap
    if (Math.random() < 0.5) {
      arrHeapified = heapify([...arr], (a, b) => a < b);
      heapType = "min";
    } else {
      arrHeapified = heapify([...arr], (a, b) => a > b);
      heapType = "max";
    }
    window.arr = arr;
    window.arrHeapified = arrHeapified;
    window.heapType = heapType;
  }
  // display the array
  const root = fromArray(arr);
  const front = document.getElementById("front");
  front.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML =
    "Manually " + heapType + " heap sort the following binary tree:";
  const pre = document.createElement("pre");
  pre.innerHTML = toString(root);
  front.appendChild(div);
  front.appendChild(pre);
}

front();

function back() {
  const root = fromArray(window.arrHeapified);
  const back = document.getElementById("back");
  back.innerHTML = "";
  back.style.display = "block";
  const pre = document.createElement("pre");
  pre.innerHTML = toString(root);
  back.appendChild(pre);
}
