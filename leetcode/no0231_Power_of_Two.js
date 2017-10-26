/*
231. Power of Two

Given an integer, write a function to determine if it is a power of two.

Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    
        if(n === 1) {
            console.log("path 0: true");
            return true;
        }
    
        if(n === 0) {
            console.log("path 0: false");
            return false;
        }
    
        var value = -99
        var temp = 0;
    
        do {
            
            value = n%2;
            if(value === 0) {
                n = n/2;    
            } else {
                console.log("path 1: false");
                return false;
            }
            
            if(value === 0 && n === 1) {
                console.log("path 2: true");
                return true;
            }
            
        } while(value === 0);
                
                console.log("path 3: false");
        return false;
    };