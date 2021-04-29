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
var levelOrder = function (root) {
    const DBG = false;

    let depth = 0;
    let map = {};
    function traversal(node) {

        if (node == null) {
            return;
        }

        if (map[depth] == null) {
            map[depth] = [];
        }

        map[depth].push(node.val);

        if (node.left != null) {
            depth += 1;
            traversal(node.left);
            depth -= 1;
        }

        if (node.right != null) {
            depth += 1;
            traversal(node.right);
            depth -= 1;
        }

    }

    traversal(root);

    let result = [];
    for (let i = 0; i < Object.keys(map).length; i++) {
        let val = Object.keys(map)[i];
        result.push(map[val]);
    }

    if (DBG) console.log("map:", map);
    if (DBG) console.log("OUTPUT:", result);
    return result;
};