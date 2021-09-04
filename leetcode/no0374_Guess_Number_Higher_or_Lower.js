/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {

    let DBG = false;

    function getNumber(num) {
        return parseInt((num / 2).toString().split(".")[0])
    }

    let answer = -1;
    let startIndex = 0;
    let endIndex = n;
    let counter = 0;
    let myNum = getNumber(startIndex + endIndex);

    while (counter < n + 1) {

        if (DBG) console.log(`#${counter} Guest ${myNum}`);
        let result = guess(myNum)
        let diff = n - myNum;
        if (DBG) console.log("guess", myNum, "diff", diff);
        if (result > 0) {
            if (DBG) console.log("x >", myNum);
            startIndex = myNum;
            myNum = getNumber(startIndex + endIndex + 1);
        } else if (result < 0) {
            if (DBG) console.log("x <", myNum);
            endIndex = myNum;
            myNum = getNumber(startIndex + endIndex - 1);
        } else {
            if (DBG) console.log("x ==", myNum);
            console.log("bingo!");
            answer = myNum;
            break;
        }

        counter += 1;
    }

    return answer;
};

// Reference: Binary Search. 
// https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E5%B0%8B%E6%BC%94%E7%AE%97%E6%B3%95
