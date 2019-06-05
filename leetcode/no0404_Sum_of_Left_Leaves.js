/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {

    total = 0;

    traversingTree(root, false);

    return total;

};

let total = 0;

function traversingTree(node, isLeftNode) {

    if (node == null) {
        return;
    }

    if (isLeftNode && node.right == null && node.left == null) {
        console.log("+", node.val);
        total += node.val;
    }

    if (node.left != null) {
        traversingTree(node.left, true);
    }

    if (node.right != null) {
        traversingTree(node.right, false);
    }

}