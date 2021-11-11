/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] == null) {
            map[num] = [i]
        } else {
            for (let j = 0; j < map[num].length; j++) {
                let index = map[num][j];
                if (Math.abs(i - index) <= k) {
                    return true;
                }
            }
            map[num].push(i);
        }
    }
    return false;
};