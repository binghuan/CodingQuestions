/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function (n, k) {

    let total = 0;

    let num = n;
    let remainingNum = (num % k);
    total += parseInt(remainingNum);
    let result = remainingNum.toString();
    for (; num >= k;) {
        num = parseInt(num / k);
        remainingNum = (num % k);
        total += parseInt(remainingNum);
        result = remainingNum + (result);
    }
    return total;
};