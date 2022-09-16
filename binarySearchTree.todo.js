// BST
class Node {
  constructor(value, key = null, left = null, right = null) {
    this.value = value;
    this.key = key || value;
    this.left = left;
    this.right = right;
  }
}

function insert(root, node) {
  if (!root) {
    return node;
  } else if (node.key <= root.key) {
    root.left = insert(root.left, node);
    return root;
  } else {
    root.right = insert(root.right, node);
    return root;
  }
}

function search(root, key) {
  if (!root) {
    return null;
  } else if (key === root.key) {
    return root;
  } else if (key < root.key) {
    return search(root.left, key);
  } else {
    return search(root.right, key);
  }
}

function remove(root, key) {
  if (!root) {
    return null;
  }
  // Recurse down until we find the node
  else if (key < root.key) {
    root.left = remove(root.left, key);
    return root;
  } else if (key > root.key) {
    root.right = remove(root.right, key);
    return root;
  }
  // Found the node
  else {
    // find next node to replace the removed node with in the tree
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else if (root.right.left === null) {
      // the next node is the top node in the right subtree
      let nextNode = root.right;
      nextNode.left = root.left;
      return nextNode;
    } else {
      // the next node is the left most node in the right subtree
      let parentNode = root.right;
      let nextNode = root.left;
      while (nextNode.left) {
        parentNode = nextNode;
        nextNode = nextNode.left;
      }

      parentNode.left = nextNode.right;
      nextNode.left = root.left;
      nextNode.right = root.right;
      return nextNode;
    }
  }
}

// Helpers

function simpleTree() {
  /*
            4
          2   5
        1  3    6
    */
  let root = null;
  root = insert(root, new Node(4));
  root = insert(root, new Node(2));
  root = insert(root, new Node(1));
  root = insert(root, new Node(3));
  root = insert(root, new Node(5));
  root = insert(root, new Node(6));
  return root;
}

function randomTree(size = 10, max = 100) {
  function randomInt() {
    return Math.floor(Math.random() * max);
  }
  if (size <= 0) {
    return null;
  }
  let root = new Node(randomInt());
  for (let i = 1; i < size; i++) {
    insert(new Node(randomInt()), root);
  }
  return root;
}

function toString(root) {
  /*
         20134534534                     
    ┌─────────┴──┐
    46           83  
  ┌─┴─┐        ┌─┴─┐
  45  50       71  86
     ┌┴─┐
        53            
       ┌┴─┐
          58          
         ┌┴─┐
            63    
  
  
      https://www.w3.org/TR/xml-entity-names/025.html
  */
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

function fromObject(obj) {
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

module.exports = {
  Node,
  insert,
  remove,
  search,
  randomTree,
  simpleTree,
  toString,
  toObject,
  fromObject,
};
