/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
    let items = s.split("").join(",").split("");

    function backtrack(
        items,
        startedIndex,
        currentCombination,
        answer
    ) {
        if (currentCombination.length == items.length) {
            answer.push(currentCombination.slice(0));
            return
        }


        for (let i = 0; i < items.length; i++) {

            let item = items[i];
            currentCombination.push(item);
            backtrack(
                items,
                startedIndex + 1,
                curr,
                output
            )
            currentCombination.pop();
        }

    }

    let curr = [];
    let output = [];
    backtrack(
        items,
        0,
        curr,
        output
    )

    console.log("OUTPUT:", output);

};

numDecodings("12")
/*

Input: s = "12"
Output: 2
Explanation: "12" could be decoded as "AB" (1 2) or "L" (12).

*/
