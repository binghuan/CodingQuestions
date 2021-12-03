/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {

    let grid = [];
    strs.forEach((stringForRow) => {
        for (let i = 0; i < stringForRow.length; i++) {
            let char = stringForRow[i];

            if (grid[i] == null) {
                grid[i] = [];
            }
            grid[i].push(char);
        }
    })

    let columnsToBeDeleted = 0;
    grid.forEach((charsForColumn) => {
        let sortedChars = charsForColumn.slice(0);
        charsForColumn.sort();
        if (sortedChars.toString() != charsForColumn.toString()) {
            columnsToBeDeleted += 1;
        }
    })
    return columnsToBeDeleted;
};