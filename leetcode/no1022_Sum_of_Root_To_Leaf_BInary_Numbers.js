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
var sumRootToLeaf = function (root) {

    let sum = 0;
    let path = [];
    function traversal(node) {
        if (node == null) {
            return;
        }
        path.push(node.val);
        if (node.left != null) {
            traversal(node.left);
        }
        if (node.right != null) {
            traversal(node.right);
        }
        if (node.left == null && node.right == null) {
            // reach the leaf. 
            let num = parseInt(path.join(""), 2);
            sum += num;
        }
        path.pop();
    }
    traversal(root);
    return sum;
};