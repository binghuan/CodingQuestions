/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function (s) {
    function isLetter(c) {
        return c.toLowerCase() != c.toUpperCase();
    }
    let lastChar = null;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (isLetter(char)) {
            lastChar = char;
            result += lastChar;
        } else {
            let code = lastChar.charCodeAt(0) + parseInt(char);
            let newChar = String.fromCharCode(code);
            result += newChar;
        }
    }
    return result;
};