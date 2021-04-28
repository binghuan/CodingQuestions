/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
    const DBG = true;
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
            } else if (nodeA.right != null && nodeB.right != null) {
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

    function traversal(root1, root2) {

        if (DBG) console.log(">> traveral", root1, root2);
        if (root1 == null && root2 == null) {
            return;
        }
        if (!isTheSameNode(root1, root2)) {
            finalResult = false;
            return;
        }

        // Try to swape child once, if child was not the same.
        let swapped = false;
        if (!isTheSameChild(root1, root2)) {
            swapNodes(root1)
            swapped = true;
        }

        if (swapped && !isTheSameChild(root1, root2)) {
            finalResult = false;
            return;
        }

        // Before doing traversal, we need to make sure child nodes are the same
        if (root1.left != null) {
            traversal(root1.left, root2.left)
        }

        if (root1.right != null) {
            traversal(root1.right, root2.right)
        }
    }

    traversal(root1, root2);

    if (DBG) console.log("OUTPUT:", finalResult);
    return finalResult;
}