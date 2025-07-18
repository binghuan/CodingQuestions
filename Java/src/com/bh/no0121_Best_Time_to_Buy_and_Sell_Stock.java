package com.bh;

import java.util.Arrays;

/**
 * LeetCode 121: Best Time to Buy and Sell Stock
 * 
 * Problem Description:
 * You are given an array where the i-th element is the price of a given stock on day i.
 * If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock),
 * design an algorithm to find the maximum profit.
 * 
 * Note: You cannot sell a stock before you buy one.
 * 
 * Solution Approach:
 * Use a one-pass greedy algorithm:
 * 1. Keep track of the minimum buying price so far
 * 2. For each day's price, calculate the profit if we sell today
 * 3. Update the maximum profit
 * 
 * Time Complexity: O(n) - only need to traverse the array once
 * Space Complexity: O(1) - only use constant extra space
 */
public class no0121_Best_Time_to_Buy_and_Sell_Stock {
    static
    class Solution {
        /**
         * Calculate the maximum profit from buying and selling stock
         * 
         * @param prices array of stock prices for each day
         * @return maximum profit, returns 0 if no profit can be made
         */
        public int maxProfit(int[] prices) {
            // Initialize minimum price to maximum value to ensure first price will be recorded as minimum
            int minPrice = Integer.MAX_VALUE;
            // Initialize maximum profit to 0
            int maxProfit = 0;

            // Traverse each day's stock price
            for (int price : prices) {
                // If current price is lower than previously recorded minimum price
                if (price < minPrice) {
                    // Update minimum price (best buying opportunity)
                    minPrice = price;
                } else {
                    // Calculate profit if we sell the stock today
                    int profit = price - minPrice;
                    // If today's selling profit is higher than previously recorded maximum profit
                    if (profit > maxProfit) {
                        // Update maximum profit
                        maxProfit = profit;
                    }
                }
            }
            // Return maximum profit
            return maxProfit;
        }
    }

    /**
     * Test method
     * 
     * Test case: prices = [7,1,5,3,6,4]
     * Explanation: Buy on day 2 (stock price = 1) and sell on day 5 (stock price = 6),
     * maximum profit = 6-1 = 5.
     * Note that the profit cannot be 7-1 = 6, because the selling price needs to be greater than the buying price;
     * also, you cannot sell a stock before you buy one.
     */
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case 1: [7,1,5,3,6,4] - Expected output: 5
        int[] prices = {7,1,5,3,6,4};
        int result = solution.maxProfit(prices);
        System.out.println("Test case: " + Arrays.toString(prices));
        System.out.println("Maximum profit: " + result);
        
        // Additional test cases
        System.out.println("\nOther test cases:");
        
        // Test case 2: Continuously decreasing prices - Expected output: 0
        int[] prices2 = {7,6,4,3,1};
        System.out.println("Continuously decreasing prices: " + Arrays.toString(prices2) + 
                          " -> Maximum profit: " + solution.maxProfit(prices2));
        
        // Test case 3: Continuously increasing prices - Expected output: 4
        int[] prices3 = {1,2,3,4,5};
        System.out.println("Continuously increasing prices: " + Arrays.toString(prices3) + 
                          " -> Maximum profit: " + solution.maxProfit(prices3));
    }
}
