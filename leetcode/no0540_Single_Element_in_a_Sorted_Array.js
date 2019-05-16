/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {

    console.log("## INPUT:", nums);

    let mapTable = {};
    let numSet = new Set();

    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];
        if (!mapTable.hasOwnProperty(num)) {
            mapTable[num] = 1;
            numSet.add(num);
        } else {
            mapTable[num] += 1;
            numSet.delete(num);
        }

    }

    let result = Array.from(numSet);
    console.log("## OUTPUT:", result[0]);
    return result[0];

};

let input = [1, 1, 2, 3, 3, 4, 4, 8, 8];
singleNonDuplicate(input);