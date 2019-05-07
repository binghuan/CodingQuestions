/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// Solution --> Time limit Exceeded
var spiralOrder = function (matrix) {

    const DBG = true;

    console.log("## INPUT:", matrix);
    let result = [];

    if (matrix.length == 0) {
        return result;
    }

    let xMarginLeft = 0;
    let xMarginRight = 0;

    let yMarginTop = 0;
    let yMarginBottom = 0;

    let totalElements = matrix.length * matrix[0].length;

    while (result.length < totalElements) {

        if (DBG) console.log("!!! ", result.length, totalElements);

        let xEnd = matrix[0].length - xMarginRight;
        let xStart = xMarginLeft;
        let fixedY = yMarginTop;
        if (DBG) console.log("path 1 ---> ", xStart, xEnd);
        for (let i = xStart; i < xEnd; i++) {
            // if (DBG) console.log("check ", yMarginTop, i);
            // let num = matrix[yMarginTop][i];
            // if (DBG) console.log("++ ", num);
            // result.push(num);

            let nums = matrix[fixedY].slice(xStart, xEnd);
            console.log("before: ", result);
            result = result.concat(nums).slice(0);
            console.log("++ ", nums);
            break;
        }

        yMarginTop += 1;
        let yEnd = matrix.length - yMarginBottom;
        let yStart = yMarginTop;
        let fixedX = matrix[0].length - xMarginRight - 1;
        if (DBG) console.log("path 2 ---> ", yStart, yEnd + 1);
        for (let i = yStart; i < yEnd; i++) {
            if (DBG) console.log("check ", i, fixedX);
            let num = matrix[i][fixedX];
            if (DBG) console.log("++ [", num, "]");
            result.push(num);
        }
        xMarginRight += 1;

        xStart = matrix[0].length - xMarginRight - 1;
        xEnd = xMarginLeft;
        fixedY = matrix.length - yMarginBottom - 1;
        if (DBG) console.log("path 3 ---> ", xStart, xEnd);
        if (result.length == totalElements) {
            break;
        }

        for (let i = xStart; i > xEnd - 1; i--) {
            // if (DBG) console.log("check ", fixedY, i);
            // let num = matrix[fixedY][i];
            // if (DBG) console.log("++ ", num);
            // result.push(num);

            console.log("before: ", result, xEnd, xStart + 1);
            let nums = matrix[fixedY].slice(xEnd, xStart + 1).reverse();
            console.log("++ ", nums);
            result = result.concat(nums);
            break;
        }

        yMarginBottom += 1;

        fixedX = xMarginLeft;
        yEnd = yMarginTop;
        yStart = matrix.length - yMarginBottom - 1;
        if (DBG) console.log("path 4 ---> ", yStart, "to", yEnd);
        for (let i = yStart; i >= yEnd; i--) {
            if (DBG) console.log("check ", i, fixedX);
            let num = matrix[i][fixedX];
            if (DBG) console.log("++ [", num, "]");
            result.push(num);
        }

        xMarginLeft += 1;

        if (DBG) console.log("result: ", result);
        if (DBG) console.log(xMarginLeft, xMarginRight, yMarginTop, yMarginBottom);
    }

    console.log("## OUTPUT:", result);
    return result;
};

let input = [
    [1, 2, 3],
    [8, 9, 4],
    [7, 6, 5]
];

// input = [
//     [1, 2, 3, 4],
//     [10, 11, 12, 5],
//     [9, 8, 7, 6]
// ];

// input = [
//     [1, 2],
//     [4, 3]];

// input = [[1, 2,  3,  4,  5], 
//         [6,  7,  8,  9,  10], 
//         [11, 12, 13, 14, 15], 
//         [16, 17, 18, 19, 20], 
//         [21, 22, 23, 24, 25]];
spiralOrder(input);