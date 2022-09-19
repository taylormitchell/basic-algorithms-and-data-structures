class Stack {
  constructor(...items) {
    this.items = items;
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  values() {
    return this.items;
  }
}

module.exports = {
  Stack,
};
