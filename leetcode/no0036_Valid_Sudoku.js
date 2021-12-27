
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const DBG = false;

    const height = board.length;
    const width = board[0].length;
    let rows = [], cols = [], boxes = [];

    function getIndexOfBox(x, y) {
        let box_X = parseInt(x / 3);
        let box_Y = parseInt(y / 3);
        let index = box_Y * 3 + box_X;
        return index;
    }

    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            let num = board[y][x];
            if (num == ".") {
                continue;
            }
            if (DBG) console.log(`check x=${x}, y=${y}, num=${num}`);

            // Step 1: Check number in Box.
            let boxIndex = getIndexOfBox(x, y)
            if (boxes[boxIndex] == null) {
                boxes[boxIndex] = [];
            }
            if (boxes[boxIndex][num] == true) {
                if (DBG) console.log("OUTPUT: boxes", false);
                return false;
            } else {
                boxes[boxIndex][num] = true;
            }

            // Step 2: Check number in Row
            if (rows[y] == null) {
                rows[y] = [];
            }
            if (rows[y][num] == true) {
                if (DBG) console.log("OUTPUT: rows", false);
                return false;
            } else {
                rows[y][num] = true;
            }

            // Step 3: Check number in Column
            if (cols[x] == null) {
                cols[x] = [];
            }
            if (cols[x][num] == true) {
                if (DBG) console.log("OUTPUT: cols", false);
                return false;
            } else {
                cols[x][num] = true;
            }
        }
    }

    if (DBG) console.log("OUTPUT:", true);
    return true;
};

if (isValidSudoku(
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
) != true) { console.log("FAIL , Test A, "); return; }

if (isValidSudoku(
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
) != false) { console.log("FAIL , Test B, "); return; }

if (isValidSudoku(
    [[".", "8", "7", "6", "5", "4", "3", "2", "1"],
    ["2", ".", ".", ".", ".", ".", ".", ".", "."],
    ["3", ".", ".", ".", ".", ".", ".", ".", "."],
    ["4", ".", ".", ".", ".", ".", ".", ".", "."],
    ["5", ".", ".", ".", ".", ".", ".", ".", "."],
    ["6", ".", ".", ".", ".", ".", ".", ".", "."],
    ["7", ".", ".", ".", ".", ".", ".", ".", "."],
    ["8", ".", ".", ".", ".", ".", ".", ".", "."],
    ["9", ".", ".", ".", ".", ".", ".", ".", "."]]
) != true) { console.log("FAIL , Test 446, "); return; }

console.log("OK> PASS ALL TEST CASES");