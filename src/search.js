import { LinkedListDoubly } from "../src/linkedListDoubly";

export class Node {
  constructor(value, children = [], key = null) {
    this.value = value;
    this.key = key || value;
    this.children = children;
  }
}

export function bfs(root, key) {
  if (!root) {
    return null;
  }
  const q = new LinkedListDoubly(root);
  while (!q.isEmpty()) {
    const node = q.shift();
    if (node.key === key) {
      return node;
    }
    q.push(...node.children);
  }
  return null;
}

export function dfs(node, key) {
  if (!node || node.key === key) {
    return node;
  }
  let res;
  for (const child of node.children) {
    if ((res = dfs(child, key))) {
      return res;
    }
  }
  return null;
}
