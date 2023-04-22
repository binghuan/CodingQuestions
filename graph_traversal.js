// Define the Node first.
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
};

// Input:
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

node1.neighbors = [node2, node3, node4];
node2.neighbors = [node1, node5];
node3.neighbors = [node1, node5];
node4.neighbors = [node1, node6];
node5.neighbors = [node2, node3, node7];
node6.neighbors = [node4, node7];
node7.neighbors = [node5, node6];

// BFS Solution
function traversal(node) {

    if (node == null) {
        return;
    }
    const visited = new Set();

    const queue = [node]

    console.log(node.val)
    visited.add(node)

    while (queue.length > 0) {

        // The shift() method removes the first element from an array and returns that removed element. 
        // This method changes the length of the array.
        let currNode = queue.shift()

        for (neighbor of currNode.neighbors) {
            if (visited.has(neighbor)) {
                continue;
            }
            console.log(neighbor.val)
            visited.add(neighbor)
            queue.push(neighbor);
        }
    }
}

traversal(node2)