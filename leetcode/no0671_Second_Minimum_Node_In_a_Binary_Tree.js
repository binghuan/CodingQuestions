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
var findSecondMinimumValue = function (root) {

    let numArray = [];
    let set = new Set();

    function traverse(node) {
        if (node == null) {
            return
        }

        //numArray.push(node.val);
        set.add(node.val);

        if (node.left != null) {
            traverse(node.left);
        }

        if (node.right != null) {
            traverse(node.right);
        }
    }

    traverse(root);
    numArray = Array.from(set);
    numArray.sort((a, b) => {
        return a - b;
    })

    if (numArray.length > 1) {
        return numArray[1];
    } else {
        return -1;
    }

};