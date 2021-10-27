/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
    let numArray = [];
    arr.forEach((num) => {
        numArray.push({
            value: num,
            diff: Math.abs(num - x)
        });
    })

    numArray.sort((a, b) => {
        return a.diff - b.diff;
    })

    let result = [];
    for (let i = 0; i < k; i++) {
        result.push(numArray[i].value);
    }
    
    return result.sort((a, b) => { return a - b; })
};