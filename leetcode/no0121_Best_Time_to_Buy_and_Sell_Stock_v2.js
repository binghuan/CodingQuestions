/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let minPrice = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            let profit = prices[i] - minPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;

};

// Reference: One Pass - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/solution/