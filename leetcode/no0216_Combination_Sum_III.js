/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const DBG = false;
var combinationSum3 = function (k, n) {
    if (DBG) console.log("INPUT:", k, n);
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    function dfs(nums, targetSum, currntSum, currentCombination, startedIndex, answer) {
        if (currntSum == targetSum && currentCombination.length == k) {
            if (DBG) console.log("!!PUSH:", currentCombination);
            answer.push(currentCombination.slice(0));
            return;
        }
        for (let i = startedIndex; i < nums.length; i++) {
            let num = nums[i];
            currentCombination.push(num);
            dfs(nums, targetSum, currntSum + num, currentCombination, i + 1, answer);
            currentCombination.pop();
        }
    }
    let ans = [];
    let curr = [];
    dfs(nums, n, 0, curr, 0, ans);
    if (DBG) console.log("OUTPUT:", ans);
    return ans;
};

//combinationSum3(3, 7);// Output: [[1,2,4]]
combinationSum3(3, 9);// Output: [[1,2,6],[1,3,5],[2,3,4]]