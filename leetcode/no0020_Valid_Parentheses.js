// link: https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let chars = s.split("");

    let checkedChars = [];
    let result = true;

    for (let i = 0; i < chars.length; i++) {
        let char = chars[i];

        if (char == "(" ||
            char == "{" ||
            char == "[") {

            checkedChars.push(char);

        } else if (char == ")" ||
            char == "}" ||
            char == "]") {


            let symbol = checkedChars.pop();
            let isNeededToRollback = false;
            if (char == ")" && symbol != "(") {
                isNeededToRollback = true;
            } else if (char == "}" && symbol != "{") {
                isNeededToRollback = true;
            } else if (char == "]" && symbol != "[") {
                isNeededToRollback = true;
            }

            if (isNeededToRollback) {
                checkedChars.push(symbol);
                result = false;
            }
        }
    }

    if (checkedChars.length > 0) {
        result = false;
    }

    return result;

};