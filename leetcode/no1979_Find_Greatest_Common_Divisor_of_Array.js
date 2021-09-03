/**
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {


    nums.sort((a, b) => {
        return a - b;
    })

    let smallest = nums[0];
    let largest = nums.pop();

    console.log("Small:", smallest, "largest", largest);

    let result = 0;
    for (let i = 1; i <= smallest; i++) {
        if (largest % i == 0 && smallest % i == 0) {
            result = i;
        }
    }

    return result;
};