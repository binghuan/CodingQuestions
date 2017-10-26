/*
405. Convert a Number to Hexadecimal

Given an integer, write an algorithm to convert it to hexadecimal. For negative integer, two’s complement method is used.

Note:

All letters in hexadecimal (a-f) must be in lowercase.
The hexadecimal string must not contain extra leading 0s. If the number is zero, it is represented by a single zero character '0'; otherwise, the first character in the hexadecimal string will not be the zero character.
The given number is guaranteed to fit within the range of a 32-bit signed integer.
You must not use any method provided by the library which converts/formats the number to hex directly.
Example 1:

Input:
26

Output:
"1a"
Example 2:

Input:
-1

Output:
"ffffffff"
*/

/**
 * @param {number} num
 * @return {string}
 */
var toHex = function (num) {

    console.log(">> toHex:", num);
    

    if( num === -1) {
        console.log("OUTPUT: ", "ffffffff");
        return "ffffffff";
    } else if(num === 0 ) {
        console.log("OUTPUT: ", "0");
        return "0";
    }

    if(num < 0) {
        num = 4294967295 - Math.abs(num) + 1;
    }

    console.log("INTPUT: ", num);

    var hTimes = 0;
    for (var i = 0; i < num; i++) {
        var base = Math.pow(16, i);
        console.log("check base: ", base);
        if (num > base) {
            hTimes = i;
        } else {
            break;
        }
    }

    console.log("hTimes = ", hTimes);

    var getTextbyValue = function (value) {

        var char = parseInt(value);

        var result = "";
        switch (char) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                result = char.toString();
                break;
            case 10:
                result = "a";
                break;
            case 11:
                result = "b";
                break;
            case 12:
                result = "c";
                break;
            case 13:
                result = "d";
                break;
            case 14:
                result = "e";
                break;
            case 15:
                result = "f";
                break;
        }

        return result;
    };

    var result = "";
    for(var i = hTimes +1; i > -1; i--) {
        var base = Math.pow(16, i);
        var t1 = num % base;
        var t2 = (num/base).toString().split(".")[0];
        result = result + "" + getTextbyValue(t2);
        num = t1;
        console.log("Try base: ", base, t1, t2, result, num);
    }

    while (result[0] == "0") {
        result = result.substring(1);
    } 

    console.log("OUTPUT: ", result);
    return result;

};