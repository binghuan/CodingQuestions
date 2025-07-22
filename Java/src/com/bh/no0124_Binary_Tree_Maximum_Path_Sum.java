package com.bh;

/**
 * LeetCode 124: Binary Tree Maximum Path Sum
 * 
 * Problem: A path in a binary tree is a sequence of nodes where each pair of adjacent nodes 
 * in the sequence has an edge connecting them. A node can only appear in the sequence at most once. 
 * Note that the path does not need to pass through the root.
 * 
 * The path sum of a path is the sum of the node's values in the path.
 * Given the root of a binary tree, return the maximum path sum of any non-empty path.
 * 
 * 題目：二叉樹中的路徑是節點序列，其中序列中每對相鄰節點都有邊連接它們。
 * 一個節點在序列中最多只能出現一次。注意路徑不需要通過根節點。
 * 
 * 路徑和是路徑中節點值的總和。
 * 給定二叉樹的根節點，返回任何非空路徑的最大路徑和。
 * 
 * Key Insights:
 * 1. For each node, we can consider it as the "turning point" of a path
 * 2. The maximum path through a node = node.val + max_gain_from_left + max_gain_from_right
 * 3. For recursion return value, we can only include one side (left OR right), not both
 * 4. Use global variable to track the overall maximum
 * 
 * 關鍵洞察：
 * 1. 對於每個節點，我們可以將其視為路徑的"轉折點"
 * 2. 通過節點的最大路徑 = 節點值 + 左側最大收益 + 右側最大收益
 * 3. 對於遞歸返回值，我們只能包含一側（左或右），不能同時包含兩側
 * 4. 使用全局變量跟蹤整體最大值
 */
public class no0124_Binary_Tree_Maximum_Path_Sum {

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
     * Global variable to track maximum path sum found so far
     * 全局變量跟蹤到目前為止找到的最大路徑和
     */
    private int maxPathSum;

    /**
     * Main method to find maximum path sum in binary tree
     * 查找二叉樹中最大路徑和的主方法
     * 
     * Algorithm:
     * 1. Initialize global max to minimum possible value
     * 2. Use DFS to explore all possible paths
     * 3. For each node, calculate max path sum that includes this node as highest point
     * 4. Update global maximum
     * 5. Return max gain that can be extended to parent
     * 
     * 算法步驟：
     * 1. 將全局最大值初始化為最小可能值
     * 2. 使用DFS探索所有可能的路徑
     * 3. 對於每個節點，計算包含此節點作為最高點的最大路徑和
     * 4. 更新全局最大值
     * 5. 返回可以擴展到父節點的最大收益
     * 
     * Time Complexity: O(n) where n is number of nodes
     * Space Complexity: O(h) where h is height of tree (recursion stack)
     * 
     * 時間複雜度：O(n)，其中n是節點數量
     * 空間複雜度：O(h)，其中h是樹的高度（遞歸棧）
     */
    public int maxPathSum(TreeNode root) {
        maxPathSum = Integer.MIN_VALUE;
        maxGain(root);
        return maxPathSum;
    }
    
    /**
     * Helper method to calculate maximum gain from a subtree
     * 計算子樹最大收益的輔助方法
     * 
     * This method serves two purposes:
     * 1. Updates global maxPathSum considering current node as turning point
     * 2. Returns maximum gain that can be obtained by extending path through current node
     * 
     * 此方法有兩個目的：
     * 1. 將當前節點視為轉折點更新全局maxPathSum
     * 2. 返回通過當前節點擴展路徑可獲得的最大收益
     * 
     * @param node current node being processed
     * @return maximum gain obtainable by including this node in a path extending upwards
     */
    private int maxGain(TreeNode node) {
        // Base case: null node contributes 0 to path sum
        // 基礎情況：空節點對路徑和的貢獻為0
        if (node == null) {
            return 0;
        }
        
        // Calculate maximum gain from left and right subtrees
        // Only consider positive gains (ignore negative contributions)
        // 計算左右子樹的最大收益
        // 只考慮正收益（忽略負貢獻）
        int leftGain = Math.max(maxGain(node.left), 0);
        int rightGain = Math.max(maxGain(node.right), 0);
        
        // Calculate maximum path sum with current node as the turning point
        // This path includes: left subtree + current node + right subtree
        // 計算以當前節點為轉折點的最大路徑和
        // 此路徑包括：左子樹 + 當前節點 + 右子樹
        int pathSumWithCurrentNode = node.val + leftGain + rightGain;
        
        // Update global maximum if current path is better
        // 如果當前路徑更好，則更新全局最大值
        maxPathSum = Math.max(maxPathSum, pathSumWithCurrentNode);
        
        // Return maximum gain that can be extended to parent node
        // Can only extend through either left OR right subtree, not both
        // 返回可以擴展到父節點的最大收益
        // 只能通過左或右子樹之一擴展，不能同時通過兩者
        return node.val + Math.max(leftGain, rightGain);
    }
    
    /**
     * Alternative implementation with clearer variable names
     * 使用更清晰變量名的替代實現
     */
    public int maxPathSumAlternative(TreeNode root) {
        int[] globalMax = {Integer.MIN_VALUE};
        maxPathSumHelper(root, globalMax);
        return globalMax[0];
    }
    
    private int maxPathSumHelper(TreeNode node, int[] globalMax) {
        if (node == null) return 0;
        
        // Get maximum contribution from left and right children
        // 獲取左右子節點的最大貢獻
        int leftContribution = Math.max(0, maxPathSumHelper(node.left, globalMax));
        int rightContribution = Math.max(0, maxPathSumHelper(node.right, globalMax));
        
        // Maximum path sum passing through current node
        // 通過當前節點的最大路徑和
        int currentMaxPath = node.val + leftContribution + rightContribution;
        
        // Update global maximum
        // 更新全局最大值
        globalMax[0] = Math.max(globalMax[0], currentMaxPath);
        
        // Return maximum path sum that can be extended upward
        // 返回可以向上擴展的最大路徑和
        return node.val + Math.max(leftContribution, rightContribution);
    }
    
    /**
     * Helper method to print tree structure for debugging
     * 用於調試的樹結構打印輔助方法
     */
    public static void printTree(TreeNode root, String prefix, boolean isLast) {
        if (root == null) return;
        
        System.out.println(prefix + (isLast ? "└── " : "├── ") + root.val);
        
        if (root.left != null || root.right != null) {
            if (root.left != null) {
                printTree(root.left, prefix + (isLast ? "    " : "│   "), root.right == null);
            }
            if (root.right != null) {
                printTree(root.right, prefix + (isLast ? "    " : "│   "), true);
            }
        }
    }
    
    public static void main(String[] args) {
        no0124_Binary_Tree_Maximum_Path_Sum solution = new no0124_Binary_Tree_Maximum_Path_Sum();
        
        // Test Case 1: root = [1,2,3]
        // Expected: 6 (path: 2 -> 1 -> 3)
        System.out.println("=== Test Case 1 ===");
        TreeNode root1 = new TreeNode(1);
        root1.left = new TreeNode(2);
        root1.right = new TreeNode(3);
        
        System.out.println("Tree structure:");
        printTree(root1, "", true);
        
        int result1 = solution.maxPathSum(root1);
        System.out.println("Input: [1,2,3]");
        System.out.println("Result: " + result1);
        System.out.println("Expected: 6");
        System.out.println("Explanation: Optimal path is 2 -> 1 -> 3 with sum = 2 + 1 + 3 = 6");
        System.out.println("Test 1 " + (result1 == 6 ? "PASSED" : "FAILED"));
        
        // Test alternative method
        int result1_alt = solution.maxPathSumAlternative(root1);
        System.out.println("Alternative method result: " + result1_alt);
        System.out.println();
        
        // Test Case 2: root = [-10,9,20,null,null,15,7]
        // Expected: 42 (path: 15 -> 20 -> 7)
        System.out.println("=== Test Case 2 ===");
        TreeNode root2 = new TreeNode(-10);
        root2.left = new TreeNode(9);
        root2.right = new TreeNode(20);
        root2.right.left = new TreeNode(15);
        root2.right.right = new TreeNode(7);
        
        System.out.println("Tree structure:");
        printTree(root2, "", true);
        
        int result2 = solution.maxPathSum(root2);
        System.out.println("Input: [-10,9,20,null,null,15,7]");
        System.out.println("Result: " + result2);
        System.out.println("Expected: 42");
        System.out.println("Explanation: Optimal path is 15 -> 20 -> 7 with sum = 15 + 20 + 7 = 42");
        System.out.println("Test 2 " + (result2 == 42 ? "PASSED" : "FAILED"));
        
        int result2_alt = solution.maxPathSumAlternative(root2);
        System.out.println("Alternative method result: " + result2_alt);
        System.out.println();
        
        // Test Case 3: Single node with negative value
        System.out.println("=== Test Case 3 ===");
        TreeNode root3 = new TreeNode(-3);
        
        int result3 = solution.maxPathSum(root3);
        System.out.println("Input: [-3]");
        System.out.println("Result: " + result3);
        System.out.println("Expected: -3");
        System.out.println("Test 3 " + (result3 == -3 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 4: All negative values
        System.out.println("=== Test Case 4 ===");
        TreeNode root4 = new TreeNode(-2);
        root4.left = new TreeNode(-1);
        root4.right = new TreeNode(-3);
        
        System.out.println("Tree structure:");
        printTree(root4, "", true);
        
        int result4 = solution.maxPathSum(root4);
        System.out.println("Input: [-2,-1,-3]");
        System.out.println("Result: " + result4);
        System.out.println("Expected: -1 (single node path)");
        System.out.println("Test 4 " + (result4 == -1 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 5: Complex tree
        System.out.println("=== Test Case 5 ===");
        TreeNode root5 = new TreeNode(5);
        root5.left = new TreeNode(4);
        root5.right = new TreeNode(8);
        root5.left.left = new TreeNode(11);
        root5.left.left.left = new TreeNode(7);
        root5.left.left.right = new TreeNode(2);
        root5.right.left = new TreeNode(13);
        root5.right.right = new TreeNode(4);
        root5.right.right.right = new TreeNode(1);
        
        System.out.println("Tree structure:");
        printTree(root5, "", true);
        
        int result5 = solution.maxPathSum(root5);
        System.out.println("Input: [5,4,8,11,null,13,4,7,2,null,null,null,1]");
        System.out.println("Result: " + result5);
        System.out.println("Expected: 48 (path through nodes with values that sum to maximum)");
        System.out.println("Test 5 " + (result5 == 48 ? "PASSED" : "FAILED"));
        
        System.out.println("\n=== Algorithm Analysis ===");
        System.out.println("Key Insights:");
        System.out.println("1. Each node can be considered as a potential 'turning point' in a path");
        System.out.println("2. For each node, max path = node.val + left_gain + right_gain");
        System.out.println("3. But for recursion return, we can only extend through one side");
        System.out.println("4. Use global variable to track maximum across all possible paths");
        System.out.println("\nTime Complexity: O(n) - visit each node once");
        System.out.println("Space Complexity: O(h) - recursion stack depth");
        System.out.println("\nThis is a classic tree DP problem!");
    }
}
