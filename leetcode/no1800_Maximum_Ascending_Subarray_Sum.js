/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
    const DBG = true;
    if (DBG) console.log("INPUT:", nums);

    if (nums.length == 1) {
        return nums[0];
    }
    let ascendingArray = [];
    let sum = 0;
    let maxSum = 0;

    let lastValue = null;
    for (let i = 0; i < nums.length; i++) {

        let value = nums[i];

        if (lastValue == null) {
            lastValue = value
            ascendingArray.push(value);

            sum += value;
            if (DBG) console.log("add", value, "sum = ", sum);
            if (DBG) console.log("-> ", ascendingArray);
            continue;
        }

        if (DBG) console.log("check ", value);
        if (value > lastValue) {
            ascendingArray.push(value);
            sum += value;
            if (DBG) console.log("add", value, "sum = ", sum);
            if (DBG) console.log("-> ", ascendingArray);
        } else {

            if (sum > maxSum) {
                if (DBG) console.log("maxSum = ", sum);
                maxSum = sum;
            }

            ascendingArray = [];
            sum = value;
            if (DBG) console.log("-> ", ascendingArray);
        }

        lastValue = value
        if (sum > maxSum) {
            if (DBG) console.log("maxSum = ", sum);
            maxSum = sum;
        }
    }

    if (DBG) console.log("OUTPUT:", maxSum);
    return maxSum;
};
maxAscendingSum([10, 20, 30, 5, 10, 50]) == 65 ? console.log("OK") : console.log("NG");
maxAscendingSum([100, 10, 1]) == 100 ? console.log("OK") : console.log("NG");
maxAscendingSum([100, 10, 1]) == 100 ? console.log("OK") : console.log("NG");
