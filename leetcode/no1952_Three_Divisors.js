/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function (n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {

        if (n % i == 0) {
            total += 1;
        }
    }
    return total == 3;
};