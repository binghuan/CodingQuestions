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
 * @return {boolean}
 */
var isUnivalTree = function (root) {
    
    let uniValue = null;
    let result = true;

    function traverse(node) {

        if (node == null || result == false) {
            return;
        }

        if (uniValue == null) {
            uniValue = node.val;
        } else if (uniValue != node.val) {
            result = false;
            return;
        }

        if (node.left != null) {
            traverse(node.left);
        }

        if (node.right != null) {
            traverse(node.right);
        }
    }

    traverse(root);

    return result;

};