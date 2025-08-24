/**
 * 994. Rotting Oranges
 * Multi-source BFS: push all initially rotten oranges into a queue, then
 * rot their 4-directional fresh neighbors level-by-level (minute-by-minute).
 * Time: O(m*n), Space: O(m*n)
 *
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length;
    const n = grid[0].length;

    const q = [];
    let fresh = 0;

    // Collect initial rotten oranges and count fresh ones
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 2) q.push([r, c]);
            else if (grid[r][c] === 1) fresh++;
        }
    }

    if (fresh === 0) return 0; // Nothing to rot

    const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
    ];

    let minutes = 0;

    // BFS layer by layer; each layer corresponds to 1 minute
    while (q.length > 0 && fresh > 0) {
        const size = q.length;
        for (let i = 0; i < size; i++) {
            const [r, c] = q.shift();
            for (const [dr, dc] of dirs) {
                const nr = r + dr;
                const nc = c + dc;
                if (
                    nr >= 0 &&
                    nr < m &&
                    nc >= 0 &&
                    nc < n &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2; // becomes rotten
                    fresh--;
                    q.push([nr, nc]);
                }
            }
        }
        minutes++;
    }

    return fresh === 0 ? minutes : -1;
};

// -----------------
// Tiny test harness
// Run this file with `node leetcode/no0994_Rotting_Oranges.js`
// -----------------
function runTests() {
    const cases = [
        {
            grid: [
                [2, 1, 1],
                [1, 1, 0],
                [0, 1, 1],
            ],
            expect: 4,
        },
        {
            grid: [
                [2, 1, 1],
                [0, 1, 1],
                [1, 0, 1],
            ],
            expect: -1,
        },
        { grid: [[0, 2]], expect: 0 },
        { grid: [[1]], expect: -1 }, // one fresh, no rotten
        { grid: [[2]], expect: 0 }, // already rotten only
    ];

    let pass = 0;
    cases.forEach((tc, idx) => {
        // Deep copy grid to avoid mutation between cases
        const g = tc.grid.map((row) => row.slice());
        const got = orangesRotting(g);
        const ok = got === tc.expect;
        if (ok) pass++;
        console.log(
            `Case ${idx + 1}: expect ${tc.expect}, got ${got} ${ok ? '✓' : '✗'}`
        );
    });
    console.log(`Passed ${pass}/${cases.length} cases.`);
}

if (require.main === module) {
    runTests();
}

module.exports = { orangesRotting };


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    const queue = [];
    let freshCount = 0;

    // 初始化：找出所有腐爛橘子，並統計新鮮橘子數量
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c]);
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // 如果一開始就沒有新鮮橘子
    if (freshCount === 0) return 0;

    let minutes = 0;
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    // BFS 擴散腐爛
    while (queue.length > 0) {
        const size = queue.length;
        let infected = false;

        for (let i = 0; i < size; i++) {
            const [r, c] = queue.shift();

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === 1
                ) {
                    grid[nr][nc] = 2;
                    queue.push([nr, nc]);
                    freshCount--;
                    infected = true;
                }
            }
        }

        // 只有當這一輪有新橘子被感染，才加時間
        if (infected) minutes++;
    }

    return freshCount === 0 ? minutes : -1;
};
