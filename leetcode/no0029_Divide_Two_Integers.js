/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const maxNumber = Math.pow(2, 31) - 1;
var divide = function (dividend, divisor) {

    console.log("## INPUT: dividend=", dividend, "divisor=", divisor);
    let isNegativeNumber = false;
    if (dividend < 0 && divisor < 0) {
        isNegativeNumber = false;
    } else if (dividend > 0 && divisor > 0) {
        isNegativeNumber = false;
    } else {
        isNegativeNumber = true;
    }

    if (dividend == 0) {
        return 0;
    }

    let positiveDivisor = Math.abs(divisor);
    let positiveDividend = Math.abs(dividend);

    let possibleInteger = 1;
    let startInteger = 0;
    if (divisor != 0) {
        startInteger = parseInt(positiveDividend / divisor);
    }
    for (let i = startInteger; i <= positiveDividend; i++) {

        let value = positiveDivisor * i;
        if (value <= positiveDividend) {
            possibleInteger = i;
        } else {
            break;
        }
    }
    if (possibleInteger > maxNumber && !isNegativeNumber) {
        possibleInteger = maxNumber;
    }
    if (isNegativeNumber) {
        possibleInteger = -possibleInteger;
    }
    console.log("## OUTPUT:", possibleInteger);
    return possibleInteger;
};