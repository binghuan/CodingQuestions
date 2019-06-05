/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {

    if (root != null && root.val == val) {
        console.log(">> HIT:", val);
        return root;
    }

    let node = null;
    if (root.left) {
        node = searchBST(root.left, val);
        if (node) {
            return node;
        }
    }

    if (root.right) {
        node = searchBST(root.right, val);
        if (node) {
            return node;
        }
    }

    return null;
};