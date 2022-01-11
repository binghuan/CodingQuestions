package com.bh;

import java.util.Arrays;

public class no0121_Best_Time_to_Buy_and_Sell_Stock {
    static
    class Solution {
        public int maxProfit(int[] prices) {
            int minPrice = Integer.MAX_VALUE;
            int maxProfit = 0;

            for (int price : prices) {
                if (price < minPrice) {
                    minPrice = price;
                } else {
                    int profit = price - minPrice;
                    if (profit > maxProfit) {
                        maxProfit = profit;
                    }
                }
            }
            return maxProfit;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] prices = {7,1,5,3,6,4};
        int result = solution.maxProfit(prices);
        System.out.println("OUTPUT:" + result);
    }
}
