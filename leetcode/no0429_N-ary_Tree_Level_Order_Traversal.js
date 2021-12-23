/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    let result = [];

    let level = -1;
    (function traversal(node) {

        if (node == null) {
            return;
        }

        level += 1;

        if (result[level] == null) {
            result[level] = [node.val];
        } else {
            result[level].push(node.val);
        }

        node.children.forEach((childNode) => {
            traversal(childNode);
        })

        level -= 1;

    })(root)

    return result;
};