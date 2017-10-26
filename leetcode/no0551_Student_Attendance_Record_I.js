/*
551. Student Attendance Record I

You are given a string representing an attendance record for a student. The record only contains the following three characters:

'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/


/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    
    if(s.indexOf("LLL") != -1) {
        console.log("more than two continuous LL");
        return false;
    }
    
    var record = {};
    for(var i=0; i< s.length; i++) {
        if(record[s[i]] == null) {
            record[s[i]] =1;
        } else {
            record[s[i]] +=1;
        }
    }
    
    if(record["A"] > 1) {
        console.log("more than one A (absent)");
        return false;
    }
    
    return true;
    
};