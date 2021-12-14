// link: https://leetcode.com/problems/valid-parentheses/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function (s) {
    let result = true;
    let checkedChars = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char.match(/\(|\{|\[/) != null) {
            checkedChars.push(char);
        } else if (char.match(/\)|\}|\]/) != null) {
            let symbol = checkedChars.pop();
            let isBraceketMatched = true;
            if (char == ")" && symbol != "(") {
                isBraceketMatched = false;
            } else if (char == "}" && symbol != "{") {
                isBraceketMatched = false;
            } else if (char == "]" && symbol != "[") {
                isBraceketMatched = false;
            }

            if (!isBraceketMatched) {
                result = false;
                break;
            }
        }
    }
    if (checkedChars.length > 0) {
        result = false;
    }
    return result;
};