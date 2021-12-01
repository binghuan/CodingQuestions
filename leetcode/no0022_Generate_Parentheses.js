/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    const DBG = true;
    if (DBG) console.log(">> generateParenthesis:", n);

    function backtrack(ans, curr, open, close, max) {

        if (DBG) console.log("curr  :", curr);
        if (curr.length == max * 2) {
            let combination = curr.toString();
            ans.push(combination);
            if (DBG) console.log(":: OK> Add:", combination)
            return;
        }

        if (open < max) {
            if (DBG) console.log("+ (");
            curr.push("(");
            backtrack(ans, curr, open + 1, close, max);
            let removedElement = curr.pop();
            if (DBG) console.log("-pop:", removedElement,  curr);
        }

        if (close < open) {
            if (DBG) console.log("+ )");
            curr.push(")");
            backtrack(ans, curr, open, close + 1, max);
            let removedElement = curr.pop();
            if (DBG) console.log("=pop:", removedElement, curr);
            
        }
    }

    let ans = [];
    let curr = [];
    backtrack(ans, curr, 0, 0, n);
    if (DBG) console.log("OUTPUT:", ans);
};

generateParenthesis(2);
/*
Approach 2: Backtracking
Intuition and Algorithm

Instead of adding '(' or ')' every time as in Approach 1,
let's only add them when we know it will remain a valid sequence.
We can do this by keeping track of the number of opening and closing brackets we have placed so far.

We can start an opening bracket if we still have one (of n) left to place.
And we can start a closing bracket if it would not exceed the number of opening brackets.
*/