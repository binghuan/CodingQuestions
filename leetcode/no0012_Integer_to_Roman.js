/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const DBG = false;
    let amountForUnit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let symbolList = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let result = [];
    for (let i = 0; i < amountForUnit.length; i++) {
        while (num / amountForUnit[i] >= 1) {
            if (DBG) console.log("from num:", num);
            let numbersOfUnit = parseInt(num / amountForUnit[i]);

            for (let j = 0; j < numbersOfUnit; j++) {
                result.push(symbolList[i]);
                if (DBG) console.log("result =", result);
            }
            num = num - numbersOfUnit * amountForUnit[i];
            if (DBG) console.log("to num:", num);
        }
    }
    if (DBG) console.log("OUTPUT:", result.join(""));
    return result.join("");
};

/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/

let num = 1994
// Output: "MCMXCIV"
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

intToRoman(num);