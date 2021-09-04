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
    let keys = [
        [" "],
        [""],
        ["a", "b", "c"],
        ["d", "e", "f"],
        ["g", "h", "i"],
        ["j", "k", "l"],
        ["m", "n", "o"],
        ["p", "q", "r", "s"],
        ["t", "u", "v"],
        ["w", "x", "y", "z"]
    ]
    for (let i = 0; i < 10; i++) {
        console.log("index: ", i);
        keyMapping[i] = keys[i];

    }

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

