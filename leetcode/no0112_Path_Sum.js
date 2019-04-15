/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {

    hit = false;
    if (root == null) {
        return false;
    }

    let currentSum = 0;
    targetSum = sum;
    console.log("## INPUT: Find SUM = ", sum);
    let node = traversTree(root, currentSum);

    return hit;
};

let hit = false;
let targetSum = -1;

function traversTree(node, currentSum) {

    if (node == null) {
        return;
    }

    currentSum += node.val;
    console.log("value: ", node.val, "sum=", currentSum, "<>", targetSum);
    if (currentSum == targetSum &&
        node.left == null && node.right == null) {
        console.log("!!! HIT", currentSum);
        hit = true;
    }

    if (node.left) {
        traversTree(node.left, currentSum);
    }

    if (node.right) {
        traversTree(node.right, currentSum);
    }

    currentSum -= node.val;
    return;
}