/*
342. Power of Four

Given an integer (signed 32 bits), write a function to check whether it is a power of 4.

Example:
Given num = 16, return true. Given num = 5, return false.

Follow up: Could you solve it without loops/recursion?

Credits:
Special thanks to @yukuairoy for adding this problem and creating all test cases.
*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    
    if(num === 0 ) {
        console.log("false");
        return false;
    }

    if(num === 1) {
        console.log("true");
        return true;
    }

    var value = 0;
    do {

        value = num%4;
        if(value === 0) {
            num = num/4;
        }

        console.log(value, num);
        
        if(value === 0 && num === 1) {
            console.log("true");
            return true;
        }
        
    } while(value === 0);
    
    console.log("false");
    return false;
};