/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function (arr) {

    console.log("## INPUT: ", arr);


    let counter = 0;
    let result = false;
    let charArray = [];
    for (let i = 0; i < arr.length; i++) {

        let char = arr[i];
        let isOdds = false;
        if (char % 2 != 0) {
            isOdds = true;
            counter += 1;
            charArray.push(char);
        } else {
            counter = 0;
            charArray = [];
        }

        if(counter >= 3 ) {
            result = true;
            console.log("!! HIT: ", JSON.stringify(charArray));
            break;
        }
    }


    console.log("## OUTPUT: ", result);
    return result;
};

threeConsecutiveOdds([2,6,4,1]);// false
threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]); // true
threeConsecutiveOdds([1,2,1,1]); // false

/*
Example 1:


Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.
*/