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
 * @return {number[]}
 */
var rightSideView = function (root) {

    let set = new Set();
    let result = [];// number[]

    function traverse(node, depth) {

        if (node == null) {
            return;
        }

        if (!set.has(depth)) {
            set.add(depth);
            result.push(node.val);
        }

        if (node.right != null) {
            traverse(node.right, depth + 1);
        }

        if (node.left != null) {
            traverse(node.left, depth + 1);
        }
    }

    traverse(root, 0);
    return result;
};

// Reference: https://leetcode.com/problems/binary-tree-right-side-view/discuss/1451097/Javascript-solution-using-pre-order-(96)