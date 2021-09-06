/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
    
    let numArray = [];
    matrix.forEach((nums) => {
        nums.forEach((num) => {
            numArray.push(num);
        })
    })

    numArray.sort((a, b) => {
        return a - b;
    })

    console.log("Sorted Array:", numArray);
    return numArray[k - 1];
};