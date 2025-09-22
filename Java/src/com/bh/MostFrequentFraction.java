package com.bh;
import java.util.*;

// Coding question from Employment Hero
public class MostFrequentFraction {

    class Solution {
        public int solution(int[] X, int[] Y) {
            Map<String, Integer> map = new HashMap<>();
            int n = X.length;
            int maxCount = 0;

            for (int i = 0; i < n; i++) {
                int numerator = X[i];
                int denominator = Y[i];

                // Handle case where denominator is 0 (assumed not to happen in problem, but for safety)
                if (denominator == 0) continue;

                // Reduce the fraction to its simplest form
                int gcd = gcd(Math.abs(numerator), Math.abs(denominator));
                numerator /= gcd;
                denominator /= gcd;

                // Ensure denominator is positive
                if (denominator < 0) {
                    numerator = -numerator;
                    denominator = -denominator;
                }

                String key = numerator + "/" + denominator;
                int count = map.getOrDefault(key, 0) + 1;
                map.put(key, count);

                maxCount = Math.max(maxCount, count);
            }

            return maxCount;
        }

        // Calculate Greatest Common Divisor (GCD)
        private int gcd(int a, int b) {
            if (b == 0) {
                return a;
            }
            return gcd(b, a % b);
        }
    }

    public static void main(String[] args) {
        MostFrequentFraction obj = new MostFrequentFraction();
        Solution solution = obj.new Solution();

        // Test Case 1: X = [1, 2, 3, 4], Y = [2, 3, 6, 8], expected result = 3
        // fractions: 1/2, 2/3, 3/6=1/2, 4/8=1/2 -> 1/2 appears 3 times
        int[] X1 = {1, 2, 3, 4};
        int[] Y1 = {2, 3, 6, 8};
        int result1 = solution.solution(X1, Y1);
        System.out.println("Test Case 1:");
        System.out.println("X: " + Arrays.toString(X1));
        System.out.println("Y: " + Arrays.toString(Y1));
        System.out.println("Fractions: 1/2, 2/3, 3/6=1/2, 4/8=1/2");
        System.out.println("Most frequent count: " + result1);
        System.out.println("Expected: 3");
        System.out.println("Result: " + (result1 == 3 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 2: X = [3, 3, 4], Y = [5, 4, 3], expected result = 1
        // fractions: 3/5, 3/4, 4/3 -> all different, max count = 1
        int[] X2 = {3, 3, 4};
        int[] Y2 = {5, 4, 3};
        int result2 = solution.solution(X2, Y2);
        System.out.println("Test Case 2:");
        System.out.println("X: " + Arrays.toString(X2));
        System.out.println("Y: " + Arrays.toString(Y2));
        System.out.println("Fractions: 3/5, 3/4, 4/3");
        System.out.println("Most frequent count: " + result2);
        System.out.println("Expected: 1");
        System.out.println("Result: " + (result2 == 1 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 3: X = [4, 4, 7, 1, 2], Y = [4, 8, 1, 2, 2], expected result = 4
        // fractions: 4/4=1/1, 4/8=1/2, 7/1, 1/2, 2/2=1/1 -> 1/1 appears 2 times, 1/2 appears 2 times
        int[] X3 = {4, 4, 7, 1, 2};
        int[] Y3 = {4, 8, 1, 2, 2};
        int result3 = solution.solution(X3, Y3);
        System.out.println("Test Case 3:");
        System.out.println("X: " + Arrays.toString(X3));
        System.out.println("Y: " + Arrays.toString(Y3));
        System.out.println("Fractions: 4/4=1/1, 4/8=1/2, 7/1, 1/2, 2/2=1/1");
        System.out.println("Most frequent count: " + result3);
        System.out.println("Expected: 2");
        System.out.println("Result: " + (result3 == 2 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 4: X = [1, 2, 3, 1], Y = [2, 4, 6, 10], expected result = 3
        // fractions: 1/2, 2/4=1/2, 3/6=1/2, 1/10 -> 1/2 appears 3 times
        int[] X4 = {1, 2, 3, 1};
        int[] Y4 = {2, 4, 6, 10};
        int result4 = solution.solution(X4, Y4);
        System.out.println("Test Case 4:");
        System.out.println("X: " + Arrays.toString(X4));
        System.out.println("Y: " + Arrays.toString(Y4));
        System.out.println("Fractions: 1/2, 2/4=1/2, 3/6=1/2, 1/10");
        System.out.println("Most frequent count: " + result4);
        System.out.println("Expected: 3");
        System.out.println("Result: " + (result4 == 3 ? "PASS" : "FAIL"));
        System.out.println();

        // Test Case 5: Negative numbers
        // X = [-1, 2, -3, 4], Y = [2, -4, 6, -8], expected result = 2
        // fractions: -1/2, 2/-4=-1/2, -3/6=-1/2, 4/-8=-1/2 -> -1/2 appears 4 times
        int[] X5 = {-1, 2, -3, 4};
        int[] Y5 = {2, -4, 6, -8};
        int result5 = solution.solution(X5, Y5);
        System.out.println("Test Case 5:");
        System.out.println("X: " + Arrays.toString(X5));
        System.out.println("Y: " + Arrays.toString(Y5));
        System.out.println("Fractions: -1/2, 2/-4=-1/2, -3/6=-1/2, 4/-8=-1/2");
        System.out.println("Most frequent count: " + result5);
        System.out.println("Expected: 4");
        System.out.println("Result: " + (result5 == 4 ? "PASS" : "FAIL"));

        System.out.println("\n=== Algorithm Explanation ===");
        System.out.println("This problem finds the most frequent fraction among N given fractions.");
        System.out.println("Key points:");
        System.out.println("1. Two fractions are equal if they reduce to the same form (e.g., 3/6 = 1/2)");
        System.out.println("2. We use GCD to reduce fractions to their simplest form");
        System.out.println("3. We normalize negative fractions (denominator is always positive)");
        System.out.println("4. We use a HashMap to count occurrences of each reduced fraction");
        System.out.println("5. Return the maximum count found");
    }
}
