/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const DBG = true;
    if (DBG) console.log("## INPUT:", s);
    let total = 0;
    let symbolArray = [
        { key: "VIII", value: 8 },
        { key: "VII", value: 7 },
        { key: "III", value: 3 },
        { key: "VI", value: 6 },
        { key: "IV", value: 4 },
        { key: "II", value: 2 },
        { key: "IX", value: 9 },
        { key: "CM", value: 900 },
        { key: "CD", value: 400 },
        { key: "XC", value: 90 },
        { key: "XL", value: 40 },
        { key: "M", value: 1000 },
        { key: "D", value: 500 },
        { key: "C", value: 100 },
        { key: "L", value: 50 },
        { key: "X", value: 10 },
        { key: "I", value: 1 },
        { key: "V", value: 5 },
    ];

    for (let i = 0; i < symbolArray.length; i++) {
        if (DBG) console.log("check : ", symbolArray[i].key);
        while (s.indexOf(symbolArray[i].key) != -1) {
            if (DBG) console.log("HIT: ", symbolArray[i].key, " = ", symbolArray[i].value);
            total += symbolArray[i].value;
            s = s.replace(symbolArray[i].key, "");
        }
    }

    if (DBG) console.log("## OUTPUT:", total);
    return total;
};

romanToInt("CD");