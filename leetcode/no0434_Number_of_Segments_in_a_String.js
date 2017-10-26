/*
434. Number of Segments in a String

Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.

Please note that the string does not contain any non-printable characters.

Example:

Input: "Hello, my name is John"
Output: 5
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    
    var result = 0;
    
    if(s.trim().length == 0 ) {
        return 0;
    }
    
    var words = s.trim().split(" ");
    var result = [];
    for(var i =0; i< words.length; i++) {
        if(words[i].trim().length !== 0 ) {
            result.push(words[i]);
        }
    }
    return result.length;
    
};