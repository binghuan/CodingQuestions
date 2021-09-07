/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {

    let map = {};

    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i];
        if (map[char] == null) {
            map[char] = 1;
        } else {
            map[char] += 1;
        }
    }

    let result = true;
    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];

        if (map[char] == null) {
            result = false;
            break;
        } else {
            map[char] -= 1;
            if (map[char] < 0) {
                result = false;
                break;
            }
        }
    }

    return result;
};