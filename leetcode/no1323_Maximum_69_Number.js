/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {

    let maxNum = 0;
    let nums = num.toString().split("");
    function checkMaxNum(nums) {
        let value = parseInt(nums.join(""));
        if (value > maxNum) {
            maxNum = value;
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let theNum = nums.slice(0);
        checkMaxNum(theNum);
        if (theNum[i] == 9) {
            theNum[i] = 6;
        } else {
            theNum[i] = 9;
        }
        checkMaxNum(theNum);
    }
    return maxNum;
};
