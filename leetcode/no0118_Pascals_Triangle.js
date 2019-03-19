// link: https://leetcode.com/problems/pascals-triangle/submissions/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {

    const DBG = true;
    if (DBG) console.log("## INPUT: ", numRows);

    let output = [];

    for (let i = 0; i < numRows; i++) {

        for (let j = 0; j < i + 1; j++) {
            if (DBG) console.log("i:", i, "j:", j, " = [", i, ",", j, "]");
            let total = 1;
            if (j == 0 && j == 0) {
                output[i] = [];
                output[i][j] = 1;
            } else if (j == i) {
                output[i][j] = 1;
            } else {
                let parentRight = output[i - 1][j];
                let parentLeft = output[i - 1].hasOwnProperty([j - 1]) ? output[i - 1][j - 1] : 0;
                if (DBG) console.log(parentLeft, "+", parentRight);
                output[i][j] = parentLeft + parentRight;
            }

            if (DBG) console.log("------------> ", total);

            if (DBG) console.log("output: ", output);

            if (DBG) console.log("===============================: ");

        }
    }

    if (DBG) console.log("## OUTPUT:", output);

};

let input = 5;
generate(input);