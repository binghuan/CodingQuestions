/*
387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    
    var wordList = s.split("");
    var mark = {};
    for(var i =0; i< wordList.length; i++) {
        if(mark[wordList[i]] != null) {
            mark[wordList[i]] +=1;
        } else {
            mark[wordList[i]] =1;
        }
    }

    for(var i =0; i< wordList.length; i++) {
        if(mark[wordList[i]] == 1) {
            console.log(i);
            return i; 
        }
    }

    console.log(-1);
    return -1;
};