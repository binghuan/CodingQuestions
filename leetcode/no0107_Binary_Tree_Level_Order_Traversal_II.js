/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {

    level = -1;
    levelTable = [];
    traverse(root);

    console.log("## OUTPUT", levelTable.reverse());
    return levelTable;
};

let level = -1;
let levelTable = [];

function traverse(node) {

    if (node == null) {
        return;
    }

    level += 1;
    console.log("val:", node.val, " on level", level);

    if (levelTable[level] == null) {
        levelTable[level] = [];
    }

    levelTable[level].push(node.val);

    if (node.left) {
        traverse(node.left);
    }

    if (node.right) {
        traverse(node.right);
    }

    level -= 1;

}