/*
326. Power of Three

Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?

Credits:
Special thanks to @dietpepsi for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    
    if(n === 0) {
        return false;
    }
    
    if(n === 1) {
        return true;
    }
    
    var value = -1;
    do {
        
        value = n%3;
        if(value !== 0) {
            return false;
        } else if(value === 0) {
            n = n/3;
        }
        
        if(n === 1 && value === 0) {
            return true;
        }
        
        
    } while (value === 0);
    
    return false;
    
    
};