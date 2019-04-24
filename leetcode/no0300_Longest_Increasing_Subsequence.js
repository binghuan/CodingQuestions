/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    console.log("## INPUT:", nums);

    let lengthTable = [];
    for(let i =0; i< nums.length; i++) {
        lengthTable[i] = 1;
    }

    for(let baseIndex = 0; baseIndex < nums.length; baseIndex++) {
        for(let targetIndex = baseIndex + 1; targetIndex < nums.length ; targetIndex++) {
            if(nums[targetIndex] > nums[baseIndex]) {
                lengthTable[targetIndex] = 
                    Math.max(lengthTable[targetIndex], lengthTable[baseIndex] + 1);
            }
        }

        console.log("ROUND _", baseIndex+1, "_ --> ", lengthTable);
    }

    let lis = 0;
    for(let i =0; i < lengthTable.length ; i ++) {
        lis = Math.max(lis, lengthTable[i]);
    }

    console.log("## OUTPUT: ", lis);
    return lis;
};

let Input = [1,2,3,4,5];
//let Input = [10, 9, 2, 5, 3, 7, 101, 18];
//let Input = [10,9,2,5,3,4];
// Input = [2,2];
// Input = [1,3,6,7,9,4,10,5,6];
lengthOfLIS(Input);

// reference: http://www.csie.ntnu.edu.tw/~u91029/LongestIncreasingSubsequence.html