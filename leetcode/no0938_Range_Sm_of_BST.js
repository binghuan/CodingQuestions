/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
    let sum = 0;
    function traversal(node) {
        if (node == null) {
            return;
        }
        if (node.val >= low && node.val <= high) {
            sum += node.val;
        }
        if (node.left != null) {
            traversal(node.left);
        }
        if (node.right != null) {
            traversal(node.right);
        }
    }

    traversal(root)

    return sum;
};