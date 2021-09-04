/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    if (digits == "") {
        return [];
    }

    let DBG = false;

    let keyMapping = {};
    keyMapping[0] = [" "];
    keyMapping[1] = [""];
    keyMapping[2] = ["a", "b", "c"];
    keyMapping[3] = ["d", "e", "f"];
    keyMapping[4] = ["g", "h", "i"];
    keyMapping[5] = ["j", "k", "l"];
    keyMapping[6] = ["m", "n", "o"];
    keyMapping[7] = ["p", "q", "r", "s"];
    keyMapping[8] = ["t", "u", "v"];
    keyMapping[9] = ["w", "x", "y", "z"];

    let currentCombination = [];
    let index = 0;
    let output = [];

    function dfs(
        charsForSelection,
        keyMapping,
        index,
        currentCombination,
        answer
    ) {
        if (DBG) console.log(">> dfs, ", "index:", index);

        if (index == charsForSelection.length) {
            answer.push(currentCombination.slice(0).join(""));
            if (DBG) console.log("Add for Answer:", currentCombination);
            return;
        }

        keyMapping[charsForSelection[index]].forEach((char) => {
            currentCombination.push(char);
            dfs(charsForSelection, keyMapping,
                index + 1, currentCombination, answer);
            currentCombination.pop();
        })

        return answer;
    }

    dfs(digits, keyMapping,
        index, currentCombination, output);

    if (DBG) console.log("OUTPUT", output);
    return output;
};

let digits = "23";
letterCombinations(digits)
//let ans = ["ad","ae","af","bd","be","bf","cd","ce","cf"]

