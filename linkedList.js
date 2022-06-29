class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(...nodes) {
        if (!nodes) {
            this.head = null;
            return
        }
        this.head = nodes[0];
        let nodePrev = this.head;
        for(let node of nodes.slice(1)) {
            nodePrev.next = node;
            nodePrev = node;
        }
    }

    push = (node) => {
        node.next = this.head;
        this.head = node;
    }

    delete = (node) => {
        // delete head
        if (node === this.head) {
            this.head = this.head.next;
            return
        }

        // delete from middle/end
        let nodePrev = null
        let nodeCurr = this.head;
        while (nodeCurr) {
            if (node === nodeCurr) {
                nodePrev.next = nodeCurr.next;
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