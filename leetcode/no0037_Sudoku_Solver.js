/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    const DBG = true;
    if (DBG) console.log("INPUT:");
    if (DBG) printMatrix(board);

    function getBoxKey(x, y) {
        let bx = x / 3;
        let by = y / 3;
        let boxKey = by * 3 + bx;
        return boxKey;
    }

    function fill(board, x, y) {
        if (y == 9) {
            return true;
        }

        let next_X = (x + 1) % 9;
        let next_Y = (next_X == 0) ? y + 1 : y;

        if (board[y][x] != '.') {
            return fill(board, next_X, next_Y);
        }

        for (let i = 1; i <= 9; i++) {
            let boxKey = getBoxKey(x, y);
            if (!rows[y][i] && !cols[x][i] && !boxes[boxKey][i]) {
                rows[y][i] = 1;
                cols[x][i] = 1;
                boxes[boxKey][i] = 1;
                board[y][x] = i;
                if (fill(board, next_X, next_Y)) {
                    return true;
                }
                board[y][x] = '.';
                boxes[boxKey][i] = 0;
                cols[x][i] = 0;
                rows[y][i] = 0;
            }
        }
        return false;
    }

    // 
    let rows = [];
    let cols = [];
    let boxes = [];

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
    fill(board, 0, 0);
    if (DBG) console.log("OUTPUT");
    printMatrix(board);
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