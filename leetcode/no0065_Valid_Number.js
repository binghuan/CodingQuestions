/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
    if (s.indexOf("Infinity") != -1) {
        return false;
    }
    return !isNaN(Number(s));
};
