/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function (patterns, word) {

    let total = 0;
    patterns.forEach((pattern) => {
        let index = word.indexOf(pattern);
        if (index != -1) {
            total += 1;
        }
    })

    return total;
};