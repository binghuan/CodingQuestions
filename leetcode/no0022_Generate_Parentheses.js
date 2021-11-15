// class Solution {
//     public List<String> generateParenthesis(int n) {
//         List<String> ans = new ArrayList();
//         backtrack(ans, new StringBuilder(), 0, 0, n);
//         return ans;
//     }

//     public void backtrack(List<String> ans, StringBuilder cur, int open, int close, int max){
//         if (cur.length() == max * 2) {
//             ans.add(cur.toString());
//             return;
//         }

//         if (open < max) {
//             cur.append("(");
//             backtrack(ans, cur, open+1, close, max);
//             cur.deleteCharAt(cur.length() - 1);
//         }
//         if (close < open) {
//             cur.append(")");
//             backtrack(ans, cur, open, close+1, max);
//             cur.deleteCharAt(cur.length() - 1);
//         }
//     }
// }

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {

    console.log(">> generateParenthesis:", n);

    function backtrack(ans, curr, open, close, max) {

        console.log("curr  :", curr);
        if (curr.length == max * 2) {
            let combination = curr.toString();
            ans.push(combination);
            console.log(":: OK> Add:", combination)
            return;
        }

        if (open < max) {
            console.log("+ (");
            curr.push("(");
            backtrack(ans, curr, open + 1, close, max);
            curr.pop();
            console.log("popped:", curr);
        }

        if (close < open) {
            console.log("+ )");
            curr.push(")");
            backtrack(ans, curr, open, close + 1, max);
            console.log("popped:", curr);
            curr.pop();
        }

    }

    let ans = [];
    let curr = [];
    backtrack(ans, curr, 0, 0, n);
    console.log("OUTPUT:", ans);
};

generateParenthesis(3);
/*
Approach 2: Backtracking
Intuition and Algorithm

Instead of adding '(' or ')' every time as in Approach 1, 
let's only add them when we know it will remain a valid sequence. 
We can do this by keeping track of the number of opening and closing brackets we have placed so far.

We can start an opening bracket if we still have one (of n) left to place. 
And we can start a closing bracket if it would not exceed the number of opening brackets.
*/