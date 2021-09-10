/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {

    let combination = "";
    let maxOddNumString = "";
    for (let i = 0; i < num.length; i++) {
        let intChar = num[i];
        combination = combination + intChar;

        let numInt = parseInt(intChar);

        if (numInt % 2 == 1 && combination > maxOddNumString) {
            maxOddNumString = combination;
        }
    }

    return maxOddNumString;

};