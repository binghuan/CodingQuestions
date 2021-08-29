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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

    let numArray = [];

    function traverse(node) {

        if (node == null) {
            return;
        }

        numArray.push(node.val);

        if (node.left != null) {
            traverse(node.left);
        }

        if (node.right != null) {
            traverse(node.right);
        }
    }
    traverse(root);

    numArray.sort((a, b) => {
        return a - b
    });

    return numArray[k - 1];
};