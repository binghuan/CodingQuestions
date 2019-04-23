// link: https://leetcode.com/problems/climbing-stairs/

/**
 * @param {number} n
 * @return {number}
 */
let historyMap = {};
var climbStairs = function (n) {

    console.log("## INPUT:", n);

    if (n == 1) {
        return 1;
    }

    if (n == 2) {
        return 2;
    }

    if (n <= 0) {
        return 0;
    }

    if (historyMap.hasOwnProperty(n)) {
        return historyMap[n];
    }

    let steps = climbStairs(n - 1) + climbStairs(n - 2);
    historyMap[n] = steps;
    console.log("--> steps", steps);
    return steps;

};