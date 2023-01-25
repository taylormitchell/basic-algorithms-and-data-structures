export class Node {
  constructor(value, children = [], key = null) {
    this.value = value;
    this.key = key || value;
    this.children = children;
  }
}

export function bfs(node, key) {
  if (!node) {
    return null;
  }
  const q = [node];
  while (q.length > 0) {
    const n = q.shift();
    if (n.key === key) {
      return n;
    }
    q.push(...n.children);
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
