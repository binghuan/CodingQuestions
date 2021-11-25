/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {

    console.log("INPUT:", nums, target);
    let pathsToTargetSum = []; // pathsToTargetSum[i] # of combinations sum up to i
    pathsToTargetSum[0] = 1;

    for (let i = 1; i <= target; i++) {
        pathsToTargetSum[i] = 0;
    }
    console.log("init table=", pathsToTargetSum);

    for (let value = 1; value <= target; ++value) {

        console.log("check value:", value);

        nums.forEach((choosedNum) => {
            console.log("Take", choosedNum, "from", nums);
            let remaining = value - choosedNum;
            console.log(`value: ${value} - num: ${choosedNum} = ${remaining}`);
            if (remaining >= 0) {
                pathsToTargetSum[value] += pathsToTargetSum[remaining];
            }
            console.log(pathsToTargetSum)
        })
    }
    let result = pathsToTargetSum[target];
    console.log(pathsToTargetSum);
    console.log("OUTPUT:", result);
    return result;
};

//combinationSum4([1, 2, 3], 4)
combinationSum4([1, 2], 2)
/*
(1,1)
(2)
*/