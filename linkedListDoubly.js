class Node {
    constructor(value, prev=null, next=null) {
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LinkedListDoubly {
    constructor(...nodes) {
        if (nodes.length === 0) {
            this.head = null;
            this.tail = null;
        } else if (nodes.length === 1) {
            this.head = nodes[0]
            this.tail = nodes[0]
        } else {
            this.head = nodes[0];
            let nodePrev = this.head;
            let nodeCurr;
            for(nodeCurr of nodes.slice(1)) {
                nodePrev.next = nodeCurr;
                nodeCurr.prev = nodePrev;
                nodePrev = nodeCurr;
            }
            this.tail = nodeCurr;
        }
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
        // insert after tail
        if (nodeInsertAfter === this.tail) {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            return
        }

        // insert in middle
        // before: nodeInsertAfter <-> nodeNext
        // after:  nodeInsertAfter <-> node <-> nodeNext

        let nodeNext = nodeInsertAfter.next; 
        nodeNext.prev = node;
        node.next = nodeNext;

        nodeInsertAfter.next = node;
        node.prev = nodeInsertAfter;

    }

    insertBefore = (node, nodeInsertBefore) => {
        // insert at head
        if (nodeInsertBefore === this.head) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            return
        }

        // insert in middle/end
        // before: nodePrev <-> nodeInsertBefore
        // after:  nodePrev <-> node <-> nodeInsertBefore
        
        let nodePrev = nodeInsertBefore.prev; 
        nodePrev.next = node;
        node.prev = nodePrev;

        node.next = nodeInsertBefore;
        nodeInsertBefore.prev = node;
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