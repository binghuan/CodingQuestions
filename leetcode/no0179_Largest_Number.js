/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {

    nums.sort((a, b) => {
        return `${a}${b}` < `${b}${a}`;
    });

    console.log("sortedNums:", nums);
    let result = nums.join("");
    console.log("OUTPUT:", result);

    return result;
};

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
largestNumber([3,30,34,5,9]);