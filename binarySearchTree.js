// BST
class Node {
  constructor(key, value = null, left = null, right = null) {
    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function remove(key, root) {
  if (!root) {
    return null;
  }

  // find node with key
  if (key < root.key) {
    root.left = remove(key, root.left);
  } else if (key > root.key) {
    root.right = remove(key, root.right);
  } else {
    // At the node with the key. Removal approach depends on how
    // many children it has:
    if (root.left === null && root.right === null) {
      // 0 children
      return null;
    } else if (root.left === null || root.right === null) {
      // 1 child
      return root.left || root.right;
    } else {
      // 2 children

      // find successor and it's parent
      let parent = root;
      let successor = root.right;
      while (successor.left) {
        parent = successor;
        successor = successor.left;
      }

      // remove successor from tree, add root children to it, and return
      if (parent === root) {
        /* Successor is directly to the right.
            root <- parent
            /   \
         left   node <- successor
               /     \
              nil    right
        */
        successor.left = root.left;
        return successor;
      } else {
        /* Successor is right and then down to far left side.
               root
              /   \
                  node
                 /     \
               ...    right
               /
            node <- parent
             /
          node <- successor
          /   \
        nil   right
        */
        parent.left = successor.right;
        successor.left = root.left;
        successor.right = root.right;
      }
    }
  }
  return root;
}

function insert(node, root) {
  if (!root) {
    return node;
  }
  if (node.key <= root.key) {
    root.left = insert(node, root.left);
  } else {
    root.right = insert(node, root.right);
  }
  return root;
}

function search(key, root) {
  if (!root) {
    return;
  } else if (key === root.key) {
    return root;
  } else if (key < root.key) {
    return search(key, root.left);
  } else {
    return search(key, root.right);
  }
}

function entries(node) {
  let result = [];
  inOrderTraversal(node, (n) => result.push([n.key, n.value]));
  return result;
}

function keys(node) {
  return entries(node).map((entry) => entry[0]);
}

// Helpers

function simpleTree() {
  /*
            4
          3   5
        1  2    6
    */
  let root = new Node(4);
  root = insert(new Node(3), root);
  root = insert(new Node(5), root);
  root = insert(new Node(6), root);
  root = insert(new Node(1), root);
  root = insert(new Node(2), root);
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

module.exports = {
  Node,
  insert,
  remove,
  search,
  keys,
  randomTree,
  simpleTree,
  toString,
};
