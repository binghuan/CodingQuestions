/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    const DBG = false;
    const input = n.toString();
    console.log("## INPUT: ", input);

    let counter = 0;
    let result = "";
    for (let i = input.length - 1; i >= 0; i--) {
        let char = input[i];
        if (DBG) console.log(`check ${i}: ${char} - ${counter}`);
        if (counter == 3) {
            result = ".".concat(result);
            if (DBG) console.log("-> ", result);
            counter = 0;
        }
        result = char.concat(result)

        if (DBG) console.log("--> ", result);
        counter = counter + 1;
    }

    console.log("## OUTPUT: ", result);
    return result;
};


thousandSeparator(987);
thousandSeparator(1234);
thousandSeparator(123456789);
thousandSeparator(0);
/*
Example 1:

Input: n = 987
Output: "987"
Example 2:

Input: n = 1234
Output: "1.234"
Example 3:

Input: n = 123456789
Output: "123.456.789"
Example 4:

Input: n = 0
Output: "0"
*/