package com.bh;

/**
 * LeetCode 98: Validate Binary Search Tree
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 * 
 * A valid BST is defined as follows:
 * - The left subtree of a node contains only nodes with keys less than the node's key.
 * - The right subtree of a node contains only nodes with keys greater than the node's key.
 * - Both the left and right subtrees must also be binary search trees.
 * 
 * Solution Approaches:
 * 1. Recursive with bounds checking (implemented)
 * 2. In-order traversal (alternative approach)
 * 
 * Time Complexity: O(n) - visit each node once
 * Space Complexity: O(h) - recursion depth, where h is height of tree
 */
public class no0098_Validate_BST {
    
    /**
     * Definition for a binary tree node.
     */
    static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        TreeNode() {}
        TreeNode(int val) { this.val = val; }
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }
    
    static class Solution {
        /**
         * Validates if the given binary tree is a valid BST.
         * 
         * Algorithm:
         * Use recursive approach with bounds checking:
         * 1. For each node, maintain valid range [min, max]
         * 2. Current node value must be within this range
         * 3. Left subtree: range becomes [min, current.val)
         * 4. Right subtree: range becomes (current.val, max]
         * 
         * @param root root of the binary tree
         * @return true if valid BST, false otherwise
         */
        public boolean isValidBST(TreeNode root) {
            return validate(root, Long.MIN_VALUE, Long.MAX_VALUE);
        }
        
        /**
         * Helper method to validate BST with bounds.
         * 
         * @param node current node being validated
         * @param min minimum allowed value (exclusive)
         * @param max maximum allowed value (exclusive)
         * @return true if subtree rooted at node is valid BST
         */
        private boolean validate(TreeNode node, long min, long max) {
            // Base case: empty tree is valid BST
            if (node == null) {
                return true;
            }
            
            // Check if current node violates BST property
            if (node.val <= min || node.val >= max) {
                return false;
            }
            
            // Recursively validate left and right subtrees with updated bounds
            return validate(node.left, min, node.val) && 
                   validate(node.right, node.val, max);
        }
        
        /**
         * Alternative solution using in-order traversal.
         * In-order traversal of BST should give sorted sequence.
         */
        private TreeNode prev = null;
        
        public boolean isValidBST_InOrder(TreeNode root) {
            prev = null; // Reset for each validation
            return inOrder(root);
        }
        
        private boolean inOrder(TreeNode node) {
            if (node == null) return true;
            
            // Traverse left subtree
            if (!inOrder(node.left)) return false;
            
            // Check current node
            if (prev != null && prev.val >= node.val) {
                return false;
            }
            prev = node;
            
            // Traverse right subtree
            return inOrder(node.right);
        }
    }
    
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test Case 1: [2,1,3] - Valid BST
        TreeNode root1 = new TreeNode(2);
        root1.left = new TreeNode(1);
        root1.right = new TreeNode(3);
        
        boolean result1 = solution.isValidBST(root1);
        boolean result1_alt = solution.isValidBST_InOrder(root1);
        System.out.println("Test Case 1: [2,1,3]");
        System.out.println("Bounds method: " + result1 + " | In-order method: " + result1_alt);
        System.out.println("Expected: true");
        System.out.println("Test 1 " + (result1 && result1_alt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 2: [5,1,4,null,null,3,6] - Invalid BST
        TreeNode root2 = new TreeNode(5);
        root2.left = new TreeNode(1);
        root2.right = new TreeNode(4);
        root2.right.left = new TreeNode(3);
        root2.right.right = new TreeNode(6);
        
        boolean result2 = solution.isValidBST(root2);
        boolean result2_alt = solution.isValidBST_InOrder(root2);
        System.out.println("Test Case 2: [5,1,4,null,null,3,6]");
        System.out.println("Bounds method: " + result2 + " | In-order method: " + result2_alt);
        System.out.println("Expected: false");
        System.out.println("Test 2 " + (!result2 && !result2_alt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 3: Single node - Valid BST
        TreeNode root3 = new TreeNode(1);
        boolean result3 = solution.isValidBST(root3);
        boolean result3_alt = solution.isValidBST_InOrder(root3);
        System.out.println("Test Case 3: [1]");
        System.out.println("Bounds method: " + result3 + " | In-order method: " + result3_alt);
        System.out.println("Expected: true");
        System.out.println("Test 3 " + (result3 && result3_alt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 4: Edge case with Integer.MIN_VALUE and MAX_VALUE
        TreeNode root4 = new TreeNode(Integer.MAX_VALUE);
        boolean result4 = solution.isValidBST(root4);
        boolean result4_alt = solution.isValidBST_InOrder(root4);
        System.out.println("Test Case 4: [" + Integer.MAX_VALUE + "]");
        System.out.println("Bounds method: " + result4 + " | In-order method: " + result4_alt);
        System.out.println("Expected: true");
        System.out.println("Test 4 " + (result4 && result4_alt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 5: Invalid BST with duplicate values
        TreeNode root5 = new TreeNode(1);
        root5.left = new TreeNode(1);
        boolean result5 = solution.isValidBST(root5);
        boolean result5_alt = solution.isValidBST_InOrder(root5);
        System.out.println("Test Case 5: [1,1] (duplicate values)");
        System.out.println("Bounds method: " + result5 + " | In-order method: " + result5_alt);
        System.out.println("Expected: false");
        System.out.println("Test 5 " + (!result5 && !result5_alt ? "PASSED" : "FAILED"));
    }
}
