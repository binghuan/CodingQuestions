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
var leafSimilar = function (root1, root2) {

    function traversal(node) {
        if (node == null) {
            return
        }
        if (node.left != null) {
            traversal(node.left);
        }
        if (node.right != null) {
            traversal(node.right);
        }
        if (node.left == null && node.right == null) {
            leafList.push(node.val);
        }
    }

    let leafList = [];
    traversal(root1);
    let leafListOne = leafList.slice(0);

    leafList = [];
    traversal(root2);
    let leafListTwo = leafList.slice(0);

    return leafListOne.toString() == leafListTwo.toString();
};