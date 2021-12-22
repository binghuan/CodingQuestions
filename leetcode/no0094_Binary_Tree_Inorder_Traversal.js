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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const DBG = false;

    let res = [];
    let stack = [];
    let curr = root;

    while (curr != null || stack.length > 0) {

        while (curr != null) {
            stack.push(curr);
            if (DBG) console.log("+ push =", curr.val);
            curr = curr.left
        }

        if (DBG) console.log("left is empty");
        curr = stack.pop();
        if (DBG) console.log("- last =", curr.val);
        res.push(curr.val);
        curr = curr.right;
        if (DBG) console.log("---", curr, stack.length);
    }

    if (DBG) console.log("OUTPUT:", res);
    return res;
};

let input = {
    val: 1,
    left: {
        val: 2,
        left: {
            val: 4
        },
        right: {
            val: 5,
        }
    },
    right: {
        val: 3,
        left: {
            val: 6,
        },
        right: {
            val: 7
        }
    }
}

inorderTraversal(input);
// reference: https://ithelp.ithome.com.tw/articles/10205571
