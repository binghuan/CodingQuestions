/*

120. Triangle

Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).

Note:

Bonus point if you are able to do this using only O(n) extra space, where n is the total number of rows in the triangle.

*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
let DBG = false;

var getNode = function (node, direction) {

    let level = node.level;
    let index = node.index;

    let nextLevel = level;
    let nextIndex = index;

    if (direction == "L") {
        nextLevel = level + 1;
    } else if (direction == "R") {
        nextLevel = level + 1;
        nextIndex = index + 1;
    }

    let value = tree[nextLevel] ? tree[nextLevel][nextIndex] : null;
    let nextNode = {
        level: nextLevel,
        index: nextIndex,
        value: value
    };
    if (value == null) {
        return null;
    }
    if (DBG) console.log("<< getNextNode: ", nextNode, direction);
    return nextNode;
}

let tree = null;
let paths = {};
let stack = [];
let currentPath = [];
let currentTotal = 0;

var recordPath = function () {
    if (DBG) console.log("@@ recordPath: ", currentPath.length, currentPath);
    let total = currentTotal;
    paths[JSON.stringify(currentPath)] = { sum: currentTotal, depth: currentPath.length };
    let maxLevel = currentPath.length;
    let path = currentPath;
    if (DBG) console.log("!!CHECK total =", total, "minSum = ", minSum);
    if (DBG) console.log("maxLevel:", maxLevel, "tree.length:", tree.length - 1);
    if (maxLevel == (tree.length - 1) && (minSum == null || total < minSum)) {
        minSumOfPath = path.slice(0);
        minSum = total;
        if (DBG) console.log("REPLACE --> minSum", minSum, "minSumOfPath = ", minSumOfPath);
    }
    if (DBG) console.log("@@ History: ", paths);
}

let minSumOfPath = null;
let minSum = null;

var minimumTotal = function (triangle) {

    minSumOfPath = null;
    minSum = null;
    paths = {};
    stack = [];
    currentPath = [];

    tree = triangle;

    if (tree.length == 1) {
        return tree[0][0];
    }

    if (DBG) console.log("## INPUT: ", triangle);

    let node = {
        level: 0,
        index: 0,
        value: triangle[0][0]
    };

    if (DBG) console.log("Start from:", node.level, node.index, " -->", node.value);

    let loopCount = 0;
    while (true) {

        loopCount += 1;

        let leftNode = getNode(node, "L");
        let rightNode = getNode(node, "R");
        let nextRighPath = currentPath.slice(0);
        let nextLeftPath = currentPath.slice(0);
        if (rightNode != null) {
            nextRighPath.push(rightNode);
        }

        if (leftNode != null) {
            nextLeftPath.push(leftNode);
        }
        if (DBG) console.log("nextRighPath:", nextRighPath);
        if (DBG) console.log("nextLeftPath:", nextLeftPath);
        if (DBG) console.log("currentPath: ", currentPath);
        if (DBG) console.log("paths: ", paths);
        if (DBG) console.log(paths[JSON.stringify(nextLeftPath)]);
        if (DBG) console.log(paths[JSON.stringify(nextRighPath)]);

        if (leftNode != null && !paths[JSON.stringify(nextLeftPath)]) {

            stack.push(node);
            currentPath.push(leftNode);
            currentTotal += leftNode.value;
            node = leftNode;
            if (DBG) console.log("to L: [", node.level, "][", node.index, "] -->", node.value);

        } else if (rightNode != null && !paths[JSON.stringify(nextRighPath)]) {

            stack.push(node);
            currentPath.push(rightNode);
            currentTotal += rightNode.value;
            node = rightNode;
            if (DBG) console.log("to R: [", node.level, "][", node.index, "] -->", node.value);

        } else {

            if (stack.length < 1) {
                break;
            }

            recordPath();
            node = stack.pop();
            previousNode = currentPath.pop();
            currentTotal -= previousNode.value;
            if (DBG) console.log("######## get back to [", node.level, "][", node.index, "]", node.value);

        }
    }

    if (DBG) console.log("@@ ANSWER: minSum = ", minSum + tree[0][0], "minSumOfPath:", minSumOfPath);
    return minSum + tree[0][0];
};

DBG = true;
if (DBG) {
    let input = [
        [2],
        [3, 4],
        [6, 5, 7],
        [4, 1, 8, 3]
    ];
    //minimumTotal(input);// answer= 11

    input = [
        [-1],
        [2, 3],
        [1, -1, -3]
    ];
    //minimumTotal(input);
}



// ### SOLUTION 2 ###
function minimumTotal2(triangle) {

    console.log("## INPUT:", triangle);

    if (triangle.length == 0) {
        return 0;
    }
    
    let dp = [];// this value is actually the bottom element count
    console.log("dp: ", dp);
    for (let i= triangle.length -1; i>=0; i--) {
        console.log("@@@@@@@@@@@@@@@@@@@@ IN LEVEL:", i);
        for (let j=0; j<triangle[i].length; j++) {
            console.log(" -- [", i, "][", j , "] ==> ", triangle[i][j]);
            let value = Math.min(dp[j], dp[j+1]);
            let validValue = value?value:0;
            dp[j] = validValue + triangle[i][j];
            console.log("## : j = ", j, ", ", validValue,"+" , triangle[i][j], " = ", dp[j]);
            console.log("dp: ", dp);
            console.log("---------------");
        }
    }

    console.log("stack: ", dp)
    console.log("## ANSWER: ", dp[0]);
    return dp[0];
}

// ### OUTPUT ###
/* 
## INPUT: [ [ 2 ], [ 3, 4 ], [ 6, 5, 7 ], [ 4, 1, 8, 3 ] ]
dp:  []
@@@@@@@@@@@@@@@@@@@@ IN LEVEL: 3
 -- [ 3 ][ 0 ] ==>  4
## : j =  0 ,  0 + 4  =  4
dp:  [ 4 ]
---------------
 -- [ 3 ][ 1 ] ==>  1
## : j =  1 ,  0 + 1  =  1
dp:  [ 4, 1 ]
---------------
 -- [ 3 ][ 2 ] ==>  8
## : j =  2 ,  0 + 8  =  8
dp:  [ 4, 1, 8 ]
---------------
 -- [ 3 ][ 3 ] ==>  3
## : j =  3 ,  0 + 3  =  3
dp:  [ 4, 1, 8, 3 ]
---------------
@@@@@@@@@@@@@@@@@@@@ IN LEVEL: 2
 -- [ 2 ][ 0 ] ==>  6
## : j =  0 ,  1 + 6  =  7
dp:  [ 7, 1, 8, 3 ]
---------------
 -- [ 2 ][ 1 ] ==>  5
## : j =  1 ,  1 + 5  =  6
dp:  [ 7, 6, 8, 3 ]
---------------
 -- [ 2 ][ 2 ] ==>  7
## : j =  2 ,  3 + 7  =  10
dp:  [ 7, 6, 10, 3 ]
---------------
@@@@@@@@@@@@@@@@@@@@ IN LEVEL: 1
 -- [ 1 ][ 0 ] ==>  3
## : j =  0 ,  6 + 3  =  9
dp:  [ 9, 6, 10, 3 ]
---------------
 -- [ 1 ][ 1 ] ==>  4
## : j =  1 ,  6 + 4  =  10
dp:  [ 9, 10, 10, 3 ]
---------------
@@@@@@@@@@@@@@@@@@@@ IN LEVEL: 0
 -- [ 0 ][ 0 ] ==>  2
## : j =  0 ,  9 + 2  =  11
dp:  [ 11, 10, 10, 3 ]
---------------
stack:  [ 11, 10, 10, 3 ]
## ANSWER:  11
*/
