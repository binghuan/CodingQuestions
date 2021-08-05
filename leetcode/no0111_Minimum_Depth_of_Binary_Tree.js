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
var minDepth = function (root) {

    let min = 9999;
    let level = 0;

    function traverse(node) {

        if (node == null) {
            return;
        }
        level += 1;

        if (node.left != null) {
            traverse(node.left);
        }

        if (node.right != null) {
            traverse(node.right);
        }

        if (node.left == null && node.right == null) {
            if (level < min) {
                min = level;
            }
        }
        level -= 1;
    }
    traverse(root);
    if (min == 9999) {
        min = 0;
    }

    return min;

};