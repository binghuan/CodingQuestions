/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {

    let numsByIndex = heights.slice(0);
    heights.sort((a, b) => {
        return a - b;
    })
    // console.log("INPUT:", numsByIndex);
    // console.log("SORT :", heights);

    let count = 0;
    for (let i = 0; i < numsByIndex.length; i++) {
        let numForIndex = numsByIndex[i];
        if (numForIndex == heights[i]) {
            count += 1;
        }
    }

    return heights.length - count;

};