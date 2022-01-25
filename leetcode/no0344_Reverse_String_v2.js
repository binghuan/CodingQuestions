/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let size = s.length;
    for (let i = 0; i < s.length; i++) {
        let rightIndex = size - i - 1;
        if (rightIndex <= i) {
            break;
        }
        let temp = s[i];
        s[i] = s[rightIndex];
        s[rightIndex] = temp;
    }
    return s;
};