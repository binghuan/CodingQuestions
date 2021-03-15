/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    const DBG = false;
    if (DBG) console.log("INPUT:", nums);

    let map = {};
    nums.forEach((number) => {
        if (map[number] == null) {
            map[number] = 1;
        } else {
            map[number] += 1;
        }
    })

    let keys = Object.keys(map);
    let sum = 0;
    keys.forEach((key) => {
        if (map[key] == 1) {
            newSum = sum + parseInt(key);
            if (DBG) console.log(sum, "+", key, " = ", newSum, "key: ", key, map[key]);
            sum = newSum;
        }
    })

    if (DBG) console.log("OUTPUT:", sum);
    return sum;
};

nums = [1, 2, 3, 2];
sumOfUnique(nums);