/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    console.log("INPUT:");
    printMatrix(board);

    function getBoxKey(x, y) {
        let bx = x / 3;
        let by = y / 3;
        let boxKey = by * 3 + bx;
        return boxKey;
    }

    function fill(board, x, y) {
        if (y == 9)
            return true;

        let nx = (x + 1) % 9;
        let ny = (nx == 0) ? y + 1 : y;

        if (board[y][x] != '.') return fill(board, nx, ny);

        for (let i = 1; i <= 9; i++) {
            let boxKey = getBoxKey(x, y);
            if (boxes_[boxKey] == null) {
                boxes_[boxKey] = [];
            }
            if (!rows_[y][i] && !cols_[x][i] && !boxes_[boxKey][i]) {
                rows_[y][i] = 1;
                cols_[x][i] = 1;
                boxes_[boxKey][i] = 1;
                board[y][x] = i;
                if (fill(board, nx, ny)) {
                    return true;
                }
                board[y][x] = '.';
                boxes_[boxKey][i] = 0;
                cols_[x][i] = 0;
                rows_[y][i] = 0;
            }
        }
        return false;
    }


    rows_ = [];
    cols_ = [];
    boxes_ = [];

    for (let i = 0; i < 9; i++)
        for (let j = 0; j < 9; j++) {
            let c = board[i][j];
            if (c != '.') {
                let n = c;

                if (rows_[i] == null) {
                    rows_[i] = [];
                }
                rows_[i][n] = 1;

                if (cols_[j] == null) {
                    cols_[j] = [];
                }
                cols_[j][n] = 1;

                let boxKey = getBoxKey(j, i);
                if (boxes_[boxKey] == null) {
                    boxes_[boxKey] = [];
                }
                boxes_[boxKey][n] = 1;
            }
        }

    fill(board, 0, 0);

    console.log("OUTPUT");
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