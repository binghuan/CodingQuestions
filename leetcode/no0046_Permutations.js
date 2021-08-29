/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {

    console.log("## INPUT:", nums);

    let numsInUse = new Set();
    let result = new Set();
    let checkingNums = [];

    checkPermute(nums, checkingNums, numsInUse, result);
    console.log("## OUTPUT:", result);
};

var checkPermute = function (nums, checkingNums, numsInUse, result) {

    if (nums.length == checkingNums.length) {
        console.log("Add Result: ", checkingNums);
        result.add(checkingNums.slice(0));
    } else {
        for (let i = 0; i < nums.length; i++) {
            let num = nums[i];
            if (!numsInUse.has(num)) {
                console.log("--> Take ", num, "for use");
                numsInUse.add(num);
                checkingNums.push(num);
                console.log("> CheckingNums: ", checkingNums);
                checkPermute(nums, checkingNums, numsInUse, result);
                numsInUse.delete(num);// remove element. 
                checkingNums.pop();
                console.log("< CheckingNums: ", checkingNums);
            }
        }
    }
}


let input = [1, 2, 3];
permute(input);
