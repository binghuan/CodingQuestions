/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function showMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}

var rotate = function (matrix) {
    console.log("## INPUT:", matrix.length);
    showMatrix(matrix)

    let newMatrix = [];

    // initializing...
    for (let y = 0; y < matrix.length; y++) {
        newMatrix[y] = [];
        for (let x = 0; x < matrix.length; x++) {
            newMatrix[y][x] = null;
        }
    }

    for (let y = 0; y < matrix.length; y++) {
        let rowY = matrix[y];
        console.log("Fill: ", rowY);
        for (let i = 0; i < rowY.length; i++) {
            let value = rowY[i];
            newMatrix[i][matrix.length - y - 1] = value;
        }

        console.log("--> after loop", y + 1);
        showMatrix(newMatrix)

        console.log("--------------------");
    }


    console.log("## OUTPUT:");
    showMatrix(newMatrix)
};

let myMatrix =
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

rotate(myMatrix);
