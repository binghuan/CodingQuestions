/**
 * @param {number[][]} rectangle
 */
const DBG = false;
let matrix = null;
var SubrectangleQueries = function (rectangle) {
    if (DBG) console.log("init:", rectangle);
    matrix = rectangle;
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2 
 * @param {number} newValue
 * @return {void}
 */
SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {

    if (DBG) console.log("+++ updateSubrectangle +++", row1, col1, row2, col2, "newValue=", newValue);
    printMatrix(matrix);
    for (let i = row1; i <= row2; i++) {
        for (let j = col1; j <= col2; j++) {
            matrix[i][j] = newValue;
        }
    }

    if (DBG) console.log("--- updateSubrectangle ---");
    printMatrix(matrix);
};

/** 
 * @param {number} row 
 * @param {number} col
 * @return {number}
 */
SubrectangleQueries.prototype.getValue = function (row, col) {
    if (DBG) console.log("+++ getValue +++", row, col);
    return matrix[row][col];
};

function printMatrix(matrix) {
    if (!DBG) {
        return;
    }
    console.log("--> printMatrix ----------------->");
    matrix.forEach((row) => {
        console.log(row);
    })
    console.log("--> printMatrix -----------------<");
}

/**
 * Your SubrectangleQueries object will be instantiated and called as such:
 * var obj = new SubrectangleQueries(rectangle)
 * obj.updateSubrectangle(row1,col1,row2,col2,newValue)
 * var param_2 = obj.getValue(row,col)
 */