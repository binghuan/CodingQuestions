/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

    console.log("INPUT:", nums, target);
    let dp = []; // dp[i] # of combinations sum up to i
    dp[0] = 1;

    console.log("Before Start:", dp);

    for (let value = 1; value <= target; ++value) {

        dp[value] ? null : dp[value] = 0;

        console.log("check value:", value);

        nums.forEach((choosedNum) => {

            console.log("Take", choosedNum, "from", nums);
            let remaining = value - choosedNum;
            console.log(`value: ${value} - num: ${choosedNum} = ${remaining}`);
            if (remaining >= 0) {
                dp[value] += dp[remaining];
            }
            console.log(dp)
        })
    }
    let result = dp[target];
    console.log(dp);
    console.log("OUTPUT:", result);
    return result;
};

combinationSum4([1, 2, 3], 4)