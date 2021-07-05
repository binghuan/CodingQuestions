/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {

    let result = x;
    if (n == 0) {
        return 1;
    }

    if (Math.abs(x) == 1) {
        if (x < 1) {
            if (n < 1) {
                return 1;
            } else {
                return -1;
            }

        } else {

            return 1;
        }

    }

    for (let i = 1; i < Math.abs(n); i++) {
        result *= x;
    }

    if (n < 0) {
        result = 1 / result;
    }
    console.log("OUTPUT: ", result);
    return result;
};
