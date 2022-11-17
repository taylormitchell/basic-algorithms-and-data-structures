export class Node {
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
export function toString(root) {
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
        (leftLines[i] || " ".repeat(leftWidth)) + " " + (rightLines[i] || " ".repeat(rightWidth))
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

export function toObject(root) {
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

export function fromObject(obj) {
  if (!obj) {
    return null;
  }
  let root = new Node(obj.key, obj.value);
  if (obj.left && obj.left.key > root.key) {
    throw new Error("Invalid left child");
  }
  root.left = fromObject(obj.left);
  if (obj.right && obj.right.key < root.key) {
    throw new Error("Invalid right child");
  }
  root.right = fromObject(obj.right);
  return root;
}
