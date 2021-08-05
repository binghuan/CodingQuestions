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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {

    let path = []
    let result = [];
    let sum = 0;

    function traverse(node) {
        if (node == null) {
            return;
        }

        path.push(node.val);
        sum += node.val;

        if (node.left != null) {
            traverse(node.left);
        }

        if (node.right != null) {
            traverse(node.right);
        }

        if (node.right == null && node.left == null) {
            if (sum == targetSum) {
                result.push(path.slice(0));
            }
        }

        let removedNum = path.pop();
        sum -= node.val;
    }

    traverse(root, result);
    return result;

};