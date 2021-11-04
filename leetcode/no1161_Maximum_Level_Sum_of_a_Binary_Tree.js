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
var maxLevelSum = function (root) {
    let sumByLevelTable = [];
    let level = -1;

    function traversal(node) {
        if (node == null) {
            return
        }

        level += 1;

        if (sumByLevelTable[level] == null) {
            sumByLevelTable[level] = {
                level: level,
                sum: node.val
            };
        } else {
            sumByLevelTable[level].sum += node.val;
        }

        if (node.left != null) {
            traversal(node.left);
        }

        if (node.right != null) {
            traversal(node.right);
        }

        level -= 1;
    }

    traversal(root);
    sumByLevelTable.sort((a, b) => {
        return b.sum - a.sum;
    });

    return sumByLevelTable[0].level + 1;

};