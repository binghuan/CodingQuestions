/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function (candidates, target) {

    console.log("INPUT:", candidates, "target should be", target)

    candidates.sort((a,b) => {
        return a-b;
    })

    function dfs(
        candidates,
        startedIndex,
        remainingTarget,
        currentCombination,
        answer
    ) {
        //console.log("Try", currentCombination, "from index", selectedIndex);
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
            console.log("Try" , currentCombination);

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

let candidates = [2,3,6,7], target = 7
combinationSum(candidates, target);