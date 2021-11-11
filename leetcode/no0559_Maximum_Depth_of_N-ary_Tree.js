/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
    let depth = 0;
    let maxDepth = 0;
    function traversal(node) {

        if (node == null) {
            return;
        }

        depth += 1;

        if (depth > maxDepth) {
            maxDepth = depth;
        }
        //console.log(`level ${depth} = ${node.val}`);
        if (node.children != null && node.children.length > 0) {
            node.children.forEach((child) => {
                traversal(child);
            });
        }
        depth -= 1;
    }
    traversal(root);
    return maxDepth;
};