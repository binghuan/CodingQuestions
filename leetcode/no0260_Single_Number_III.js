/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let numsTable = new Set();
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        //console.log("check num:", num);
        if (!numsTable.has(num)) {
            numsTable.add(num);
        } else {
            numsTable.delete(num);
        }
    }

    let array = Array.from(numsTable);
    console.log("## OUTPUT:", array);
    return array;
};