/*
125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

For example,
"A man, a plan, a canal: Panama" is a palindrome.
"race a car" is not a palindrome.

Note:
Have you consider that the string might be empty? This is a good question to ask during an interview.

For the purpose of this problem, we define empty string as valid palindrome.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    var newS = s.replace(/\W+/g, "");    
    var words = newS.split("");
    var xS = "";
    for(var i=0; i< words.length; i++) {
        xS = words[i] + xS;
    }

    console.log("input:    ", newS);
    console.log("reversed: ", xS);

    if(newS.toLowerCase() == xS.toLowerCase()) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
};