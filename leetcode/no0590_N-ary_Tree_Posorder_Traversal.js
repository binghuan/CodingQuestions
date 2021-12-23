/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {

    let result = [];

    // Use depth-first search to traverse the binary tree 
    // and record each node when you leave
    (function traversal(node) {

        if (node == null) {
            return
        }

        node.children.forEach((childNode) => {
            traversal(childNode)
        })

        // Here is the point.
        result.push(node.val);

    })(root)

    return result;
};