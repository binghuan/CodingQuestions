package com.bh;

import java.util.*;

/**
 * LeetCode 105: Construct Binary Tree from Preorder and Inorder Traversal
 * 
 * Problem: Given two integer arrays preorder and inorder where preorder is the preorder 
 * traversal of a binary tree and inorder is the inorder traversal of the same tree, 
 * construct and return the binary tree.
 * 
 * 題目：給定兩個整數數組 preorder 和 inorder，其中 preorder 是二叉樹的前序遍歷，
 * inorder 是同一棵樹的中序遍歷，構造並返回這個二叉樹。
 * 
 * Key Insights:
 * 1. Preorder: Root -> Left -> Right
 * 2. Inorder: Left -> Root -> Right
 * 3. The first element in preorder is always the root
 * 4. Find root in inorder to split left and right subtrees
 * 
 * 關鍵洞察：
 * 1. 前序遍歷：根 -> 左 -> 右
 * 2. 中序遍歷：左 -> 根 -> 右
 * 3. 前序遍歷的第一個元素總是根節點
 * 4. 在中序遍歷中找到根節點，以分割左右子樹
 */
public class no0105_Construct_Binary_Tree_from_Preorder_and_Inorder_Traversal {

    /**
     * Definition for a binary tree node.
     * 二叉樹節點的定義
     */
    public static class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;
        
        TreeNode() {}
        
        TreeNode(int val) { 
            this.val = val; 
        }
        
        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    /**
     * Solution 1: Recursive Approach with HashMap Optimization
     * 解法1：使用HashMap優化的遞歸方法
     * 
     * Algorithm:
     * 1. Create a map to store inorder indices for O(1) lookup
     * 2. Use recursion with preorder index to build tree
     * 3. For each recursive call:
     *    - Take current preorder element as root
     *    - Find root position in inorder
     *    - Split inorder into left and right parts
     *    - Recursively build left and right subtrees
     * 
     * 算法步驟：
     * 1. 創建映射來存儲中序遍歷的索引，實現O(1)查找
     * 2. 使用遞歸和前序索引來構建樹
     * 3. 對於每次遞歸調用：
     *    - 取當前前序元素作為根節點
     *    - 在中序遍歷中找到根節點位置
     *    - 將中序遍歷分為左右兩部分
     *    - 遞歸構建左右子樹
     * 
     * Time Complexity: O(n) where n is number of nodes
     * Space Complexity: O(n) for HashMap and recursion stack
     * 
     * 時間複雜度：O(n)，其中n是節點數量
     * 空間複雜度：O(n)，用於HashMap和遞歸棧
     */
    private Map<Integer, Integer> inorderIndexMap;
    private int preorderIndex;
    
    public TreeNode buildTree(int[] preorder, int[] inorder) {
        // Build index map for O(1) inorder lookups
        // 構建索引映射以實現O(1)中序查找
        inorderIndexMap = new HashMap<>();
        for (int i = 0; i < inorder.length; i++) {
            inorderIndexMap.put(inorder[i], i);
        }
        
        preorderIndex = 0;
        return buildTreeHelper(preorder, 0, inorder.length - 1);
    }
    
    /**
     * Helper method for recursive tree construction
     * 遞歸構建樹的輔助方法
     * 
     * @param preorder - preorder traversal array
     * @param inorderStart - start index of current subtree in inorder
     * @param inorderEnd - end index of current subtree in inorder
     * @return root of constructed subtree
     */
    private TreeNode buildTreeHelper(int[] preorder, int inorderStart, int inorderEnd) {
        // Base case: empty subtree
        // 基礎情況：空子樹
        if (inorderStart > inorderEnd) {
            return null;
        }
        
        // Current root is the next element in preorder
        // 當前根節點是前序遍歷中的下一個元素
        int rootVal = preorder[preorderIndex++];
        TreeNode root = new TreeNode(rootVal);
        
        // Find root position in inorder array
        // 在中序遍歷數組中找到根節點位置
        int rootIndexInorder = inorderIndexMap.get(rootVal);
        
        // Build left subtree first (preorder: root -> left -> right)
        // 先構建左子樹（前序遍歷：根 -> 左 -> 右）
        root.left = buildTreeHelper(preorder, inorderStart, rootIndexInorder - 1);
        
        // Build right subtree
        // 構建右子樹
        root.right = buildTreeHelper(preorder, rootIndexInorder + 1, inorderEnd);
        
        return root;
    }
    
    /**
     * Solution 2: Iterative Approach using Stack
     * 解法2：使用棧的迭代方法
     * 
     * Algorithm:
     * 1. Use a stack to keep track of nodes
     * 2. Create nodes from preorder and attach to left
     * 3. When we find a node in stack that matches inorder, pop and attach right child
     * 
     * 算法步驟：
     * 1. 使用棧來跟蹤節點
     * 2. 從前序遍歷創建節點並附加到左側
     * 3. 當找到棧中與中序遍歷匹配的節點時，彈出並附加右子節點
     * 
     * Time Complexity: O(n)
     * Space Complexity: O(n) for stack
     * 
     * 時間複雜度：O(n)
     * 空間複雜度：O(n)，用於棧
     */
    public TreeNode buildTreeIterative(int[] preorder, int[] inorder) {
        if (preorder.length == 0) return null;
        
        TreeNode root = new TreeNode(preorder[0]);
        Stack<TreeNode> stack = new Stack<>();
        stack.push(root);
        
        int inorderIndex = 0;
        
        for (int i = 1; i < preorder.length; i++) {
            TreeNode node = new TreeNode(preorder[i]);
            TreeNode parent = null;
            
            // Find the correct parent for current node
            // 為當前節點找到正確的父節點
            while (!stack.isEmpty() && stack.peek().val == inorder[inorderIndex]) {
                parent = stack.pop();
                inorderIndex++;
            }
            
            if (parent != null) {
                // Current node is right child of parent
                // 當前節點是父節點的右子節點
                parent.right = node;
            } else {
                // Current node is left child of stack top
                // 當前節點是棧頂的左子節點
                stack.peek().left = node;
            }
            
            stack.push(node);
        }
        
        return root;
    }
    
    /**
     * Helper method to print tree in preorder for verification
     * 用於驗證的前序遍歷打印輔助方法
     */
    public static void printPreorder(TreeNode root, List<Integer> result) {
        if (root == null) {
            result.add(null);
            return;
        }
        result.add(root.val);
        printPreorder(root.left, result);
        printPreorder(root.right, result);
    }
    
    /**
     * Helper method to print tree in inorder for verification
     * 用於驗證的中序遍歷打印輔助方法
     */
    public static void printInorder(TreeNode root, List<Integer> result) {
        if (root == null) {
            return;
        }
        printInorder(root.left, result);
        result.add(root.val);
        printInorder(root.right, result);
    }
    
    /**
     * Helper method to print tree level by level
     * 層序打印樹的輔助方法
     */
    public static List<String> printLevelOrder(TreeNode root) {
        List<String> result = new ArrayList<>();
        if (root == null) return result;
        
        Queue<TreeNode> queue = new LinkedList<>();
        queue.offer(root);
        
        while (!queue.isEmpty()) {
            TreeNode node = queue.poll();
            if (node != null) {
                result.add(String.valueOf(node.val));
                queue.offer(node.left);
                queue.offer(node.right);
            } else {
                result.add("null");
            }
        }
        
        // Remove trailing nulls
        // 移除尾部的null
        while (!result.isEmpty() && result.get(result.size() - 1).equals("null")) {
            result.remove(result.size() - 1);
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        no0105_Construct_Binary_Tree_from_Preorder_and_Inorder_Traversal solution = 
            new no0105_Construct_Binary_Tree_from_Preorder_and_Inorder_Traversal();
        
        // Test Case 1: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
        // Expected: [3,9,20,null,null,15,7]
        int[] preorder1 = {3, 9, 20, 15, 7};
        int[] inorder1 = {9, 3, 15, 20, 7};
        
        System.out.println("=== Test Case 1 ===");
        System.out.println("Input:");
        System.out.println("preorder = " + Arrays.toString(preorder1));
        System.out.println("inorder = " + Arrays.toString(inorder1));
        
        // Test recursive solution
        TreeNode result1 = solution.buildTree(preorder1, inorder1);
        List<String> levelOrder1 = printLevelOrder(result1);
        System.out.println("Result (Recursive): " + levelOrder1);
        
        // Verify by checking traversals
        List<Integer> preorderCheck1 = new ArrayList<>();
        List<Integer> inorderCheck1 = new ArrayList<>();
        printPreorder(result1, preorderCheck1);
        printInorder(result1, inorderCheck1);
        preorderCheck1.removeAll(Collections.singleton(null));
        
        System.out.println("Verification - Preorder: " + preorderCheck1);
        System.out.println("Verification - Inorder: " + inorderCheck1);
        System.out.println("Expected: [3,9,20,null,null,15,7]");
        
        // Test iterative solution
        TreeNode result1_iter = solution.buildTreeIterative(preorder1, inorder1);
        List<String> levelOrder1_iter = printLevelOrder(result1_iter);
        System.out.println("Result (Iterative): " + levelOrder1_iter);
        
        // Test Case 2: preorder = [-1], inorder = [-1]
        // Expected: [-1]
        int[] preorder2 = {-1};
        int[] inorder2 = {-1};
        
        System.out.println("\n=== Test Case 2 ===");
        System.out.println("Input:");
        System.out.println("preorder = " + Arrays.toString(preorder2));
        System.out.println("inorder = " + Arrays.toString(inorder2));
        
        TreeNode result2 = solution.buildTree(preorder2, inorder2);
        List<String> levelOrder2 = printLevelOrder(result2);
        System.out.println("Result (Recursive): " + levelOrder2);
        System.out.println("Expected: [-1]");
        
        TreeNode result2_iter = solution.buildTreeIterative(preorder2, inorder2);
        List<String> levelOrder2_iter = printLevelOrder(result2_iter);
        System.out.println("Result (Iterative): " + levelOrder2_iter);
        
        // Test Case 3: More complex tree
        int[] preorder3 = {1, 2, 4, 5, 3, 6, 7};
        int[] inorder3 = {4, 2, 5, 1, 6, 3, 7};
        
        System.out.println("\n=== Test Case 3 (Complex Tree) ===");
        System.out.println("Input:");
        System.out.println("preorder = " + Arrays.toString(preorder3));
        System.out.println("inorder = " + Arrays.toString(inorder3));
        
        TreeNode result3 = solution.buildTree(preorder3, inorder3);
        List<String> levelOrder3 = printLevelOrder(result3);
        System.out.println("Result (Recursive): " + levelOrder3);
        
        TreeNode result3_iter = solution.buildTreeIterative(preorder3, inorder3);
        List<String> levelOrder3_iter = printLevelOrder(result3_iter);
        System.out.println("Result (Iterative): " + levelOrder3_iter);
        
        System.out.println("\n=== Algorithm Analysis ===");
        System.out.println("Key Insights:");
        System.out.println("1. Preorder gives us the root of each subtree");
        System.out.println("2. Inorder helps us determine left and right subtrees");
        System.out.println("3. HashMap optimization reduces time complexity to O(n)");
        System.out.println("\nApproaches:");
        System.out.println("1. Recursive with HashMap: O(n) time, O(n) space - Clean and efficient");
        System.out.println("2. Iterative with Stack: O(n) time, O(n) space - More complex but good to understand");
        System.out.println("\nThe recursive approach is generally preferred for its clarity!");
    }
}
