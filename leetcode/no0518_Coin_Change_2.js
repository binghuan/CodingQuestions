/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {

    coins.sort((a, b) => {
        return a - b;
    })

    function dfs(
        coins,
        remainingAmount,
        selectedIndex,
        currentCombination,
        answer) {

        if (remainingAmount == 0) {
            answer.push(currentCombination.slice(0));
            console.log("answer:", answer);
            return;
        }

        for (let i = selectedIndex; i < coins.length; i++) {

            let coinValue = coins[i];
            if (coinValue > remainingAmount) {
                break;
            }
            currentCombination.push(coinValue);
            dfs(
                coins,
                remainingAmount - coinValue,
                i,
                currentCombination,
                answer
            )
            currentCombination.pop();
        }
    }

    let combination = [];
    let output = [];
    dfs(
        coins,
        amount,
        0,
        combination,
        output
    )
    console.log("OUTPUT:", output);
    return output.length;

};

change(500, [3, 5, 7, 8, 9, 10, 11]);
