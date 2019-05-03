/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {

    console.log("## INPUT:", A);

    let result = [];

    for (let i = 0; i < A.length; i++) {
        let num = A[i];
        let value = num * num;
        result.push(value);
    }

    result.sort(function (a, b) {
        return a - b;
    });

    console.log("## OUTPUT:", result);
    return result;
};

let input = [-4, -1, 0, 3, 10];
sortedSquares(input);