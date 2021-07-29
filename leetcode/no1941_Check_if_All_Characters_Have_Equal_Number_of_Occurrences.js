/**
 * @param {string} s
 * @return {boolean}
 */
var areOccurrencesEqual = function (s) {

    let map = {};

    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (map[char] == null) {
            map[char] = 1;
        } else {
            map[char] += 1;
        }
    }

    let keys = Object.keys(map);
    let occurrences = -1;
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (occurrences == -1) {
            occurrences = map[key];
        } else if (map[key] != occurrences) {
            return false;
        }
    }

    return true;
};