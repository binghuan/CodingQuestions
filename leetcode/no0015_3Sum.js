/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    let DBG = false;

    let answerSet = new Set();
    let map = {};

    function dfs(
        nums,
        startedIndex,
        total,
        currentCombination,
        answerArray
    ) {
        if (currentCombination.length == 3 && total == 0) {

            let combinationString = currentCombination.sort().toString();

            if (!answerSet.has(combinationString)) {
                answerSet.add(combinationString);
                answerArray.push(currentCombination.slice(0));
                if (DBG) console.log("Add:", currentCombination);
            }
            return;
        }

        for (let i = startedIndex; i < nums.length; i++) {

            if (currentCombination.length > 3) {
                break;
            }

            let num = nums[i];

            currentCombination.push(num);
            let newTotal = total + num;
            if (DBG) console.log("check:", currentCombination);

            dfs(
                nums,
                i + 1,
                newTotal,
                currentCombination,
                answerArray
            )

            currentCombination.pop();
        }

    }

    let output = [];
    let combination = [];
    dfs(
        nums.sort(),
        0,
        0,
        combination,
        output
    )


    //console.log("OUTPUT:", output);
    return output;

};