/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const DBG = true;
    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        if (map[number] == null) {
            map[number] = 1;
        } else {
            map[number] += 1;
        }
    }

    let countedArray = [];
    for (let i = 0; i < Object.keys(map).length; i++) {
        let number = Object.keys(map)[i];
        countedArray.push(
            {
                value: number,
                count: map[number]
            });
    }

    let result = [];
    let sortedArray = countedArray.sort((a, b) => { return b.count - a.count });
    if (DBG) console.log("sortedArray:", sortedArray)
    for (let i = 0; i < k; i++) {
        result.push(sortedArray[i].value);
    }

    return result;
};


topKFrequent([1, 1, 1, 2, 2, 3])