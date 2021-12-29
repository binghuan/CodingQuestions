/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    const DBG = false;
    if (DBG) console.log("INPUT:");
    if (DBG) printMatrix(board);

    // Method to generate the ID for each box.
    function getBoxKey(x, y) {
        let box_X = parseInt(x / 3);
        let box_Y = parseInt(y / 3);
        let boxKey = box_Y * 3 + box_X;
        return boxKey;
    }

    function fill(board, x, y) {

        // If y == 9; it is out of range, so we assume it has reached the end of the board
        if (y == 9) {
            return true;
        }

        // Calculate next position.
        let next_X = (x + 1) % 9;
        let next_Y = (next_X == 0) ? y + 1 : y;

        // if current char is NOT ".", go to check next position. 
        if (board[y][x] != '.') {
            return fill(board, next_X, next_Y);
        }

        // Try to fill numbers
        for (let i = 1; i <= 9; i++) {
            let boxKey = getBoxKey(x, y);
            if (!rows[y][i] &&      // There is no number "i" in the row.
                !cols[x][i] &&      // There is no number "i" in the column.
                !boxes[boxKey][i]   // There is no number "i" in the box.
            ) {
                rows[y][i] = 1; // Mark number "i" in the row has been taken.
                cols[x][i] = 1; // Mark number "i" in the column has been taken.
                boxes[boxKey][i] = 1; // Mark number "i" in the box has been taken.
                board[y][x] = i.toString(); // Assign number "i" to the position.
                if (fill(board, next_X, next_Y)) {
                    return true;
                } else {
                    // Rollback the number taken
                    board[y][x] = '.';
                    boxes[boxKey][i] = 0;
                    cols[x][i] = 0;
                    rows[y][i] = 0;
                }
            }
        }
        return false;
    }

    let rows = [];  // if 1 was taken in row #1, so mark rows[0][1] = 1;
    let cols = [];  // if 1 was taken in column #1, so mark cols[0][1] = 1;
    let boxes = []; // if 1 was taken in Box #1, so mark boxes[1][1] = 1;

    (function cleanupMarkers() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let num = board[i][j];
                let boxKey = getBoxKey(j, i);
                if (boxes[boxKey] == null) {
                    boxes[boxKey] = [];
                }
                if (num == '.') {
                    continue;
                }
                if (rows[i] == null) {
                    rows[i] = [];
                }
                rows[i][num] = 1;

                if (cols[j] == null) {
                    cols[j] = [];
                }
                cols[j][num] = 1;
                boxes[boxKey][num] = 1;
            }
        }
    })();

    fill(board, 0, 0);
    if (DBG) console.log("OUTPUT");
    if (DBG) printMatrix(board);
};

function printMatrix(matrix) {
    console.log("----------------->");
    matrix.forEach((rows) => {
        console.log(rows.toString());
    })
    console.log("-----------------<");
}

let board = [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

solveSudoku(board);