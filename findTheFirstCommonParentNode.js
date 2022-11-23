/*

Coding quest from bydance (TicTok)

## Chinese Versin
Title: 
    二叉樹最近公共祖先。

Description: 
    給定一個二叉樹的二個樹的兩個葉子節點。
    返回它們的最近共父親節點。
    要求空間復雜度為O(1)

## English Versin
Title:
     Binary tree nearest common ancestor.

Description:
     Given a binary tree with two leaf nodes
     Return their nearest common parent node.
     The required space complexity is O(1)    

let node = {
    value: Int,
    parent: Node, 
    left: Node, 
    right: Node
}

let tree = {
    value: 0,
    right: {
        value: 1,
        right: {
            value: 2
        },
        left: {
            value: 3
        }
    },
    left: {
        value: 4,
        right: {
            value: 5,   
        }
    }
}
*/

let node0 = {
    value: 0,
};

let node1 = {
    parent: node0,
    value: 1,
};

let node2 = {
    value: 2,
    parent: node1,
};

let node3 = {
    value: 3,
    parent: node1,
};
node2.parent = node1;
node3.parent = node1;

let node5 = {
    value: 5
};

let node4 = {
    parent: node0,
    value: 4,
    right: node5
};
node5.parent = node4;

function findTheFirstCommonParentNodeV1(nodeA, nodeB) {

    console.log("getFirstSharedNodeV1", nodeA, nodeB);

    let map = {};

    function recordRefForNode(node) {
        if (map[node.value] == null) {
            map[node.value] = [node];
        } else {
            map[node.value].push(node);
        }
    }

    let currNode = nodeA;
    while (currNode != null) {
        console.log("check node:", currNode);
        recordRefForNode(currNode);
        let previous = currNode.parent
        currNode = previous;
    }

    console.log(map);

    let sharedNode = null;
    currNode = nodeB;
    while (currNode != null && sharedNode == null) {
        console.log("-- check node:", currNode);
        if (map[currNode.value] != null) {
            let nodes = map[currNode.value];
            console.log("Same Value:", currNode.value);
            for (let i = 0; i < nodes.length; i++) {
                if (currNode == nodes[i]) {
                    console.log("HIT", currNode);
                    sharedNode = currNode;
                    break;
                }
            }
        }
        let previous = currNode.parent
        currNode = previous;
    }

    return sharedNode;
}

let result = findTheFirstCommonParentNodeV1(node2, node3);
console.log("ANSWER: ", result);