/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {

    let numString = n.toString();
    let product = 1;
    let sum = 0;

    for (let i = 0; i < numString.length; i++) {
        let num = parseInt(numString[i]);
        product *= num;
        sum += num;
    }

    return product - sum;

};