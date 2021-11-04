/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {

    const DBG = false;

    let sum = 0;
    nums.forEach((num) => {
        sum += num;
    })

    let sumOnTheLeft = 0;
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (DBG) console.log("check:", num, nums[i - 1]);

        if (i > 0) {
            sumOnTheLeft += nums[i - 1];
        }

        let sumOnTheRight = 0;
        if (num < 0) {
            sumOnTheRight = sum - sumOnTheLeft + Math.abs(num);
        } else {
            sumOnTheRight = sum - sumOnTheLeft - Math.abs(num);
        }

        if (DBG) console.log("right:", sumOnTheRight, "left:", sumOnTheLeft);

        if (sumOnTheLeft == sumOnTheRight) {
            if (DBG) console.log("OUTPUT:", i);
            return i;
        }
    }

    if (DBG) console.log("OUTPUT:", -1);
    return -1;
};