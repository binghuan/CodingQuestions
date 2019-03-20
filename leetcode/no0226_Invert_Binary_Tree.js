// link: https://leetcode.com/problems/invert-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {

    const DBG = true;

    if (root == null) {
        return root;
    }
    if (DBG) console.log(root.val);

    let temp = root.right;
    root.right = root.left;
    root.left = temp;

    if (root.left != null) {
        if (DBG) console.log("--> left");
        invertTree(root.left);
    }

    if (root.right != null) {
        if (DBG) console.log("--> right");
        invertTree(root.right);
    }

    return root;
};