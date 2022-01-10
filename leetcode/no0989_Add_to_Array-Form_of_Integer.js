/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {

    let newNum = BigInt(num.join("")) + BigInt(k);

    let newNumString = newNum.toString();
    let result = [];
    for (let i = 0; i < newNumString.length; i++) {
        let char = newNumString[i];
        result.push(parseInt(char));
    }

    return result;
};