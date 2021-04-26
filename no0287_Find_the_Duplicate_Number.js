/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let mySet = new Set();
    for (let i = 0; i < nums.length; i++) {

        let number = nums[i];

        if (mySet.has(number)) {
            return number;
        }

        mySet.add(number);
    }
};
