/*
'#' is delete
Input: S = "ab#c", T= "ab#c"
Output: true
Explanation: Both S and T becom "ac", 

Coding Question from Grab Taipei.
*/

let strTransfer = (input) => {
    console.log("INPUT :", input);
    let result = [];
    let chars = input.split("");
    for (let i = 0; i < input.length; i++) {
        let char = chars[i];
        if (char == "#") {
            result.pop();
        } else {
            result.push(char);
        }
    }

    let ans = result.toString().replace(/,/, "");
    console.log("OUTPUT:", ans, "\n------------");
}

strTransfer("ab#c")
strTransfer("ab###c")
strTransfer("#a#c")