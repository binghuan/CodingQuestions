/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    function showMatrix(grid) {

        console.log("--------------->");
        grid.forEach((row) => {
            console.log(row);
        })
        console.log("---------------<");

    }

    function dfs(grid, x, y, n, m) {
        if (x < 0 || y < 0 || x >= n || y >= m || grid[y][x] == '0')
            return;

        grid[y][x] = '0';
        showMatrix(grid);
        dfs(grid, x + 1, y, n, m);
        dfs(grid, x - 1, y, n, m);
        dfs(grid, x, y + 1, n, m);
        dfs(grid, x, y - 1, n, m);
    }

    let m = grid.length;
    if (m == 0) {
        return 0;
    }
    let n = grid[0].length;

    let ans = 0;
    for (let y = 0; y < m; ++y)
        for (let x = 0; x < n; ++x)
            if (grid[y][x] == '1') {
                ++ans;
                dfs(grid, x, y, n, m);
            }

    return ans;

};

let grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
];

numIslands(grid)
