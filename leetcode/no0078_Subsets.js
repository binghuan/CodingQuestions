/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {

    function backtrack(startedIndex, currentCombination, nums, answer, lengthOfNums) {

        if (currentCombination.length == lengthOfNums) {
            answer.push(currentCombination.slice(0));
            //console.log("Add", currentCombination);
            return;
        }

        for (let i = startedIndex; i < nums.length; i++) {
            currentCombination.push(nums[i]);

            backtrack(
                i + 1,
                currentCombination,
                nums,
                output,
                lengthOfNums
            )
            currentCombination.pop();
        }
    }

    let curr = [];
    let output = [];

    for (let i = 0; i <= nums.length; i++) {

        backtrack(
            0,
            curr,
            nums,
            output,
            i
        )
    }

    return output;
};

// Reference: 
// https://leetcode.com/problems/subsets/solution/