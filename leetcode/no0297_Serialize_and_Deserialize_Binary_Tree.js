/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {

    let nodeArray = [];

    function traverse(node) {

        if (node == null) {
            nodeArray.push("EOF");
            return;
        }
        nodeArray.push(node.val);

        traverse(node.left);

        traverse(node.right);
    }
    traverse(root);
    return nodeArray.toString();
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let valArray = data.split(",").reverse();

    function decode() {
        let val = valArray.pop();
        if (val == "EOF") {
            return null;
        }

        let node = {
            val: parseInt(val)
        }

        node.left = decode();
        node.right = decode();

        return node;

    }

    let result = decode();
    return result;

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */