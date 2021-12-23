/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    // Step 1: Extract Unique numbers
    nums = nums.filter((value, index, self) => {
        return self.indexOf(value) === index;
    })

    // Step 2: Sort Array
    nums.sort((a, b) => {
        return a - b;
    })

    let lastNum = null;
    let maxLength = 0;
    let currentLength = 0;
    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];
        if (lastNum == null) {
            lastNum = num - 1;
        }

        // Step 3: Counting continuous numbers
        let diff = num - lastNum;
        if (diff == 1) {
            currentLength += 1;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
            }
            currentLength = 1;
        }
        lastNum = num;
    }

    if (currentLength > maxLength) {
        maxLength = currentLength;
    }

    return maxLength;
};
