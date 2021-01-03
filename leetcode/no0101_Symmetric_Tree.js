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
 * @return {boolean}
 */
var isSymmetric = function (root) {

    function traversal(node, path, reversed) {

        if (node != null) {
            path.push(node.val);
        } else {
            path.push(null);
            return;
        }

        let nextNode = node.left;
        let next2Node = node.right;
        if (reversed) {
            nextNode = node.right;
            next2Node = node.left;
        }

        if (nextNode != null) {
            traversal(nextNode, path, reversed);
        } else {
            path.push(null);
        }

        if (next2Node != null) {
            traversal(next2Node, path, reversed);
        } else {
            path.push(null);
        }

        return;

    }


    if (root == null) {
        return true;
    }
    let leftTree = root.left;
    let path1 = [];
    traversal(leftTree, path1, false);

    let rightTree = root.right;
    let path2 = [];
    traversal(rightTree, path2, true);

    if (path1.toString() == path2.toString()) {
        return true;
    } else {
        return false;
    }

};

/*

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3


Follow up: Solve it both recursively and iteratively.

*/