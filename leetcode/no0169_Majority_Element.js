/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {

    console.log("## INPUT:", nums);
    let numsTable = {};

    let majorityNum = -1;
    let maxNumShowup = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if (!numsTable.hasOwnProperty(num)) {
            numsTable[num] = 1;
        } else {
            numsTable[num] += 1;
        }
        //console.log(numsTable);

        if (numsTable[num] >= maxNumShowup) {
            //console.log("replace:", num);
            maxNumShowup = numsTable[num];
            majorityNum = num;
        }
    }

    console.log("## OUTPUT:", majorityNum);
    return majorityNum;
};