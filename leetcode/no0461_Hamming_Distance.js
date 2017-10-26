
/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, calculate the Hamming distance.

Note:
0 ≤ x, y < 231.

Example:

Input: x = 1, y = 4

Output: 2

Explanation:
1   (0 0 0 1)
4   (0 1 0 0)
       ↑   ↑

The above arrows point to positions where the corresponding bits are different.
*/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

var toBitsString = function(num) {
    
    var inputNum = num;

    var baseTimes = 0;
    for(var i =0; i< num ; i++) {
        var base = Math.pow(2, i);
        console.log("Check :", base, num <= base);
        if( num >= base ) {
            baseTimes = i;
        } else {
            break;
        }
    }

    console.log("BaseTimes : ", baseTimes);

    var result = "";
    for(var i = 0; i< baseTimes + 1; i++) {
        var times = baseTimes - i;
        var base = Math.pow(2, times);
        var value = (num/base).toString().split(".")[0];
        num = num % base;
        console.log("/ ", base, " --> value: ", value, result, " num:", num);
        result = result + value;
        
    }

    console.log("convert integer from ", inputNum , " to ___" + result + "___");

    return result;
};

var hammingDistance = function(x, y) {
    
    console.log("@@@@ INPUT X:", x, " Y:", y);

    var strX = toBitsString(x);
    var strY = toBitsString(y);

    var longStr = strX;
    var shortStr = strY;
    if(strX.length < strY.length) {
        longStr = strY; 
        shortStr = strX;
    }

    var diffLength = longStr.length - shortStr.length;
    for(var i =0; i< diffLength; i++) {
        shortStr = "0" + shortStr;
    }

    console.log("longStr = ", longStr, longStr.length, " shortStr:", shortStr, shortStr.length);

    var diffCount = 0;
    for(var i =0; i< longStr.length; i++) {
        if(longStr[i] != shortStr[i]) {
            diffCount +=1;
        }
    }

    console.log("diffCount:", diffCount);
    return diffCount;

};