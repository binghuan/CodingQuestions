/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

    for (let i = 0; i < obstacleGrid.length; i++) {
        console.log(obstacleGrid[i])
    }

    let height = obstacleGrid.length;
    let width = obstacleGrid[0].length;
    console.log(`INPUT: width x height = ${width} x ${height}`);

    let map = {};

    function dp(x, y) {
        //console.log(`check x=${x}, y=${y}`);
        let path = `${x},${y}`;

        if (x <= 0 || y <= 0) {
            return 0;
        }

        // Reaching the starting point.
        // Note, there might be an obstacle here as well.
        if (x == 1 && y == 1) {
            return 1 - obstacleGrid[0][0];
        }

        // Already solved, return the answer.
        if (map[path] != null) {
            return map[path];
        }

        // There is an obstacle on current block, no path
        if (obstacleGrid[x - 1][y - 1] == 1) {
            //console.log("!! HIT");
            return 0;
        }

        let leftPaths = dp(x - 1, y);
        let rightPaths = dp(x, y - 1);
        let totalPaths = leftPaths + rightPaths;
        map[path] = totalPaths;

        return totalPaths;

    }

    let result = dp(height, width);
    //console.log("result=", result);
    return result;
};

//uniquePathsWithObstacles([[1, 0]])
//uniquePathsWithObstacles([[0, 0]])
uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]])

