package com.bh;

import java.util.*;

/**
 * LeetCode 542: 01 Matrix
 * 
 * Problem Description:
 * Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
 * The distance between two adjacent cells is 1.
 * 
 * Example:
 * Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
 * Output: [[0,0,0],[0,1,0],[0,0,0]]
 * 
 * Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
 * Output: [[0,0,0],[0,1,0],[1,2,1]]
 * 
 * Approach:
 * 1. BFS (Breadth-First Search) from all 0s simultaneously
 * 2. Dynamic Programming approach
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
public class no0542_01_Matrix {

    public static void main(String[] args) {
        Solution solution = new Solution();
        Solution2 solution2 = new Solution2();

        // Example 1
        int[][] mat1 = {{0,0,0},{0,1,0},{0,0,0}};
        int[][] result1 = solution.updateMatrix(mat1);
        System.out.println("=== Example 1 (BFS) ===");
        System.out.println("Input: [[0,0,0],[0,1,0],[0,0,0]]");
        System.out.print("Output: ");
        printMatrix(result1);
        System.out.println("Expected: [[0,0,0],[0,1,0],[0,0,0]]");
        System.out.println();

        // Example 2
        int[][] mat2 = {{0,0,0},{0,1,0},{1,1,1}};
        int[][] result2 = solution2.updateMatrix(mat2);
        System.out.println("=== Example 2 (DP) ===");
        System.out.println("Input: [[0,0,0],[0,1,0],[1,1,1]]");
        System.out.print("Output: ");
        printMatrix(result2);
        System.out.println("Expected: [[0,0,0],[0,1,0],[1,2,1]]");
        System.out.println();

        // Additional test case
        int[][] mat3 = {{1,1,1},{1,1,1},{1,1,0}};
        int[][] result3 = solution.updateMatrix(mat3);
        System.out.println("=== Additional Test (BFS) ===");
        System.out.println("Input: [[1,1,1],[1,1,1],[1,1,0]]");
        System.out.print("Output: ");
        printMatrix(result3);
        System.out.println("Expected: [[4,3,2],[3,2,1],[2,1,0]]");
        System.out.println();
    }

    // ========== Solution 1: BFS Approach ==========
    /**
     * Solution 1: Multi-source BFS
     * 
     * Algorithm:
     * 1. Initialize all 0s as distance 0 and add them to queue
     * 2. Initialize all 1s as MAX_VALUE (infinity)
     * 3. Use BFS to propagate distances from all 0s simultaneously
     * 4. For each cell, update distance if we find a shorter path
     * 
     * Time Complexity: O(m * n)
     * Space Complexity: O(m * n)
     */
    static class Solution {
        private static final int[][] DIRECTIONS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        public int[][] updateMatrix(int[][] mat) {
            int m = mat.length;
            int n = mat[0].length;
            
            // Initialize result matrix
            int[][] result = new int[m][n];
            Queue<int[]> queue = new LinkedList<>();
            
            // Step 1: Initialize distances and add all 0s to queue
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (mat[i][j] == 0) {
                        result[i][j] = 0;
                        queue.offer(new int[]{i, j});
                    } else {
                        result[i][j] = Integer.MAX_VALUE;
                    }
                }
            }
            
            // Step 2: BFS from all 0s simultaneously
            while (!queue.isEmpty()) {
                int[] cell = queue.poll();
                int row = cell[0];
                int col = cell[1];
                
                // Check all 4 directions
                for (int[] dir : DIRECTIONS) {
                    int newRow = row + dir[0];
                    int newCol = col + dir[1];
                    
                    // Check bounds
                    if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n) {
                        // If we found a shorter path, update distance
                        if (result[newRow][newCol] > result[row][col] + 1) {
                            result[newRow][newCol] = result[row][col] + 1;
                            queue.offer(new int[]{newRow, newCol});
                        }
                    }
                }
            }
            
            return result;
        }
    }

    // ========== Solution 2: Dynamic Programming Approach ==========
    /**
     * Solution 2: Dynamic Programming (Two-pass)
     * 
     * Algorithm:
     * 1. First pass: top-left to bottom-right
     *    - For each cell, update distance based on top and left neighbors
     * 2. Second pass: bottom-right to top-left
     *    - For each cell, update distance based on bottom and right neighbors
     * 
     * Time Complexity: O(m * n)
     * Space Complexity: O(1) excluding the result array
     */
    static class Solution2 {
        public int[][] updateMatrix(int[][] mat) {
            int m = mat.length;
            int n = mat[0].length;
            
            // Initialize result matrix
            int[][] result = new int[m][n];
            
            // Step 1: Initialize distances
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (mat[i][j] == 0) {
                        result[i][j] = 0;
                    } else {
                        result[i][j] = Integer.MAX_VALUE - 1; // Avoid overflow
                    }
                }
            }
            
            // Step 2: First pass - top-left to bottom-right
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (result[i][j] != 0) {
                        // Check top neighbor
                        if (i > 0) {
                            result[i][j] = Math.min(result[i][j], result[i-1][j] + 1);
                        }
                        // Check left neighbor
                        if (j > 0) {
                            result[i][j] = Math.min(result[i][j], result[i][j-1] + 1);
                        }
                    }
                }
            }
            
            // Step 3: Second pass - bottom-right to top-left
            for (int i = m - 1; i >= 0; i--) {
                for (int j = n - 1; j >= 0; j--) {
                    if (result[i][j] != 0) {
                        // Check bottom neighbor
                        if (i < m - 1) {
                            result[i][j] = Math.min(result[i][j], result[i+1][j] + 1);
                        }
                        // Check right neighbor
                        if (j < n - 1) {
                            result[i][j] = Math.min(result[i][j], result[i][j+1] + 1);
                        }
                    }
                }
            }
            
            return result;
        }
    }

    // ========== Helper Method ==========
    /**
     * Print matrix in a readable format
     */
    public static void printMatrix(int[][] matrix) {
        System.out.print("[");
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("[");
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j]);
                if (j < matrix[i].length - 1) System.out.print(",");
            }
            System.out.print("]");
            if (i < matrix.length - 1) System.out.print(",");
        }
        System.out.println("]");
    }
}
