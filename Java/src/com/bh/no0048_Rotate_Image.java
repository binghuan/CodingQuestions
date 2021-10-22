package com.bh;

public class no0048_Rotate_Image {
    static
    class Solution {
        public void rotate(int[][] matrix) {
            int n = matrix.length;
            for (int i = 0; i < (n + 1) / 2; i++) {
                for (int j = 0; j < n / 2; j++) {
                    int temp = matrix[n - 1 - j][i];
                    matrix[n - 1 - j][i] = matrix[n - 1 - i][n - j - 1];
                    matrix[n - 1 - i][n - j - 1] = matrix[j][n - 1 - i];//
                    matrix[j][n - 1 - i] = matrix[i][j];                // [0,2]
                    matrix[i][j] = temp;                                // [0,0]
                }
            }

            System.out.println("OUTPUT:");
            showMatrix(matrix);
        }
    }

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

        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

        System.out.println("INPUT:");
        showMatrix(matrix);
        solution.rotate(matrix);
    }
}
