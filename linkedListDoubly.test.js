// const { LinkedListDoubly, Node } = require('./linkedListDoubly');
const { LinkedListDoubly, Node } = require('./linkedListDoubly.doing');

test('constructor', () => {
    let ll, nodes;

    nodes = []
    ll = new LinkedListDoubly(...nodes) 
    expect(ll.head).toEqual(null)
    expect(ll.tail).toEqual(null)

    nodes = [new Node(0)]
    ll = new LinkedListDoubly(...nodes) 
    expect(ll.head).toEqual(nodes[0])
    expect(ll.tail).toEqual(nodes[0])

    nodes = [new Node(0), new Node(1), new Node(2)]
    ll = new LinkedListDoubly(...nodes) 

    expect(ll.head).toEqual(nodes[0])
    expect(ll.head.next).toEqual(nodes[1])
    expect(ll.head.prev).toEqual(null)

    expect(ll.head.next.prev).toEqual(nodes[0])
    expect(ll.head.next.next).toEqual(nodes[2])

    expect(ll.tail).toEqual(nodes[2])
    expect(ll.tail.prev).toEqual(nodes[1])
    expect(ll.tail.next).toEqual(null)
})

test('insert', () => {
    let nodes = [new Node(1), new Node(3), new Node(4)] 
    let ll = new LinkedListDoubly(...nodes) 

    ll.insertBefore(new Node(0), nodes[0])
    expect(ll.values()).toEqual([0,1,3,4])
    expect(ll.valuesReverse()).toEqual([0,1,3,4].reverse())

    ll.insertAfter(new Node(2), nodes[0])
    expect(ll.values()).toEqual([0,1,2,3,4])
    expect(ll.valuesReverse()).toEqual([0,1,2,3,4].reverse())
});

test('push', () => {
    let nodes = [new Node(1), new Node(2), new Node(3)] 
    let ll = new LinkedListDoubly(...nodes) 
    ll.push(new Node(0))
    expect(ll.values()).toEqual([0,1,2,3])
    expect(ll.valuesReverse()).toEqual([0,1,2,3].reverse())
})

test('append', () => {
    let nodes = [new Node(1), new Node(2), new Node(3)] 
    let ll = new LinkedListDoubly(...nodes) 
    ll.append(new Node(4))
    expect(ll.values()).toEqual([1,2,3,4])
    expect(ll.valuesReverse()).toEqual([1,2,3,4].reverse())
})

test('delete', () => {
    let nodes = [new Node(1), new Node(2), new Node(3), new Node(4), new Node(5)] 
    let ll = new LinkedListDoubly(...nodes) 

    // delete head
    ll.delete(nodes[0])
    expect(ll.values()).toEqual([2,3,4,5])

    // delete middle
    ll.delete(nodes[2])
    expect(ll.values()).toEqual([2,4,5])

    // delete tail
    ll.delete(nodes[4])
    expect(ll.values()).toEqual([2,4])
    expect(ll.valuesReverse()).toEqual([2,4].reverse())

    // try deleting non-contained node
    ll.delete(nodes[0])
    expect(ll.values()).toEqual([2,4])
})

test('delete last node', () => {
    let nodes = [new Node(0)] 
    let ll = new LinkedListDoubly(...nodes)
    ll.delete(nodes[0])
    expect(ll.head).toEqual(null)
    expect(ll.tail).toEqual(null)
})