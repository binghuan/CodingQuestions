/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {

    console.log("INPUT:", candidates, "target should be", target)

    candidates.sort((a, b) => {
        return a - b;
    })

    function dfs(
        candidates,
        startedIndex,
        remainingTarget,
        currentCombination,
        answer
    ) {
        console.log("Try", currentCombination, "from index", startedIndex);
        if (remainingTarget == 0) {
            answer.push(currentCombination.slice(0));
            return;
        }

        for (let i = startedIndex; i < candidates.length; i++) {
            let choosedNum = candidates[i];
            if (choosedNum > remainingTarget) {
                break;
            }

            currentCombination.push(choosedNum);

            dfs(
                candidates,
                i,
                remainingTarget - choosedNum,
                currentCombination,
                output
            )

            currentCombination.pop();
        }
    }

    let output = [];
    let curr = [];
    dfs(
        candidates,
        0,
        target,
        curr,
        output
    )

    console.log("OUTPUT", output);
    return output;
};

//combinationSum([2, 3, 6, 7], 7);
combinationSum([2, 7, 6, 3, 5, 1], 9);
// [[1,1,1,1,1,1,1,1,1],
// [1,1,1,1,1,1,1,2],
// [1,1,1,1,1,1,3],
// [1,1,1,1,1,2,2],
// [1,1,1,1,2,3],
// [1,1,1,1,5],
// [1,1,1,2,2,2],
// [1,1,1,3,3],
// [1,1,1,6],[1,1,2,2,3],
// [1,1,2,5],
// [1,1,7],
// [1,2,2,2,2],
// [1,2,3,3],
// [1,2,6],
// [1,3,5],
// [2,2,2,3],
// [2,2,5],
// [2,7],
// [3,3,3],
// [3,6]]