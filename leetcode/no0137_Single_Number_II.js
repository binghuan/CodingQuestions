/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    console.log("## INPUT:", nums);
    let numsTable = {};
    let numSet = new Set();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        //console.log("check num:", num);
        if (!numsTable.hasOwnProperty(num)) {
            numsTable[num] = 1;
            numSet.add(num);
        } else {
            if (numSet.has(num)) {
                numSet.delete(num);
            }
            numsTable[num] += 1;
        }
    }


    let array = Array.from(numSet);
    console.log("## OUTPUT:", array);
    return array[0];
};