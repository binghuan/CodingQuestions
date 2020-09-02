/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {

    console.log("## INPUT:", low, high);

    let counter = 0;

    for (let i = low; i < high + 1; i++) {

        let number = i;
        let isOdd = false;
        let r = (number%2 !== 0);
        //console.log("check number", number, number%2, r);

        if (r) {
            counter += 1;
        }
    }

    console.log("## OUTPUT:", counter);
    return counter;

};


countOdds(3, 7);

/*

Example 1:

Input: low = 3, high = 7
Output: 3
Explanation: The odd numbers between 3 and 7 are [3,5,7].
Example 2:

Input: low = 8, high = 10
Output: 1
Explanation: The odd numbers between 8 and 10 are [9].

*/
