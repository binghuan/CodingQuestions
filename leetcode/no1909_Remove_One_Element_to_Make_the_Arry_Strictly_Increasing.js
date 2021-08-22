/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function (nums) {

    let lastIndex = -1;
    let lastNum = null;
    let toleratedTimes = 0;

    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];

        if (lastIndex == -1) {
            lastIndex = i;
            lastNum = num;
        } else {
            console.log("Check ", lastNum, "<->", num);
            if (lastNum >= num) {
                toleratedTimes += 1;
                console.log("toleratedTimes:", toleratedTimes);
                // decide which num to be stored to lastNum
                lastIndex = lastIndex - 1;
                lastNum = nums[lastIndex];
                if (num <= lastNum) {
                    lastIndex = lastIndex + 1;
                    lastNum = nums[lastIndex];
                } else {
                    i -= 1;
                }

                console.log("reset lastNum to", lastNum, "index: ", lastIndex);

                if (toleratedTimes > 1) {
                    return false;
                }
            } else {
                lastIndex = i;
                lastNum = num;
            }
        }
    }

    return true;

};