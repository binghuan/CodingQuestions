/**
 * @param {string[]} logs
 * @return {number}
 */
var minOperations = function (logs) {
    let level = 0;

    logs.forEach((log) => {
        if (log == "../") {
            level -= 1;
            if (level < 0) {
                level = 0;
            }
        } else if (log == "./") {
            // don't move
        } else {
            level += 1;
        }
    })

    return level;
};


let logs = ["d1/", "d2/", "../", "d21/", "./"]
minOperations(logs);