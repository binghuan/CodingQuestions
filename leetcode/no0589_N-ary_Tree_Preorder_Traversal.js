/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {

    let result = [];

    // Use depth-first search to traverse the binary tree 
    // and record every node encountered.
    function traversal(node) {

        if (node == null) {
            return;
        }

        // Here is the point.
        result.push(node.val);

        for (let i = 0; i < node.children.length; i++) {
            let child = node.children[i];
            traversal(child);
        }
    }
    traversal(root);
    return result;
};