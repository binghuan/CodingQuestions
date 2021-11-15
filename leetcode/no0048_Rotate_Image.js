/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {

    console.log("INPUT:");
    printMatrix(matrix);

    let height = matrix.length;
    let width = matrix[0].length;
    let middle = width / 2;

    /* For Example: A -> B -> D -> C
        A, B
        C, D
    */

    for (let y = 0; y < middle; y++) {
        for (let x = 0; x < parseInt(middle); x++) {

            // Store C to Temp 
            let temp = matrix[height - 1 - x][y];
            //  "temp"              "C"

            // Move D to C
            matrix[height - 1 - x][y] = matrix[height - 1 - y][width - 1 - x];
            //              "C"                         "D"

            // Move B to D
            matrix[height - 1 - y][width - 1 - x] = matrix[x][width - 1 - y];
            //              "D"                         "B"

            // Move A to B: [0, 0] -> [1, 0] -> [2, 0] on 1st round
            matrix[x][width - 1 - y] = matrix[y][x];
            //              "B"             "A"

            // Move temp to A
            matrix[y][x] = temp;
            //  "B"         "A"
        }
    }

    console.log("OUTPUT:");
    printMatrix(matrix);

}

function printMatrix(matrix) {
    console.log("-------------------------------------------------------->");
    matrix.forEach((row) => {
        console.log(row);
    })
    console.log("--------------------------------------------------------<");
}


rotate([
    [1, 2],
    [3, 4]
]);
rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])

// Reference: https://leetcode.com/problems/rotate-image/solution/