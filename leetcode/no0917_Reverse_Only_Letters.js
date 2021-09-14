/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {

    let chars = s.split("");
    let alphabetOnlyChars = [];
    let result = [];
    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];
        if (char.toUpperCase() != char.toLowerCase()) {
            alphabetOnlyChars.push(char);
            result[i] = null;
        } else {
            result[i] = char;
        }
    }
    for (let i = 0; i < result.length; i++) {
        if (result[i] == null) {
            result[i] = alphabetOnlyChars.pop();
        }
    }
    return result.join("");
};