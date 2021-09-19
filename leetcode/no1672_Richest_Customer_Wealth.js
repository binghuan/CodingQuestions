/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let max = 0;
    accounts.forEach((pair) => {
        let total = 0;
        pair.forEach((num) => {
            total += num;
        })
        if (total > max) {
            max = total;
        }
    })
    return max;
};
