package com.bh;

import java.util.*;

/**
 * LeetCode 1926: Nearest Exit from Entrance in Maze
 * 
 * Problem Description:
 * You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') 
 * and walls (represented as '+'). You are also given the entrance of the maze, where 
 * entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are 
 * initially standing at.
 * 
 * In one step, you can move one cell up, down, left, or right. You cannot step into a 
 * cell with a wall, and you cannot step outside the maze. Your goal is to find the 
 * nearest exit from the entrance. An exit is defined as an empty cell that is at the 
 * border of the maze. The entrance does not count as an exit.
 * 
 * Return the number of steps in the shortest path from the entrance to the nearest exit, 
 * or -1 if no such path exists.
 * 
 * Example 1:
 * Input: maze = [["+","+",".","+"],[".",".",".","+"],["+","+","+","."]], entrance = [1,2]
 * Output: 1
 * 
 * Example 2:
 * Input: maze = [["+","+","+"],[".",".","."],["+","+","+"]], entrance = [1,0]
 * Output: 2
 * 
 * Example 3:
 * Input: maze = [[".","+"]], entrance = [0,0]
 * Output: -1
 * 
 * Solution Approach - BFS (Breadth-First Search):
 * Since we need to find the shortest path, BFS is optimal as it explores all nodes 
 * at distance k before exploring nodes at distance k+1.
 * 
 * Algorithm Steps:
 * 1. Use BFS starting from the entrance
 * 2. For each cell, explore all 4 directions (up, down, left, right)
 * 3. Check if the current cell is an exit (border cell, not entrance)
 * 4. Track visited cells to avoid cycles
 * 5. Return steps when first exit is found (guaranteed shortest)
 * 
 * Time Complexity: O(m × n) - visit each cell at most once
 * Space Complexity: O(m × n) - queue and visited set
 */
public class no1926_Nearest_Exit_from_Entrance_in_Maze {

    static class Solution {
        
        // Direction vectors for movement: up, down, left, right
        private static final int[][] DIRECTIONS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
        
        /**
         * Find the minimum steps from entrance to the nearest exit using BFS
         * 
         * @param maze m x n grid with '.' (empty) and '+' (wall)
         * @param entrance Starting position [row, col]
         * @return Minimum steps to reach nearest exit, or -1 if no exit reachable
         */
        public int nearestExit(char[][] maze, int[] entrance) {
            int rows = maze.length;
            int cols = maze[0].length;
            
            // Initialize BFS queue with (row, col, steps)
            Queue<int[]> queue = new LinkedList<>();
            queue.offer(new int[]{entrance[0], entrance[1], 0});
            
            // Track visited cells to avoid cycles
            boolean[][] visited = new boolean[rows][cols];
            visited[entrance[0]][entrance[1]] = true;
            
            // BFS traversal
            while (!queue.isEmpty()) {
                int[] current = queue.poll();
                int currentRow = current[0];
                int currentCol = current[1];
                int steps = current[2];
                
                // Explore all 4 directions
                for (int[] direction : DIRECTIONS) {
                    int newRow = currentRow + direction[0];
                    int newCol = currentCol + direction[1];
                    
                    // Check if new position is valid and not visited
                    if (isValidCell(newRow, newCol, maze) && !visited[newRow][newCol]) {
                        
                        // Check if this is an exit
                        if (isExit(newRow, newCol, maze, entrance)) {
                            return steps + 1;
                        }
                        
                        // Mark as visited and add to queue
                        visited[newRow][newCol] = true;
                        queue.offer(new int[]{newRow, newCol, steps + 1});
                    }
                }
            }
            
            // No exit found
            return -1;
        }
        
        /**
         * Check if a cell is valid (within bounds and not a wall)
         * 
         * @param row Row index
         * @param col Column index  
         * @param maze The maze grid
         * @return True if cell is valid (within bounds and empty), False otherwise
         */
        private boolean isValidCell(int row, int col, char[][] maze) {
            int rows = maze.length;
            int cols = maze[0].length;
            return (row >= 0 && row < rows && 
                    col >= 0 && col < cols && 
                    maze[row][col] == '.');
        }
        
        /**
         * Check if a cell is on the border of the maze
         * 
         * @param row Row index
         * @param col Column index
         * @param maze The maze grid
         * @return True if cell is on the border, False otherwise
         */
        private boolean isBorderCell(int row, int col, char[][] maze) {
            int rows = maze.length;
            int cols = maze[0].length;
            return (row == 0 || row == rows - 1 || 
                    col == 0 || col == cols - 1);
        }
        
        /**
         * Check if a cell qualifies as an exit
         * 
         * An exit is defined as:
         * 1. Empty cell (maze[row][col] == '.')
         * 2. Border cell (on the edge of the maze)  
         * 3. Not the entrance (different from starting position)
         * 
         * @param row Row index
         * @param col Column index
         * @param maze The maze grid
         * @param entrance Starting position [row, col]
         * @return True if cell is a valid exit, False otherwise
         */
        private boolean isExit(int row, int col, char[][] maze, int[] entrance) {
            // Must be a valid empty cell
            if (!isValidCell(row, col, maze)) {
                return false;
            }
            
            // Must be on the border
            if (!isBorderCell(row, col, maze)) {
                return false;
            }
            
            // Must not be the entrance
            if (row == entrance[0] && col == entrance[1]) {
                return false;
            }
            
            return true;
        }
    }

    
    /**
     * Helper method to print maze in a readable format
     */
    public static void printMaze(char[][] maze, int[] entrance) {
        System.out.println("Maze visualization (S = Start):");
        for (int i = 0; i < maze.length; i++) {
            for (int j = 0; j < maze[0].length; j++) {
                if (i == entrance[0] && j == entrance[1]) {
                    System.out.print("S ");
                } else {
                    System.out.print(maze[i][j] + " ");
                }
            }
            System.out.println();
        }
        System.out.println();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test Case 1: Example 1 from problem
        System.out.println("=== Test Case 1: Example 1 ===");
        char[][] maze1 = {
            {'+', '+', '.', '+'},
            {'.', '.', '.', '+'},
            {'+', '+', '+', '.'}
        };
        int[] entrance1 = {1, 2};
        printMaze(maze1, entrance1);
        int result1 = solution.nearestExit(maze1, entrance1);
        System.out.println("Entrance: [" + entrance1[0] + ", " + entrance1[1] + "]");
        System.out.println("Expected: 1, Got: " + result1);
        System.out.println("✓ PASS" + (result1 == 1 ? "" : " ✗ FAIL"));
        System.out.println();

        // Test Case 2: Example 2 from problem  
        System.out.println("=== Test Case 2: Example 2 ===");
        char[][] maze2 = {
            {'+', '+', '+'},
            {'.', '.', '.'},
            {'+', '+', '+'}
        };
        int[] entrance2 = {1, 0};
        printMaze(maze2, entrance2);
        int result2 = solution.nearestExit(maze2, entrance2);
        System.out.println("Entrance: [" + entrance2[0] + ", " + entrance2[1] + "]");
        System.out.println("Expected: 2, Got: " + result2);
        System.out.println("✓ PASS" + (result2 == 2 ? "" : " ✗ FAIL"));
        System.out.println();

        // Test Case 3: Example 3 from problem
        System.out.println("=== Test Case 3: Example 3 ===");
        char[][] maze3 = {
            {'.', '+'}
        };
        int[] entrance3 = {0, 0};
        printMaze(maze3, entrance3);
        int result3 = solution.nearestExit(maze3, entrance3);
        System.out.println("Entrance: [" + entrance3[0] + ", " + entrance3[1] + "]");
        System.out.println("Expected: -1, Got: " + result3);
        System.out.println("✓ PASS" + (result3 == -1 ? "" : " ✗ FAIL"));
        System.out.println();

        // Test Case 4: Single cell (edge case)
        System.out.println("=== Test Case 4: Single Cell ===");
        char[][] maze4 = {
            {'.'}
        };
        int[] entrance4 = {0, 0};
        printMaze(maze4, entrance4);
        int result4 = solution.nearestExit(maze4, entrance4);
        System.out.println("Entrance: [" + entrance4[0] + ", " + entrance4[1] + "]");
        System.out.println("Expected: -1, Got: " + result4 + " (entrance doesn't count as exit)");
        System.out.println("✓ PASS" + (result4 == -1 ? "" : " ✗ FAIL"));
        System.out.println();

        // Test Case 5: Multiple exits, different distances
        System.out.println("=== Test Case 5: Multiple Exits ===");
        char[][] maze5 = {
            {'.', '.', '.', '.'},
            {'.', '+', '+', '.'},
            {'.', '+', '+', '.'},
            {'.', '.', '.', '.'}
        };
        int[] entrance5 = {2, 2};
        printMaze(maze5, entrance5);
        int result5 = solution.nearestExit(maze5, entrance5);
        System.out.println("Entrance: [" + entrance5[0] + ", " + entrance5[1] + "]");
        System.out.println("Expected: 2, Got: " + result5 + " (can reach border in 2 steps)");
        System.out.println("✓ PASS" + (result5 == 2 ? "" : " ✗ FAIL"));
        System.out.println();

        // Test Case 6: No exit possible
        System.out.println("=== Test Case 6: No Exit Possible ===");
        char[][] maze6 = {
            {'+', '+', '+'},
            {'+', '.', '+'},
            {'+', '+', '+'}
        };
        int[] entrance6 = {1, 1};
        printMaze(maze6, entrance6);
        int result6 = solution.nearestExit(maze6, entrance6);
        System.out.println("Entrance: [" + entrance6[0] + ", " + entrance6[1] + "]");
        System.out.println("Expected: -1, Got: " + result6 + " (completely surrounded by walls)");
        System.out.println("✓ PASS" + (result6 == -1 ? "" : " ✗ FAIL"));
        System.out.println();
        
        System.out.println("=== Summary ===");
        System.out.println("Algorithm: BFS (Breadth-First Search)");
        System.out.println("Time Complexity: O(m × n)");
        System.out.println("Space Complexity: O(m × n)");
        System.out.println("Key Insight: BFS guarantees shortest path for unweighted graphs");
    }
}
