/*
500. Keyboard Row

Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.


American keyboard


Example 1:
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
Note:
You may use one character in the keyboard more than once.
You may assume the input string will only contain letters of alphabet.
*/

/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    var row1="qwertyuiop";
    var row2="asdfghjkl";
    var row3="zxcvbnm";
    var result = [];
    for(var i=0; i< words.length; i++) {
        var word = words[i].toLowerCase();
        var mathRow = 0;
        for(var j=0; j< word.length; j++) {
            if(row1.indexOf(word[j]) != -1) {
                if(mathRow == 0 || mathRow == 1) {
                    mathRow = 1;    
                } else {
                    mathRow = -1;    
                    break;
                }
                
            } else if(row2.indexOf(word[j]) != -1) {
                if(mathRow == 0 || mathRow == 2) {
                    mathRow = 2;    
                } else {
                    mathRow = -1;    
                    break;
                }
            } else if(row3.indexOf(word[j]) != -1) {
                if(mathRow == 0 || mathRow == 3) {
                    mathRow = 3;    
                } else{
                    mathRow = -1;         
                    break;
                }
            }   
        }
        
        if(mathRow !== 0 && mathRow !== -1) {
            result.push(words[i]);
        }
        
    }
    
    return result;
};