/*
168. Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
Credits:
Special thanks to @ifanchu for adding this problem and creating all test cases.
*/

/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
    
        var columnIndex = ["Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        var getIndexByChar = function (char) {
            return columnIndex.indexOf(char);
        }
    
        console.log("@@ INPUT: ", n);
    
        // get max number
        var maxNum = 0;
        var count = 0;
        var done = false;
        if (n < 27) {
            console.log(columnIndex[n]);
            return columnIndex[n];
        } else {
            var virtualSum = 0;
            do {
                console.log("Check : ", n, Math.pow(26, count), n > Math.pow(26, count));
                if (n < Math.pow(26, count) + virtualSum) {
                    done = true;
                } else {
                    virtualSum += Math.pow(26, count);
                    count += 1;
                }
    
            } while (done == false);
            console.log("count: ", count);
    
            var temp = n;
            var result = "";
            for (var i = count - 1; i > -1; i--) {
                var value = parseInt(temp / Math.pow(26, i));
                console.log(temp, Math.pow(26, i), value, i);
                temp -= value * Math.pow(26, i);
                if(temp == 0 && i > 0) {
                    value = value -1;
                }
                result = result + columnIndex[value];
    
                console.log(value, temp, result);
            }
    
            console.log(result);
            return result;
        }
    };