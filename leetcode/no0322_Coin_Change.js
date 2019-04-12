/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    const DBG = true;
    if (DBG) console.log("## INPUT:", coins, "; amount=", amount);

    if (amount == 0) {
        return 0;
    }

    let coinsMap = {};
    for (let i = 0; i < coins.length; i++) {
        let coinValue = coins[i];
        coinsMap[coinValue] = 1;
    }

    let minCoinCountHistory = [];
    minCoinCountHistory[0] = 0;
    for (let currentAmount = 1; currentAmount <= amount; currentAmount++) {

        // initialize the variable min to check the min. value for each round.
        let min = null;

        // if the amount just match the value of coin, 
        // it's just need 1 coin, so set coin count for this amount = 1
        if (coinsMap.hasOwnProperty(currentAmount)) {
            minCoinCountHistory[currentAmount] = 1;
        } else {
            for (let j = 0; j < coins.length; j++) {
                // condition 1: value of coin shoud be greater than target amount.
                let isAmountAvaible = currentAmount > coins[j];
                // condition 2: get coin count from history 
                let coinCount = minCoinCountHistory[currentAmount - coins[j]];

                if (isAmountAvaible && coinCount > -1) {
                    if (min == null) {
                        min = coinCount;
                    } else {
                        min = Math.min(min, coinCount);
                    }
                    //console.log(">> replace min:", min, " for currentAmount:", currentAmount);

                    // Why shall you need to plus 1, 
                    // it's because at this time, we just try to add a new coin.
                    minCoinCountHistory[currentAmount] = min + 1;
                }
            }
        }
    }

    let result = minCoinCountHistory[amount] ? minCoinCountHistory[amount] : -1;
    console.log("minCoinCountHistory:", minCoinCountHistory);
    console.log("## OUTPUT: ", result);
    return result;
};

let coins = [1, 2, 5], amount = 11;
//let coins = [5, 2, 1], amount = 11;
coinChange(coins, amount);