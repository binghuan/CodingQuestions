package com.bh;

import java.util.*;

/**
 * LeetCode 286: Walls and Gates
 * 
 * Problem Description:
 * You are given an m x n grid rooms initialized with these three possible values:
 * -1: A wall or an obstacle.
 * 0: A gate.
 * INF: Infinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent INF.
 * 
 * Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate,
 * it should be filled with INF.
 * 
 * Example:
 * Input: rooms = [[2147483647,-1,0,2147483647],[2147483647,2147483647,2147483647,-1],[2147483647,-1,2147483647,-1],[0,-1,2147483647,2147483647]]
 * Output: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]
 * 
 * Approach:
 * 1. Multi-source BFS: Start BFS from all gates simultaneously
 * 2. DFS with memoization: For each empty room, find the minimum distance to any gate
 * 
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 */
public class no0286_Walls_and_Gates {
    
    private static final int INF = Integer.MAX_VALUE;
    private static final int WALL = -1;
    private static final int GATE = 0;
    private static final int[][] DIRECTIONS = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};

    public static void main(String[] args) {
        Solution solution = new Solution();
        Solution2 solution2 = new Solution2();

        // Example 1
        int[][] rooms1 = {
            {INF, WALL, GATE, INF},
            {INF, INF, INF, WALL},
            {INF, WALL, INF, WALL},
            {GATE, WALL, INF, INF}
        };
        
        System.out.println("=== Example 1 (BFS) ===");
        System.out.println("Input:");
        printMatrix(rooms1);
        
        int[][] result1 = copyMatrix(rooms1);
        solution.wallsAndGates(result1);
        System.out.println("Output:");
        printMatrix(result1);
        System.out.println("Expected: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]");
        System.out.println();

        // Example 2 with DFS approach
        int[][] rooms2 = {
            {INF, WALL, GATE, INF},
            {INF, INF, INF, WALL},
            {INF, WALL, INF, WALL},
            {GATE, WALL, INF, INF}
        };
        
        System.out.println("=== Example 2 (DFS) ===");
        System.out.println("Input:");
        printMatrix(rooms2);
        
        solution2.wallsAndGates(rooms2);
        System.out.println("Output:");
        printMatrix(rooms2);
        System.out.println("Expected: [[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]");
        System.out.println();

        // Additional test case: No gates
        int[][] rooms3 = {
            {INF, WALL, INF},
            {INF, INF, WALL},
            {WALL, INF, INF}
        };
        
        System.out.println("=== Additional Test: No Gates ===");
        System.out.println("Input:");
        printMatrix(rooms3);
        
        int[][] result3 = copyMatrix(rooms3);
        solution.wallsAndGates(result3);
        System.out.println("Output:");
        printMatrix(result3);
        System.out.println("Expected: All INF values remain unchanged");
        System.out.println();

        // Additional test case: Single gate
        int[][] rooms4 = {
            {INF, INF, INF},
            {INF, GATE, INF},
            {INF, INF, INF}
        };
        
        System.out.println("=== Additional Test: Single Gate ===");
        System.out.println("Input:");
        printMatrix(rooms4);
        
        int[][] result4 = copyMatrix(rooms4);
        solution.wallsAndGates(result4);
        System.out.println("Output:");
        printMatrix(result4);
        System.out.println("Expected: [[2,1,2],[1,0,1],[2,1,2]]");
        System.out.println();
    }

    // ========== Solution 1: Multi-source BFS (Optimal) ==========
    /**
     * Solution 1: Multi-source BFS
     * 
     * Algorithm:
     * 1. Add all gates to the queue as starting points
     * 2. Use BFS to propagate distances from all gates simultaneously
     * 3. For each cell, update distance if we find a shorter path
     * 4. Only process empty rooms (INF values)
     * 
     * Time Complexity: O(m * n)
     * Space Complexity: O(m * n) for the queue
     */
    static class Solution {
        public void wallsAndGates(int[][] rooms) {
            if (rooms == null || rooms.length == 0 || rooms[0].length == 0) {
                return;
            }
            
            int m = rooms.length;
            int n = rooms[0].length;
            Queue<int[]> queue = new LinkedList<>();
            
            // Step 1: Add all gates to queue
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (rooms[i][j] == GATE) {
                        queue.offer(new int[]{i, j});
                    }
                }
            }
            
            // Step 2: BFS from all gates simultaneously
            while (!queue.isEmpty()) {
                int[] cell = queue.poll();
                int row = cell[0];
                int col = cell[1];
                
                // Check all 4 directions
                for (int[] dir : DIRECTIONS) {
                    int newRow = row + dir[0];
                    int newCol = col + dir[1];
                    
                    // Check bounds and if it's an empty room
                    if (newRow >= 0 && newRow < m && newCol >= 0 && newCol < n 
                        && rooms[newRow][newCol] == INF) {
                        
                        // Update distance
                        rooms[newRow][newCol] = rooms[row][col] + 1;
                        queue.offer(new int[]{newRow, newCol});
                    }
                }
            }
        }
    }

    // ========== Solution 2: DFS Approach ==========
    /**
     * Solution 2: DFS from each gate
     * 
     * Algorithm:
     * 1. For each gate, start DFS to fill distances
     * 2. Use DFS to explore all reachable empty rooms
     * 3. Update distance only if we find a shorter path
     * 
     * Time Complexity: O(m * n * k) where k is the number of gates
     * Space Complexity: O(m * n) for recursion stack
     */
    static class Solution2 {
        public void wallsAndGates(int[][] rooms) {
            if (rooms == null || rooms.length == 0 || rooms[0].length == 0) {
                return;
            }
            
            int m = rooms.length;
            int n = rooms[0].length;
            
            // Start DFS from each gate
            for (int i = 0; i < m; i++) {
                for (int j = 0; j < n; j++) {
                    if (rooms[i][j] == GATE) {
                        dfs(rooms, i, j, 0);
                    }
                }
            }
        }
        
        /**
         * DFS to fill distances from a gate
         * 
         * @param rooms the grid
         * @param row current row
         * @param col current column
         * @param distance current distance from gate
         */
        private void dfs(int[][] rooms, int row, int col, int distance) {
            int m = rooms.length;
            int n = rooms[0].length;
            
            // Check bounds and if current cell can be updated
            if (row < 0 || row >= m || col < 0 || col >= n || rooms[row][col] < distance) {
                return;
            }
            
            // Update distance
            rooms[row][col] = distance;
            
            // Explore all 4 directions
            for (int[] dir : DIRECTIONS) {
                dfs(rooms, row + dir[0], col + dir[1], distance + 1);
            }
        }
    }

    // ========== Helper Methods ==========
    
    /**
     * Create a deep copy of the matrix
     */
    public static int[][] copyMatrix(int[][] original) {
        int[][] copy = new int[original.length][];
        for (int i = 0; i < original.length; i++) {
            copy[i] = original[i].clone();
        }
        return copy;
    }
    
    /**
     * Print matrix in a readable format
     */
    public static void printMatrix(int[][] matrix) {
        System.out.print("[");
        for (int i = 0; i < matrix.length; i++) {
            System.out.print("[");
            for (int j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == INF) {
                    System.out.print("INF");
                } else {
                    System.out.print(matrix[i][j]);
                }
                if (j < matrix[i].length - 1) System.out.print(",");
            }
            System.out.print("]");
            if (i < matrix.length - 1) System.out.print(",");
        }
        System.out.println("]");
    }
}
