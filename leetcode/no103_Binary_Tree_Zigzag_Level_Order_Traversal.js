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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {

    let nodeByLevel = [];
    let level = 0;

    function traverse(node, level) {

        if (node == null) {
            return null;
        }

        if (nodeByLevel[level] == null) {
            nodeByLevel[level] = [node.val];
        } else {
            nodeByLevel[level].push(node.val);
        }

        if (node.left != null) {
            traverse(node.left, level + 1)
        }

        if (node.right != null) {
            traverse(node.right, level + 1)
        }
    }

    traverse(root, level)

    for (let i = 0; i < nodeByLevel.length; i++) {
        if (i % 2 == 1) {
            nodeByLevel[i].reverse();
        }
    }

    return nodeByLevel;
};