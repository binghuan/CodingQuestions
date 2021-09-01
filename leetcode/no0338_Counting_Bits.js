/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {

    let result = [];

    for (let i = 0; i < n + 1; i++) {

        let bitsString = i.toString(2);
        let totalOne = 0;
        for (let j = 0; j < bitsString.length; j++) {
            let char = bitsString[j];
            if (char == "1") {
                totalOne += 1;
            }
        }
        result.push(totalOne);
    }

    return result;
};