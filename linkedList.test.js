// const { LinkedList, Node } = require('./linkedList');
const { LinkedList, Node } = require('./linkedList.todo');

test('insert', () => {
    let nodes = [new Node(1), new Node(3), new Node(4)] 
    let ll = new LinkedList(...nodes) 
    ll.insert(new Node(0), nodes[0])
    expect(ll.values()).toEqual([0,1,3,4])
    ll.insert(new Node(2), nodes[1])
    expect(ll.values()).toEqual([0,1,2,3,4])
});


test('push', () => {
    let nodes = [new Node(1), new Node(2), new Node(3)] 
    let ll = new LinkedList(...nodes) 
    ll.push(new Node(0))
    expect(ll.values()).toEqual([0,1,2,3])
})

test('delete', () => {
    let nodes = [new Node(1), new Node(2), new Node(3), new Node(4)] 
    let ll = new LinkedList(...nodes) 
    // delete head
    ll.delete(nodes[0])
    expect(ll.values()).toEqual([2,3,4])
    // delete middle
    ll.delete(nodes[2])
    expect(ll.values()).toEqual([2,4])
    // delete tail
    ll.delete(nodes[3])
    expect(ll.values()).toEqual([2])
    // try deleting non-contained node
    ll.delete(nodes[0])
    expect(ll.values()).toEqual([2])
})