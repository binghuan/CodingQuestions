
/**
 * LeetCode 1496: Path Crossing
 * 
 * Problem: Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving 
 * one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane 
 * and walk on the path specified by path.
 * 
 * Return true if the path crosses itself at any point, that is, if at any time you are on a location 
 * you have previously visited. Return false otherwise.
 * 
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
    // Use Set for O(1) lookup instead of object with counters
    const visited = new Set();
    visited.add("0,0"); // Start at origin

    let x = 0, y = 0;

    // Direction mapping for cleaner code
    const directions = {
        'N': [0, 1],
        'S': [0, -1],
        'E': [1, 0],
        'W': [-1, 0]
    };

    for (const direction of path) {
        // Update coordinates based on direction
        const [dx, dy] = directions[direction];
        x += dx;
        y += dy;

        const coordinate = `${x},${y}`;

        // If we've been here before, path crosses
        if (visited.has(coordinate)) {
            return true;
        }

        // Mark this position as visited
        visited.add(coordinate);
    }

    return false;
};

// Test cases
console.log("=== LeetCode 1496: Path Crossing Test Cases ===\n");

// Test Case 1: Simple crossing
let path1 = "NES";
console.log(`Test 1: path = "${path1}"`);
console.log(`Result: ${isPathCrossing(path1)}`); // Expected: false
console.log(`Explanation: Path goes (0,0) -> (0,1) -> (1,1) -> (1,0), no crossing\n`);

// Test Case 2: Path crosses itself
let path2 = "NESWW";
console.log(`Test 2: path = "${path2}"`);
console.log(`Result: ${isPathCrossing(path2)}`); // Expected: true
console.log(`Explanation: Path goes (0,0) -> (0,1) -> (1,1) -> (1,0) -> (0,0) -> (-1,0), crosses at origin\n`);

// Test Case 3: More complex crossing
let path3 = "NNSWWEWSSESSWENNW";
console.log(`Test 3: path = "${path3}"`);
console.log(`Result: ${isPathCrossing(path3)}`); // Expected: true
console.log(`Explanation: Complex path that eventually crosses itself\n`);

// Test Case 4: No crossing
let path4 = "NENESW";
console.log(`Test 4: path = "${path4}"`);
console.log(`Result: ${isPathCrossing(path4)}`); // Expected: false
console.log(`Explanation: Path doesn't cross itself\n`);

console.log("=== Algorithm Analysis ===");
console.log("Time Complexity: O(n) where n is the length of path");
console.log("Space Complexity: O(n) for storing visited coordinates");
console.log("Key optimizations:");
console.log("1. Use Set instead of Object for O(1) lookup");
console.log("2. Direction mapping eliminates long if-else chains");
console.log("3. Template literals for cleaner string formatting");
console.log("4. for...of loop is more readable than traditional for loop");
console.log("5. Removed unnecessary console.log statements for production code");