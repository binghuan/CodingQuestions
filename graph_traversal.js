// Define the Node class for the graph
// val: value of the node
// neighbors: array of neighbor nodes
class Node {
    constructor(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }
}

// Create nodes for the graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);
const node5 = new Node(5);
const node6 = new Node(6);
const node7 = new Node(7);

// Set neighbors for each node (undirected graph)
node1.neighbors = [node2, node3, node4]; // node1 connects to node2, node3, node4
node2.neighbors = [node1, node5];        // node2 connects to node1, node5
node3.neighbors = [node1, node5];        // node3 connects to node1, node5
node4.neighbors = [node1, node6];        // node4 connects to node1, node6
node5.neighbors = [node2, node3, node7]; // node5 connects to node2, node3, node7
node6.neighbors = [node4, node7];        // node6 connects to node4, node7
node7.neighbors = [node5, node6];        // node7 connects to node5, node6

/**
 * Traverse the graph using BFS (Breadth-First Search)
 * Time Complexity: O(V + E)
 *   V: number of vertices (nodes)
 *   E: number of edges
 *
 * @param {Node} node - starting node
 */
function traversal(node) {
    if (node == null) {
        return;
    }
    const visited = new Set(); // Record visited nodes to avoid duplicates
    const queue = [node];      // BFS queue, start with the initial node

    console.log(node.val);     // Output the starting node
    visited.add(node);         // Mark the starting node as visited

    while (queue.length > 0) {
        // Remove the first node from the queue
        let currNode = queue.shift();
        // Traverse all neighbors
        for (let neighbor of currNode.neighbors) {
            if (visited.has(neighbor)) {
                continue; // Skip if already visited
            }
            console.log(neighbor.val); // Output the neighbor node
            visited.add(neighbor);     // Mark as visited
            queue.push(neighbor);      // Add to queue for later processing
        }
    }
}

// Start BFS from node1, output order will begin from 1
traversal(node1);