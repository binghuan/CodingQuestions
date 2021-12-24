/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    const DBG = true;
    if (board.length == 0) {
        return false;
    }

    let width = board.length;
    let height = board[0].length;

    function search(board, word, indexInSearch, x, y) {

        if (x < 0 || x == width || y < 0 || y == height ||
            word[indexInSearch] != board[y][x]) {
            return false;
        }

        if (indexInSearch == word.length - 1) {
            return true;
        }

        cur = board[y][x];
        board[y][x] = 0;// Mark the path has been visited.
        printBoard(board, indexInSearch, x, y);
        let isFound = (
            search(board, word, indexInSearch + 1, x + 1, y) ||
            search(board, word, indexInSearch + 1, x - 1, y) ||
            search(board, word, indexInSearch + 1, x, y + 1) ||
            search(board, word, indexInSearch + 1, x, y - 1)
        );

        board[y][x] = cur;// Rollback the path.
        if (DBG) console.log("!!Rollback");
        if (DBG) printBoard(board, indexInSearch, x, y);
        return isFound;
    }

    for (let i = 0; i < width; i++) {
        for (let j = 0; j < height; j++) {
            if (search(board, word, 0, i, j)) {
                return true;
            }
        }
    }
};

function printBoard(board, indexInSearch, x, y) {
    console.log("Check index:\"", indexInSearch, "\"from", word, "=", word[indexInSearch], "x=", x, "y=", y)
    board.forEach((row) => {
        console.log(row);
    })
    console.log("----------------------------------------------------<")
}

exist([
    ["A", "B",],
    ["C", "D"]
], "ABDC") ? console.log("PASS") : console.log("FAIL");

// exist([
//     ["A", "B", "C", "E"],
//     ["S", "F", "C", "S"],
//     ["A", "D", "E", "E"]
// ], "ABCCED") ? console.log("PASS") : console.log("FAIL");
// Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
// Output: true

// Related Problem: https://leetcode.com/problems/number-of-islands/