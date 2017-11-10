/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {

    let DBG = true;
    console.log("### INPUT: ", prices)

    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {

        for (let j = i; j < prices.length; j++) {
            if (i == j) {
                continue;
            }

            if (prices[i] > prices[j]) {
                continue;
            }

            let profit = prices[j] - prices[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    console.log("### OUTPUT:", maxProfit);
    return maxProfit;
};

if (maxProfit([7, 1, 5, 3, 6, 4]) != 5) {
    console.error("Wrong Answer !!"); return;
} else { console.log("^_^b> Correct Answer !!"); }
if (maxProfit([7, 6, 4, 3, 1]) != 0) {
    console.error("Wrong Answer !!"); return;
} else { console.log("^_^b> Correct Answer !!"); }
