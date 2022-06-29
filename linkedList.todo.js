class Node {
    constructor(value, next) {
    }
}

class LinkedList {
    constructor(...nodes) {
    }

    push = (node) => {
    }

    delete = (node) => {
    }

    insert = (node, nodeInsertAt) => {
    }

    values = () => {
        let result = [];
        let node = this.head;
        while (node) {
            result.push(node.value);
            node = node.next;
        }
        return result;
    }
}

module.exports = { LinkedList, Node };