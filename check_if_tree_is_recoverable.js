// Question: check if you can swap the node to make two tree to be the same.
function isRecoverableTree(treeA, treeB, DBG) {

    let finalResult = true;

    function isTheSameChild(nodeA, nodeB) {
        let result = true;
        if (nodeA != null && nodeB != null) {
            if (
                (nodeA.left != null && nodeB.left == null) ||
                (nodeA.left == null && nodeB.left != null) ||
                (nodeA.right != null && nodeB.right == null) ||
                (nodeA.right == null && nodeB.right != null)
            ) {
                if (DBG) console.log("X> child is not null or non-null");
                result = false;
            }

            if (nodeA.left != null && nodeB.left != null) {
                if (nodeA.left.val != nodeB.left.val) {
                    if (DBG) console.log("X> right child is not the same");
                    result = false;
                }
            }

            if (nodeA.right != null && nodeB.right != null) {
                if (nodeA.right.val != nodeB.right.val) {
                    if (DBG) console.log("X> left child is not the same");
                    result = false;
                }
            }
        }

        if (DBG) console.log(">> isTheSameChild", result);
        return result;

    }

    function isTheSameNode(nodeA, nodeB) {
        let result = true;
        if (nodeA == null && nodeB != null) {
            if (DBG) console.log("nodes are not all null 1");
            result = false;
        } else if (nodeA != null && nodeB == null) {
            if (DBG) console.log("nodes are not all null 2");
            result = false;
        } else if ((nodeA != null && nodeB != null)
            && (nodeA.val != nodeB.val)) {

            if (DBG) console.log("values are not the same");
            result = false;
        }

        if (DBG) console.log(">> isTheSameNode", result, nodeA ? nodeA.val : nodeA, nodeB ? nodeB.val : nodeB);
        return result;
    }

    function swapNodes(node) {
        let tempNode = node.left;
        node.left = node.right;
        node.right = tempNode;
    }

    function traversal(nodeA, nodeB) {

        if (DBG) console.log(">> traveral", nodeA, nodeB);

        if (nodeA == null || nodeB == null) {
            return;
        }

        if (!isTheSameNode(nodeA, nodeB)) {
            finalResult = false;
            return;
        }

        // Try to swape child once, if child was not the same.
        if (!isTheSameChild(nodeA, nodeB)) {
            swapNodes(nodeA)
        }

        if (!isTheSameChild(nodeA, nodeB)) {
            finalResult = false;
            return;
        }

        // Before doing traversal, we need to make sure child nodes are the same
        if (nodeA.left != null) {
            traversal(nodeA.left, nodeB.left)
        }

        if (nodeA.right != null) {
            traversal(nodeA.right, nodeA.right)
        }
    }

    traversal(treeA, treeB)

    if (DBG) console.log("OUTPUT:", finalResult);
    return finalResult;
}

let dataSet = {
    "A": {
        treeInTest: {
            val: 1,
            left: {
                val: 3
            },
            right: {
                val: 2
            }
        },
        targetTree: {
            val: 1,
            left: {
                val: 2
            },
            right: {
                val: 3
            }
        }
    },
    "B": {
        treeInTest: {
            val: 1,
            left: {
                val: 3,
                left: {
                    val: 4
                }
            },
            right: {
                val: 2
            }
        },
        targetTree: {
            val: 1,
            left: {
                val: 2
            },
            right: {
                val: 3,
                right: {
                    val: 4
                }
            }
        }
    },
    "C": {
        treeInTest: {
            val: 1,
            left: {
                val: 4
            },
            right: {
                val: 2
            }
        },
        targetTree: {
            val: 1,
            left: {
                val: 2
            },
            right: {
                val: 3
            }
        }
    }
}

const isDebugEnabled = false;
console.log("TEST A: -----------------", isRecoverableTree(dataSet.A.treeInTest, dataSet.A.targetTree, isDebugEnabled));
console.log("TEST B: -----------------", isRecoverableTree(dataSet.B.treeInTest, dataSet.B.targetTree, isDebugEnabled));
console.log("TEST C: -----------------", isRecoverableTree(dataSet.C.treeInTest, dataSet.C.targetTree, isDebugEnabled));
