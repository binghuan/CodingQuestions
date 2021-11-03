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
var deepestLeavesSum = function (root) {
    let maxLevel = 0;
    let level = 0;
    let leaves = [];

    function traversal(node) {
        if (node == null) {
            return;
        }
        level += 1;
        if (node.left == null && node.right == null) {
            if (level >= maxLevel) {
                maxLevel = level;
                leaves.push({
                    level: level,
                    value: node.val
                });
            }
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

    const leaves4maxLevel = leaves.filter((leave) =>
        leave.level == maxLevel);
    let sum = 0;
    leaves4maxLevel.forEach((leave) => {
        sum += leave.value;
    })

    return sum;
};