package com.bh;

/**
 * LeetCode 48: Rotate Image
 * 
 * Problem Description:
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
 * You have to rotate the image in-place, which means you have to modify the input 2D matrix directly.
 * DO NOT allocate another 2D matrix and do the rotation.
 * 
 * Example:
 * Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
 * Output: [[7,4,1],[8,5,2],[9,6,3]]
 * 
 * Visual representation:
 * Original:        After 90° clockwise rotation:
 * [1, 2, 3]       [7, 4, 1]
 * [4, 5, 6]  →    [8, 5, 2]
 * [7, 8, 9]       [9, 6, 3]
 * 
 * Approach - Layer by Layer Rotation:
 * 1. Process the matrix layer by layer from outside to inside
 * 2. For each layer, rotate 4 elements at a time in a cycle
 * 3. Use temp variable to perform 4-way swap: top→right→bottom→left→top
 * 
 * Key Insight:
 * For a 90° clockwise rotation, element at (i,j) goes to (j, n-1-i)
 * We can identify 4 elements that form a cycle and swap them simultaneously
 * 
 * Time Complexity: O(N²) where N is the side length of the matrix
 * Space Complexity: O(1) - in-place rotation
 */
public class no0048_Rotate_Image {
    static
    class Solution {
        /**
         * Rotate the matrix 90 degrees clockwise in-place using layer-by-layer approach
         * 
         * Algorithm:
         * 1. Process matrix in concentric layers from outside to inside
         * 2. For each layer, iterate through elements that need rotation
         * 3. Perform 4-way cyclic swap for each group of 4 elements
         * 
         * @param matrix n x n 2D matrix to be rotated
         */
        public void rotate(int[][] matrix) {
            int n = matrix.length;
            
            // Process each layer of the matrix
            // (n + 1) / 2 handles both odd and even sized matrices
            // For odd n: processes (n+1)/2 layers, for even n: processes n/2 layers
            for (int i = 0; i < (n + 1) / 2; i++) {
                
                // For each layer, process n/2 elements (half of the layer)
                // We only need to process half because each operation affects 4 elements
                for (int j = 0; j < n / 2; j++) {
                    
                    // Perform 4-way cyclic rotation
                    // Save the top-left element of the current 4-element cycle
                    int temp = matrix[n - 1 - j][i];
                    
                    // Step 1: Move bottom-left to top-left position
                    matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
                    
                    // Step 2: Move bottom-right to bottom-left position  
                    matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];
                    
                    // Step 3: Move top-right to bottom-right position
                    matrix[j][n - 1 - i] = matrix[i][j];
                    
                    // Step 4: Move saved top-left (temp) to top-right position
                    matrix[i][j] = temp;
                    
                    /*
                     * Coordinate transformation for 90° clockwise rotation:
                     * (i,j) → (j, n-1-i) → (n-1-i, n-1-j) → (n-1-j, i) → (i,j)
                     * 
                     * Example for 3x3 matrix at i=0, j=0:
                     * (0,0) → (0,2) → (2,2) → (2,0) → (0,0)
                     * Values: 1 → 3 → 9 → 7 → 1
                     */
                }
            }

            System.out.println("OUTPUT:");
            showMatrix(matrix);
        }
    }

    /**
     * Helper method to display matrix in readable format
     * 
     * @param matrix 2D matrix to be displayed
     */
    public static void showMatrix(int[][] matrix) {
        for (int i = 0; i < matrix.length; i++) {
            int[] row = matrix[i];
            for (int j = 0; j < row.length; j++) {
                System.out.print(row[j] + ",");
            }
            System.out.print("\n");
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1: 3x3 matrix
        System.out.println("=== Example 1: 3x3 Matrix ===");
        int[][] matrix1 = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("INPUT:");
        showMatrix(matrix1);
        solution.rotate(matrix1);
        System.out.println("Expected: [[7,4,1],[8,5,2],[9,6,3]]");
        System.out.println();

        // Example 2: 4x4 matrix
        System.out.println("=== Example 2: 4x4 Matrix ===");
        int[][] matrix2 = {{5, 1, 9, 11}, {2, 4, 8, 10}, {13, 3, 6, 7}, {15, 14, 12, 16}};
        System.out.println("INPUT:");
        showMatrix(matrix2);
        solution.rotate(matrix2);
        System.out.println("Expected: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]");
        System.out.println();

        // Example 3: 2x2 matrix
        System.out.println("=== Example 3: 2x2 Matrix ===");
        int[][] matrix3 = {{1, 2}, {3, 4}};
        System.out.println("INPUT:");
        showMatrix(matrix3);
        solution.rotate(matrix3);
        System.out.println("Expected: [[3,1],[4,2]]");
        System.out.println();

        // Example 4: 1x1 matrix (edge case)
        System.out.println("=== Example 4: 1x1 Matrix ===");
        int[][] matrix4 = {{1}};
        System.out.println("INPUT:");
        showMatrix(matrix4);
        solution.rotate(matrix4);
        System.out.println("Expected: [[1]]");
    }
}
