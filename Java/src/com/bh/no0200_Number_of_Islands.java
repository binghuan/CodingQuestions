package com.bh;

public class no0200_Number_of_Islands {
    static
    class Solution {
        public int numIslands(char[][] grid) {

            int totalIslands = 0;

            int width = grid.length;
            int height = grid[0].length;
            for (int x = 0; x < width; x++) {
                for (int y = 0; y < height; y++) {
                    if (grid[x][y] == '1') {
                        totalIslands += 1;
                    }
                    dfs(grid, x, y, width, height);
                }
            }

            return totalIslands;
        }

        private void dfs(char[][] grid, int x, int y, final int width, final int height) {
            if (x < 0 || y < 0 || x >= width || y >= height || grid[x][y] == '0') {
                return;
            }

            grid[x][y] = '0';
            dfs(grid, x - 1, y, width, height);
            dfs(grid, x + 1, y, width, height);
            dfs(grid, x, y - 1, width, height);
            dfs(grid, x, y + 1, width, height);
        }
    }

    public static void main(String[] args) {

        Solution solution = new Solution();

        char[][] grid = {
                {'1', '1', '1', '1', '0'},
                {'1', '1', '0', '1', '0'},
                {'1', '1', '0', '0', '0'},
                {'0', '0', '0', '0', '0'}
        };
        solution.numIslands(grid);
    }

}



