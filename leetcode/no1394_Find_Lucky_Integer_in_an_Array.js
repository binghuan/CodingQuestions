/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {

    let map = {};
    let set = new Set();

    arr.forEach((num) => {

        if (map[num] == null) {
            map[num] = 1;
            if (map[num] == num) {
                set.add(num);
            }
        } else {
            map[num] += 1;

            if (map[num] == num) {
                set.add(num);
            } else {
                set.delete(num);
            }
        }
    })

    if (set.size == 0) {
        return -1;
    } else {
        return Array.from(set).sort((a, b) => { return b - a })[0];
    }
};