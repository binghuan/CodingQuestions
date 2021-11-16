/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let depth = 0;
    let maxDepth = 0;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (char == "(") {
            depth += 1;
            if (depth > maxDepth) {
                maxDepth = depth;
            }
        } else if (char == ")") {
            depth -= 1;
        }
    }
    return maxDepth;
};