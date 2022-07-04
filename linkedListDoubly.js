class Node {
    constructor(value, prev=null, next=null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedListDoubly {
    constructor(...nodes) {
        this.head = nodes[0] || null;
        let prevNode = this.head;
        for (let node of nodes.slice(1)) {
            prevNode.next = node;
            node.prev = prevNode;
            prevNode = node;
        }
        this.tail = prevNode || null; 
    }

    push = (node) => {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
    }

    append = (node) => {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    delete = (node) => {
        if (node === this.head && node === this.tail) {
            this.head = null;
            this.tail = null
        } else if (node === this.head) {
            this.head = this.head.next;
            this.head.prev = null;
        } else if (node === this.tail) {
            this.tail = this.tail.prev;
            this.tail.next = null;
        } else {
            if (node.prev !== null) {
                node.prev.next = node.next;
            }
            if (node.next !== null) {
                node.next.prev = node.prev;
            }
        }
    }

    insertAfter = (node, nodeInsertAfter) => {
        if (nodeInsertAfter === this.tail) {
            this.append(node)
            return
        }
        let nodePrev = nodeInsertAfter;
        let nodeNext = nodeInsertAfter.next;

        nodePrev.next = node;
        node.prev = nodePrev;

        node.next = nodeNext;
        nodeNext.prev = node;

    }

    insertBefore = (node, nodeInsertBefore) => {
        if (nodeInsertBefore === this.head) {
            this.push(node)
            return
        }

        let nodePrev = nodeInsertBefore.prev;
        let nodeNext = nodeInsertBefore;

        nodePrev.next = node;
        node.prev = nodePrev;

        node.next = nodeNext;
        nodeNext.prev = node;
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