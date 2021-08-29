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
 * @return {TreeNode}
 */
var increasingBST = function (root) {

    let values = [];

    function traverse(node) {
        if (node == null) {
            return;
        }

        values.push(node.val);

        if (node.left != null) {
            traverse(node.left);
        }

        if (node.right != null) {
            traverse(node.right);
        }
    }
    traverse(root);

    values.sort((a, b) => {
        return b - a;
    });

    console.log(values);

    let treeNode = null;
    function traverseAdd(node) {
        let value = values.pop();
        if (value != null) {
            node = {
                val: value,
                left: null,
                right: null
            }
            node.right = traverseAdd();
            return node;
        } else {
            return null;
        }
    }
    let node = traverseAdd(treeNode)
    return node;
};