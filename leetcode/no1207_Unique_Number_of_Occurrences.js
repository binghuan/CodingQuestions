/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {

    let set = new Set();
    let map = new Map();

    arr.forEach((num) => {
        if (map.get(num) == null) {
            map.set(num, 1);
        } else {
            map.set(num, map.get(num) + 1);
        }
    })

    for (const [key, value] of map.entries()) {
        if (set.has(value)) {
            return false;
        }
        set.add(value);
    }
    return true;
};
