/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

let pathHistory = [];

var uniquePaths = function (m, n) {

    if (m == 1 || n == 1) {
        return 1;
    }

    let path = m + "," + n;

    if (pathHistory.hasOwnProperty(path)) {
        return pathHistory[path];
    }
    let totalPathOnTheLeft = uniquePaths(m - 1, n);
    let totalPathOnTheRight = uniquePaths(m, n - 1);

    let totalPath = totalPathOnTheLeft + totalPathOnTheRight;
    pathHistory[path] = totalPath
    return totalPath;
};