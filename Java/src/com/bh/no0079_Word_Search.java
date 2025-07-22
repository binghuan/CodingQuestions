
package com.bh;

/**
 * LeetCode 79: Word Search
 * 
 * Problem: Given an m x n grid of characters board and a string word, return true if word exists in the grid.
 * The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are 
 * horizontally or vertically neighboring. The same letter cell may not be used more than once.
 * 
 * 題目：給定一個 m x n 的字符網格板和一個字符串單詞，如果單詞存在於網格中則返回 true。
 * 單詞可以由順序相鄰的單元格字母構成，其中相鄰單元格是水平或垂直相鄰的。
 * 同一字母單元格不能多次使用。
 * 
 * Solution Approach: DFS with Backtracking
 * 解決方法：DFS回溯
 * 
 * Algorithm:
 * 1. For each cell in the board, try to start the word search from that position
 * 2. Use DFS to explore all 4 directions (up, down, left, right)
 * 3. Mark visited cells temporarily and backtrack after exploration
 * 4. If we successfully match the entire word, return true
 * 
 * 算法步驟：
 * 1. 對於板上的每個單元格，嘗試從該位置開始單詞搜索
 * 2. 使用DFS探索所有4個方向（上、下、左、右）
 * 3. 臨時標記已訪問的單元格，探索後回溯
 * 4. 如果我們成功匹配整個單詞，返回true
 * 
 * Time Complexity: O(N * 4^L) where N is board cells, L is word length
 * Space Complexity: O(L) for recursion stack
 * 
 * 時間複雜度：O(N * 4^L)，其中N是板單元格數，L是單詞長度
 * 空間複雜度：O(L)，用於遞歸棧
 */
public class no0079_Word_Search {

    /**
     * Main method to check if word exists in the board
     * 檢查單詞是否存在於板中的主方法
     */
    public boolean exist(char[][] board, String word) {
        if (board == null || board.length == 0 || board[0].length == 0) {
            return false;
        }
        
        if (word == null || word.length() == 0) {
            return true;
        }
        
        int rows = board.length;
        int cols = board[0].length;
        
        // Try starting the search from each cell
        // 嘗試從每個單元格開始搜索
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (dfs(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    /**
     * DFS helper method with backtracking
     * DFS回溯輔助方法
     * 
     * @param board the character grid
     * @param word the target word to search
     * @param row current row position
     * @param col current column position
     * @param index current character index in the word
     * @return true if word can be formed starting from this position
     */
    private boolean dfs(char[][] board, String word, int row, int col, int index) {
        // Base case: we've matched the entire word
        // 基礎情況：我們已經匹配了整個單詞
        if (index == word.length()) {
            return true;
        }
        
        // Check bounds and character match
        // 檢查邊界和字符匹配
        if (row < 0 || row >= board.length || 
            col < 0 || col >= board[0].length || 
            board[row][col] != word.charAt(index)) {
            return false;
        }
        
        // Mark current cell as visited by temporarily changing it
        // 通過臨時更改來標記當前單元格為已訪問
        char originalChar = board[row][col];
        board[row][col] = '#'; // Use a character that won't be in the input
        
        // Explore all 4 directions: up, down, left, right
        // 探索所有4個方向：上、下、左、右
        boolean found = dfs(board, word, row - 1, col, index + 1) ||  // up 上
                       dfs(board, word, row + 1, col, index + 1) ||  // down 下
                       dfs(board, word, row, col - 1, index + 1) ||  // left 左
                       dfs(board, word, row, col + 1, index + 1);    // right 右
        
        // Backtrack: restore the original character
        // 回溯：恢復原始字符
        board[row][col] = originalChar;
        
        return found;
    }
    
    /**
     * Alternative implementation using boolean visited array
     * 使用布爾訪問數組的替代實現
     */
    public boolean existWithVisitedArray(char[][] board, String word) {
        if (board == null || board.length == 0 || board[0].length == 0) {
            return false;
        }
        
        int rows = board.length;
        int cols = board[0].length;
        boolean[][] visited = new boolean[rows][cols];
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (dfsWithVisited(board, word, i, j, 0, visited)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    /**
     * DFS helper with explicit visited array
     * 使用顯式訪問數組的DFS輔助方法
     */
    private boolean dfsWithVisited(char[][] board, String word, int row, int col, 
                                  int index, boolean[][] visited) {
        if (index == word.length()) {
            return true;
        }
        
        if (row < 0 || row >= board.length || 
            col < 0 || col >= board[0].length || 
            visited[row][col] || 
            board[row][col] != word.charAt(index)) {
            return false;
        }
        
        visited[row][col] = true;
        
        boolean found = dfsWithVisited(board, word, row - 1, col, index + 1, visited) ||
                       dfsWithVisited(board, word, row + 1, col, index + 1, visited) ||
                       dfsWithVisited(board, word, row, col - 1, index + 1, visited) ||
                       dfsWithVisited(board, word, row, col + 1, index + 1, visited);
        
        visited[row][col] = false; // Backtrack
        
        return found;
    }
    
    /**
     * Optimized version with early pruning
     * 帶有早期剪枝的優化版本
     */
    public boolean existOptimized(char[][] board, String word) {
        if (board == null || board.length == 0 || board[0].length == 0) {
            return false;
        }
        
        // Count characters in board and word for early pruning
        // 統計板和單詞中的字符以進行早期剪枝
        int[] boardCount = new int[256];
        int[] wordCount = new int[256];
        
        // Count characters in board
        // 統計板中的字符
        for (char[] row : board) {
            for (char c : row) {
                boardCount[c]++;
            }
        }
        
        // Count characters in word
        // 統計單詞中的字符
        for (char c : word.toCharArray()) {
            wordCount[c]++;
        }
        
        // Early pruning: if word has more of any character than board, return false
        // 早期剪枝：如果單詞中任何字符的數量超過板中的數量，返回false
        for (int i = 0; i < 256; i++) {
            if (wordCount[i] > boardCount[i]) {
                return false;
            }
        }
        
        int rows = board.length;
        int cols = board[0].length;
        
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (dfs(board, word, i, j, 0)) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    /**
     * Helper method to print board for debugging
     * 用於調試的打印板輔助方法
     */
    public static void printBoard(char[][] board) {
        System.out.println("Board:");
        for (char[] row : board) {
            System.out.print("[");
            for (int i = 0; i < row.length; i++) {
                System.out.print("\"" + row[i] + "\"");
                if (i < row.length - 1) System.out.print(",");
            }
            System.out.println("]");
        }
    }
    
    public static void main(String[] args) {
        no0079_Word_Search solution = new no0079_Word_Search();
        
        // Test Case 1: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
        // Expected: true
        System.out.println("=== Test Case 1 ===");
        char[][] board1 = {
            {'A', 'B', 'C', 'E'},
            {'S', 'F', 'C', 'S'},
            {'A', 'D', 'E', 'E'}
        };
        String word1 = "ABCCED";
        
        printBoard(board1);
        System.out.println("Word: \"" + word1 + "\"");
        
        boolean result1 = solution.exist(board1, word1);
        System.out.println("Result (DFS): " + result1);
        
        boolean result1_alt = solution.existWithVisitedArray(board1, word1);
        System.out.println("Result (Visited Array): " + result1_alt);
        
        boolean result1_opt = solution.existOptimized(board1, word1);
        System.out.println("Result (Optimized): " + result1_opt);
        
        System.out.println("Expected: true");
        System.out.println("Test 1 " + (result1 && result1_alt && result1_opt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 2: same board, word = "SEE"
        // Expected: true
        System.out.println("=== Test Case 2 ===");
        String word2 = "SEE";
        
        printBoard(board1);
        System.out.println("Word: \"" + word2 + "\"");
        
        boolean result2 = solution.exist(board1, word2);
        System.out.println("Result (DFS): " + result2);
        
        boolean result2_alt = solution.existWithVisitedArray(board1, word2);
        System.out.println("Result (Visited Array): " + result2_alt);
        
        System.out.println("Expected: true");
        System.out.println("Test 2 " + (result2 && result2_alt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 3: same board, word = "ABCB"
        // Expected: false (cannot reuse cells)
        System.out.println("=== Test Case 3 ===");
        String word3 = "ABCB";
        
        printBoard(board1);
        System.out.println("Word: \"" + word3 + "\"");
        
        boolean result3 = solution.exist(board1, word3);
        System.out.println("Result (DFS): " + result3);
        
        boolean result3_alt = solution.existWithVisitedArray(board1, word3);
        System.out.println("Result (Visited Array): " + result3_alt);
        
        System.out.println("Expected: false");
        System.out.println("Explanation: Cannot reuse the same cell");
        System.out.println("Test 3 " + (!result3 && !result3_alt ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 4: Single character
        System.out.println("=== Test Case 4 ===");
        char[][] board4 = {{'A'}};
        String word4 = "A";
        
        printBoard(board4);
        System.out.println("Word: \"" + word4 + "\"");
        
        boolean result4 = solution.exist(board4, word4);
        System.out.println("Result: " + result4);
        System.out.println("Expected: true");
        System.out.println("Test 4 " + (result4 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 5: Word not in board
        System.out.println("=== Test Case 5 ===");
        char[][] board5 = {
            {'A', 'B'},
            {'C', 'D'}
        };
        String word5 = "ABCD";
        
        printBoard(board5);
        System.out.println("Word: \"" + word5 + "\"");
        
        boolean result5 = solution.exist(board5, word5);
        System.out.println("Result: " + result5);
        System.out.println("Expected: false");
        System.out.println("Test 5 " + (!result5 ? "PASSED" : "FAILED"));
        
        System.out.println("\n=== Algorithm Analysis ===");
        System.out.println("Key Techniques:");
        System.out.println("1. DFS with Backtracking - explore all paths, undo changes");
        System.out.println("2. Temporary marking - modify board to mark visited cells");
        System.out.println("3. Early pruning - check character counts before searching");
        System.out.println("4. Boundary checking - validate coordinates before accessing");
        System.out.println("\nTime Complexity: O(N * 4^L) where N = board size, L = word length");
        System.out.println("Space Complexity: O(L) for recursion stack");
        System.out.println("\nThis is a classic backtracking problem!");
    }
}
