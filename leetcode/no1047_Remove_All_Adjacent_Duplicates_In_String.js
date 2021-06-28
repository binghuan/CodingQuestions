/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
    let previousChars = [];
    let result = "";
    for (let i = 0; i < s.length; i++) {

        let char = s[i];

        let lastChar = previousChars.pop();
        if (lastChar == char) {
            result = result.slice(0, -1);
        } else {
            result = `${result}${char}`;
            previousChars.push(lastChar);
            previousChars.push(char);
        }
    }

    return result;

};
