/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {

    let chIndex = word.indexOf(ch);

    let preString = word.substring(0, chIndex + 1).split("").reverse().join("");
    let suffixString = word.substring(chIndex + 1, word.length);
    return `${preString}${suffixString}`;
};