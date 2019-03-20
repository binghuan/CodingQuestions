// link: https://leetcode.com/problems/same-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    const DBG = true;

    if (DBG) console.log("## INPUT:", p, q);

    if( (p == null && q != null) || (p != null && q == null)) {
        if (DBG) console.log("NG> TreeNodes are different");
        return false;
    }

    if ( p == null && q == null ) {
        if (DBG) console.log("NG> TreeNode are null");
        return true;
    }

    if (p.val != q.val) {
        if (DBG) console.log("NG> value is different.");
        return false;
    }

    if (!((p.left != null).toString() == (q.left != null).toString())) {
        if (DBG) console.log("NG> Left Tree is different.");
        return false;
    }

    if (!((p.right != null).toString() == (q.right != null).toString())) {
        if (DBG) console.log("NG> Right Tree is different.");
        return false;
    }

    let result = true;
    let result1 = true;
    let result2 = true;
    if (p.left != null) {
        result1 = isSameTree(p.left, q.left);
    }

    if (p.right != null) {
        result2 = isSameTree(p.right, q.right);
    }

    if (result1 != true || result2 != true) {
        result = false;
    }

    return result;
};

let p = null, q = null;
//p = null, q= {val: 0, right: null, left: null};
isSameTree(p, q);