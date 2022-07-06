class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(...nodes) {
        this.head = nodes[0] || null;
        let nodePrev = this.head;
        for (let node of nodes.slice(1)) {
            nodePrev.next = node;
            nodePrev = node;
        }
    }

    push = (node) => {
        node.next = this.head;
        this.head = node;
    }

    delete = (node) => {
        if (!this.head) {
            return
        }
        // handle head
        if (node === this.head) {
            this.head = this.head.next;
            return
        }
        // handle rest
        let nodePrev = this.head;
        let nodeCurr = this.head.next;
        while (nodeCurr) {
            if (node === nodeCurr) {
                nodePrev.next = node.next;
                return
            }
            nodePrev = nodeCurr;
            nodeCurr = nodeCurr.next;
        }
    }

    insert = (node, nodeInsertAt) => {
        // insert at head
        if (nodeInsertAt === this.head) {
            node.next = this.head;
            this.head = node;
            return
        }

        // insert in middle/end
        let nodePrev = null
        let nodeCurr = this.head;
        while (nodeCurr) {
            if (nodeInsertAt === nodeCurr) {
                nodePrev.next = node;
                node.next = nodeCurr;
                return
            }
            nodePrev = nodeCurr;
            nodeCurr = nodeCurr.next;
        }
    }

    search = (value) => {
        let node = this.head;
        while (node) {
            if (node.value === value) {
                return node;
            }
            node = node.next;
        }
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