/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {

    console.log("INPUT:", candidates, "target should be", target)

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var unique = candidates.filter(onlyUnique);
    if (unique.length == 1) {
        let value = target / unique[0];
        console.log("value:", value);

        if (unique[0] == 1 && candidates.length < value) {
            return [];
        }

        if (value.toString().indexOf(".") != -1) {
            return [];
        }

        if (candidates.length == 1 && value > 1) {
            return [];
        }

        let result = [];
        for (let i = 0; i < value; i++) {
            result.push(unique[0]);
        }
        return [result];
    }

    candidates.sort((a, b) => {
        return a - b;
    })



    let set = new Set();

    function dfs(
        candidates,
        startedIndex,
        remainingTarget,
        currentCombination,
        answer
    ) {
        //console.log("Try", currentCombination, "from index", selectedIndex);
        if (remainingTarget == 0) {
            let combinationString = currentCombination.toString();
            if (!set.has(combinationString)) {
                set.add(combinationString);
                answer.push(currentCombination.slice(0));
            } else {
                console.log("Duplicate:", currentCombination);
                return;
            }

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
                i + 1,
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