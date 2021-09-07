/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {

    let backup = arr.slice(0);
    arr.sort((a, b) => {
        return b - a;
    })

    return backup.indexOf(arr[0]);
};