/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    let result = false;

    let answer = [];
    for (let i = 0; i < c; i++) {
        let a = Math.pow(i, 2);
        if (a  == c) {
            result = true;
            break;
        }

        let b = 0;
        if (i + 1 < c) {
            b = Math.pow(i + 1, 2)
        }
        if (a + b == c) {
            result = true;
            answer = [i,i+1]
            break;
        }
    }

    console.log("OUTPUT:", result, answer);
    return result;
};

judgeSquareSum(5) == true ? console.log("TEST OK"):console.log("TEST FAIL");
judgeSquareSum(4) == true ? console.log("TEST OK"):console.log("TEST FAIL");
judgeSquareSum(8) == true ? console.log("TEST OK"):console.log("TEST FAIL");

