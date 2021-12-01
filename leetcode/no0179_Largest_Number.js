/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {

    nums.sort((a, b) => {
        return `${b}${a}` - `${a}${b}`;
    });

    console.log("sortedNums:", nums);
    let result = nums.join("");
    console.log("OUTPUT:", result);

    return result;
};

// Input: nums = [3,30,34,5,9]
// Output: "9534330"
largestNumber([3, 30, 34, 5, 9]);
//largestNumber([1, 3, 2]);

//let input = [10,2];
//let input = [3,30,34,5,9];
// let input = [9, 9009, 909];
// console.log(input.sort((a,b) => {
//     //return b-a;
//     let _a = `${b}${a}`;
//     let _b = `${a}${b}`;
//     result = _a - _b;
//     console.log("compare", _a, _b, result);
//     return result;
// }));
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort