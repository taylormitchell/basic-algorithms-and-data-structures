class Node {
    constructor() {
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

    search = (value) => {
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