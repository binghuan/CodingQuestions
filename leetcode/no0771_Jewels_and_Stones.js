/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {

    let set = new Set();
    for (let i = 0; i < jewels.length; i++) {
        set.add(jewels[i]);
    }

    let count = 0;
    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            count += 1;
        }
    }

    return count;

};