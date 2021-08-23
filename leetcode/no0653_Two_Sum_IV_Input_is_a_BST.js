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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {

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

    let result = false;

    let set = new Set();

    console.log("Values: ", values);
    for (let i = 0; i < values.length; i++) {
        let value = values[i];
        let diff = k - value;
        if (set.has(diff)) {
            console.log("HIT:", diff, value);
            result = true;
            break;
        }

        set.add(value);
    }

    return result;

};