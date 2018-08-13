/*
We are given two sentences A and B.  
(A sentence is a string of space separated words.  Each word consists only of lowercase letters.)

A word is uncommon if it appears exactly once in one of the sentences, 
and does not appear in the other sentence.

Return a list of all uncommon words. 

You may return the list in any order.

Example 1:

Input: A = "this apple is sweet", B = "this apple is sour"
Output: ["sweet","sour"]
Example 2:

Input: A = "apple apple", B = "banana"
Output: ["banana"]

*/


/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
    
    const DBG = false;
    let table = {};
    let chars = []; 
    chars = chars.concat(A.split(" "), B.split(" "));
    if(DBG)console.log("chars:", chars);

    for(let i =0; i < chars.length; i++) {
        let char = chars[i];
        if(DBG)console.log("check: ", char);
        if(!table.hasOwnProperty(char)) {
            table[char] = 1;
        } else {
            table[char] +=1;
        }
    }

    if(DBG)console.log("table:" , table);

    let answer = [];
    for(let i =0; i < Object.keys(table).length; i++) {
        let char = Object.keys(table)[i];
        if(table[char] === 1) {
            answer.push(char);
            //break;
        }
    }

    console.log("@@ ANSWER: ___", answer, "___");
    return answer;
};

let A = "apple apple", B = "banana";
uncommonFromSentences(A, B);

