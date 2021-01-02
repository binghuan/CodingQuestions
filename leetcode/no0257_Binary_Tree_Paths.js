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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {

    let pathMap = {};
    let path = [];
    let answer = [];

    function travel(node) {

        let hasChild = false;

        if (node.left != null) {
            hasChild = true;
            path.push(node.left.val);
            travel(node.left);
        }
        if (node.right != null) {
            hasChild = true;
            path.push(node.right.val);
            travel(node.right);
        }

        if (!hasChild) {
            pathMap[path.toString()] = 1;
        }

        path.pop();
    }


    if (root != null) {
        path.push(root.val);
        travel(root)
    }


    for (let i = 0; i < Object.keys(pathMap).length; i++) {
        let key = Object.keys(pathMap)[i];
        answer.push(key.replace(/,/g, "->"));
    }

    return answer;
};

/*
Given a binary tree, return all root-to-leaf paths.

Note: A leaf is a node with no children.

Example:

Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
*/