/*
867. Transpose Matrix


Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.



Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 

Note:

1 <= A.length <= 1000
1 <= A[0].length <= 1000


*/


/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {

    const DBG = true;

    if(DBG)console.log("@INPUT:", A);

    // 1st, get original number of column
    if (DBG) console.log(A[0].length);
    let originalColumns = A[0].length;

    // 1st, get original number of row
    if (DBG) console.log(A.length);
    let originalRows = A.length;

    let newRows = originalColumns;
    let newColumns = originalRows;

    let items = A.toString().split(",").reverse();

    let result = [];
    for(let i = 0; i < newColumns; i++) {
        for(let j = 0; j < newRows; j++) {
            if(DBG)console.log("[j]", result[j]);
            if(result[j] == null) {
                result[j] = [];
            }
            if(DBG)console.log("[i]" , result[j][i]);
            result[j][i] = parseInt(items.pop());
        }
    }

    if(DBG)console.log("@ANSWER: ", result);
    return result;
};

let input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
transpose(input);
input = [[1,2,3],[4,5,6]]
transpose(input);