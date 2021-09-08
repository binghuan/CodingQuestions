/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] == null) {
            map[num] = 1;
        } else {
            map[num] += 1;
        }
    }

    let numCountingArray = [];

    let keys = Object.keys(map);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        numCountingArray.push(
            {
                count: map[key],
                val: key
            }
        );
    }

    numCountingArray.sort((a, b) => {
        if (a.count == b.count) {
            return b.val - a.val;
        } else {
            return a.count - b.count;
        }
    });

    let result = [];
    numCountingArray.forEach((obj) => {
        for (let i = 0; i < obj.count; i++) {
            result.push(obj.val);
        }

    });

    return result;

};