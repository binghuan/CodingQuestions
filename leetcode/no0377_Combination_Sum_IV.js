/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var combinationSum4 = function (nums, target) {
    
    const DBG = false;

    if(DBG)console.log("INPUT:", nums, target);
    let pathsToTargetSum = []; // pathsToTargetSum[i] # of combinations sum up to i
    pathsToTargetSum[0] = 1;

    for (let i = 1; i <= target; i++) {
        pathsToTargetSum[i] = 0;
    }
    if(DBG)console.log("init table=", pathsToTargetSum);

    for (let value = 1; value <= target; ++value) {

        if(DBG)console.log("check value:", value);

        nums.forEach((choosedNum) => {
            if(DBG)console.log("Take", choosedNum, "from", nums);
            let remaining = value - choosedNum;
            if(DBG)console.log(`value: ${value} - num: ${choosedNum} = ${remaining}`);
            if (remaining >= 0) {
                pathsToTargetSum[value] += pathsToTargetSum[remaining];
            }
            if(DBG)console.log(pathsToTargetSum)
        })
    }
    let result = pathsToTargetSum[target];
    console.log("OUTPUT:", result);
    return result;
};

combinationSum4([1, 2, 3], 4)
//combinationSum4([1, 2], 2)
/*
(1,1)
(2)
*/