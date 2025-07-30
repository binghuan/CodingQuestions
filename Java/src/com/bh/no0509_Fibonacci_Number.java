package com.bh;

import java.util.ArrayList;

/**
 * LeetCode 509: Fibonacci Number
 * 
 * Problem Description:
 * The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
 * such that each number is the sum of the two preceding ones, starting from 0 and 1.
 * 
 * Formula: F(n) = F(n-1) + F(n-2), where F(0) = 0, F(1) = 1
 * 
 * Example:
 * Input: n = 2
 * Output: 1
 * Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1
 * 
 * Sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * 
 * Solution Approach - Dynamic Programming (Bottom-up):
 * Build the Fibonacci sequence iteratively from F(0) to F(n) using an ArrayList
 * to store all intermediate values. This approach ensures we compute each value
 * exactly once and can reference previous results.
 * 
 * Time Complexity: O(n) - we compute each Fibonacci number once
 * Space Complexity: O(n) - we store all Fibonacci numbers from 0 to n
 * 
 * Note: This solution is educational and shows the iterative approach with storage.
 * For optimal space complexity, we could use only two variables instead of ArrayList.
 */
public class no0509_Fibonacci_Number {
    static
    class Solution {
        /**
         * Calculate the nth Fibonacci number using dynamic programming approach
         * 
         * Algorithm:
         * 1. Create an ArrayList to store all Fibonacci numbers from F(0) to F(n)
         * 2. Iterate from 0 to n, calculating each Fibonacci number
         * 3. For each position i:
         *    - If i == 0: F(0) = 0 (base case)
         *    - If i == 1: F(1) = 1 (base case)
         *    - Otherwise: F(i) = F(i-1) + F(i-2) (recursive relation)
         * 4. Return the last element which is F(n)
         * 
         * @param n The position in Fibonacci sequence (0-indexed)
         * @return The nth Fibonacci number
         */
        public int fib(int n) {
            // ArrayList to store all Fibonacci numbers from F(0) to F(n)
            ArrayList<Integer> arrayList = new ArrayList<Integer>();

            // Build Fibonacci sequence iteratively from F(0) to F(n)
            for (int i = 0; i <= n; i++) {
                int sum = 0;

                // Base case 1: F(0) = 0
                if (i == 0) {
                    sum = 0;
                } 
                // Base case 2: F(1) = 1
                else if (i == 1) {
                    sum = 1;
                } 
                // Recursive case: F(i) = F(i-1) + F(i-2)
                else {
                    Integer last1Num = 0;  // F(i-1): previous Fibonacci number
                    Integer last2Num = 0;  // F(i-2): two positions back Fibonacci number

                    // Get F(i-2) if we have at least 2 elements stored
                    if (arrayList.size() >= 2) {
                        last2Num = arrayList.get(i - 2);
                        System.out.println("last2num: " + last2Num);
                    }
                    
                    // Get F(i-1) if we have at least 1 element stored
                    if (!arrayList.isEmpty()) {
                        last1Num = arrayList.get(i - 1);
                        System.out.println("last1num: " + last1Num);
                    }

                    // Calculate F(i) = F(i-1) + F(i-2)
                    sum = last1Num + last2Num;
                }

                // Debug output showing current calculation
                System.out.println("index: " + i + ", SUM: " + sum);
                
                // Store the calculated Fibonacci number
                arrayList.add(sum);
            }

            // Return F(n) - the last element in our sequence
            return arrayList.get(arrayList.size() - 1);
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test cases to verify the Fibonacci implementation
        int[] testCases = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int[] expected = {0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55};
        
        System.out.println("=== LeetCode 509: Fibonacci Number Test Results ===\n");
        
        for (int i = 0; i < testCases.length; i++) {
            int n = testCases[i];
            
            System.out.printf("--- Test Case: F(%d) ---\n", n);
            int result = solution.fib(n);
            boolean passed = (result == expected[i]);
            
            System.out.printf("Final Result: F(%d) = %d\n", n, result);
            System.out.printf("Expected: %d\n", expected[i]);
            System.out.printf("Status: %s\n", passed ? "✅ PASSED" : "❌ FAILED");
            System.out.println();
        }
        
        // Additional explanation
        System.out.println("=== Fibonacci Sequence Pattern ===");
        System.out.println("F(0)=0, F(1)=1, F(2)=1, F(3)=2, F(4)=3, F(5)=5, ...");
        System.out.println("Each number is the sum of the two preceding numbers.");
        System.out.println("Formula: F(n) = F(n-1) + F(n-2) for n >= 2");
    }
}
