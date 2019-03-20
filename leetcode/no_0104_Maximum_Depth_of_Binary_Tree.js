// link: https://leetcode.com/problems/maximum-depth-of-binary-tree/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    const DBG = true; 
    maxLevel = 0;
    currentLevel =0;
    if(root == null) {
        return 0;
    }
    
    if(DBG)console.log("## INPUT:", root);
    traversingTree(root);
    
    if(DBG)console.log("## OUTPUT:", maxLevel);
      return maxLevel;
};

let maxLevel = 0;
let currentLevel = 0; 
function traversingTree(root) {
    
    if(root == null) {
        return;
    }
    currentLevel+=1;
    
    if(currentLevel > maxLevel) {
        maxLevel = currentLevel;
    }
    console.log("at level: ", currentLevel, "val: ", root.val );
    
    if(root.left != null) {
        traversingTree(root.left);
    }
    
    if(root.right != null) {
        traversingTree(root.right);
    }
    
    currentLevel-=1;
    
}