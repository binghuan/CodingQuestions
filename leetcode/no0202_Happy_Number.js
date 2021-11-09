/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let numString = n.toString();

    let total = 0;
    for (let i = 0; i < numString.length; i++) {
        let temp = Math.pow(parseInt(numString[i]), 2);
        console.log("+", temp)
        total += temp
    }
    console.log("Total= ", total, "from", numString);

    if (total == 2 || total == 4) {
        return false;
    } else if (total == 1) {
        return true;
    } else {
        return isHappy(total);
    }
};