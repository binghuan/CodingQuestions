/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let targetNumOfOccurrences = parseInt(nums.length / 3);
    let answer = new Set();
    let map = new Map();
    nums.forEach((num) => {
        let count = 0;
        if (map.get(num) == null) {
            count = 1;
            map.set(num, 1);
        } else {
            count = map.get(num) + 1;
            map.set(num, count);
        }
        if (count > targetNumOfOccurrences) {
            answer.add(num);
        }
    })
    let output = Array.from(answer);
    return output;
};
