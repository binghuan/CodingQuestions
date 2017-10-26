/*
191. Number of 1 Bits

Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
/**
 * @param {string} str
 * @return {number}
 */
var toBits = function(num) {
    console.log("@@@@@@ INPUT:", num);


    var twoTimes = 0;
    var base = 1;
    var baseIndex = 0;
    for(var i=0; i< num ; i++) {
        base = Math.pow(2, i);
        if(num >= base) {
            twoTimes = i;
        } else {
            break;
        }
    }
    console.log("Max 2^n will be ", twoTimes);

    var ans = "";
    for(var i =twoTimes; i> -1; i--) {
        var base = Math.pow(2, i);
        var temp = (num/base).toString().split(".")[0];
        num = num%base;
        ans = ans + temp;

        console.log("Try base:", base, " --> ", ans, num);
        
    }
    
    console.log("@@@@@@ OUTPUT:", ans);

    return ans;
};
var hammingWeight = function(n) {
    // method 1 to convert int to bits
    //var bitString = (n).toString(2);
    
    // meethod 2
    var bitString = toBits(n);
    
    var sum = 0;
    for(var i =0; i< bitString.length; i++) {
        if(bitString[i] === "1") {
            sum +=1;
        }
    }
    
    return sum;
    
};