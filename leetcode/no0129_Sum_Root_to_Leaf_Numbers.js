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
 * @return {number}
 */
var sumNumbers = function (root) {

    let sum = [];
    let totalSum = 0;
    function traversal(node) {
        if (node == null) {
            return;
        }
        sum.push(node.val);
        if (node.left == null && node.right == null) {
            let sumString = sum.join("");
            console.log("node.val:", node.val, "current number = ", sumString);
            totalSum += parseInt(sumString);
        }

        if (node.left != null) {
            traversal(node.left);
        }

        if (node.right != null) {
            traversal(node.right);
        }
        sum.pop();
    }
    traversal(root);
    return totalSum;
};