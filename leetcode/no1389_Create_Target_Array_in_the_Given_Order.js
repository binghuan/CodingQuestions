/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function (nums, index) {

    let numArray = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let targetIndex = index[i];
        for (let j = 0; j < numArray.length; j++) {
            if (numArray[j].index >= targetIndex) {
                numArray[j].index += 1;
            }
        }

        numArray.push({
            value: num,
            index: targetIndex
        });
    }

    numArray.sort((a, b) => {
        return a.index - b.index;
    })

    let result = [];
    numArray.forEach((numObj) => {
        result.push(numObj.value);
    })

    return result;
};