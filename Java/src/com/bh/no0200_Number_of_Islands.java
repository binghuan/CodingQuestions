package com.bh;

/**
 * LeetCode 200: Number of Islands
 * Given a 2D grid map of '1's (land) and '0's (water), count the number of islands.
 * An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
 *
 * Approach:
 * - Traverse the grid. When a '1' is found, increment the island count and use DFS to mark all connected '1's as '0'.
 * - This prevents counting the same island multiple times.
 */
public class no0200_Number_of_Islands {
    static
    class Solution {
        /**
         * Returns the number of islands in the given grid.
         * @param grid 2D grid of '1's (land) and '0's (water)
         * @return number of islands
         */
        public int numIslands(char[][] grid) {
            int totalIslands = 0;
            int width = grid.length;
            int height = grid[0].length;
            // Traverse every cell in the grid
            for (int x = 0; x < width; x++) {
                for (int y = 0; y < height; y++) {
                    // If a land cell is found, it's a new island
                    if (grid[x][y] == '1') {
                        totalIslands += 1;
                        // Use DFS to mark all connected land as visited
                        dfs(grid, x, y, width, height);
                    }
                }
            }
            return totalIslands;
        }

        /**
         * Depth-First Search to mark all connected land ('1') as water ('0').
         * @param grid the grid
         * @param x current row
         * @param y current column
         * @param width number of rows
         * @param height number of columns
         */
        private void dfs(char[][] grid, int x, int y, final int width, final int height) {
            // If out of bounds or at water, stop
            if (x < 0 || y < 0 || x >= width || y >= height || grid[x][y] == '0') {
                return;
            }
            // Mark current cell as visited (set to '0')
            grid[x][y] = '0';
            // Visit all 4 adjacent cells
            dfs(grid, x - 1, y, width, height); // up
            dfs(grid, x + 1, y, width, height); // down
            dfs(grid, x, y - 1, width, height); // left
            dfs(grid, x, y + 1, width, height); // right
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        // Example grid
        char[][] grid = {
                {'1', '1', '1', '1', '0'},
                {'1', '1', '0', '1', '0'},
                {'1', '1', '0', '0', '0'},
                {'0', '0', '0', '0', '0'}
        };
        int result = solution.numIslands(grid);
        System.out.println("Number of islands: " + result); // Expected: 1
    }
}



