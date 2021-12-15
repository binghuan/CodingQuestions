/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const DBG = true;

    let symbolArray = [
        { key: "M", value: 1000 },
        { key: "CM", value: 900 },
        { key: "D", value: 500 },
        { key: "CD", value: 400 },
        { key: "C", value: 100 },
        { key: "XC", value: 90 },
        { key: "L", value: 50 },
        { key: "XL", value: 40 },
        { key: "X", value: 10 },
        { key: "IX", value: 9 },
        { key: "V", value: 5 },
        { key: "IV", value: 4 },
        { key: "I", value: 1 },
    ];

    let result = [];
    for (let i = 0; i < symbolArray.length; i++) {
        while (num / symbolArray[i].value >= 1) {
            if (DBG) console.log("from num:", num);
            let numbersOfUnit = parseInt(num / symbolArray[i].value);

            for (let j = 0; j < numbersOfUnit; j++) {
                result.push(symbolArray[i].key);
                if (DBG) console.log("result =", result);
            }
            num -= numbersOfUnit * symbolArray[i].value;
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