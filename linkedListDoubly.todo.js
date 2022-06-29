class Node {
    constructor(value, prev=null, next=null) {
    }
}

class LinkedListDoubly {
    constructor(...nodes) {
    }

    push = (node) => {
    }

    append = (node) => {
    }

    delete = (node) => {
    }

    insertAfter = (node, nodeInsertAfter) => {
    }

    insertBefore = (node, nodeInsertBefore) => {
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

    valuesReverse = () => {
        let result = [];
        let node = this.tail;
        while (node) {
            result.push(node.value);
            node = node.prev;
        }
        return result;
    }
}

module.exports = { LinkedListDoubly, Node };