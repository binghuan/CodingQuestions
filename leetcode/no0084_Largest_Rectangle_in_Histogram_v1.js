/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {

    const DBG = true;
    if (DBG) console.log("INPUT:", heights);
    let maxArea = 0;

    for (let i = 0; i < heights.length; i++) {

        let basedH = heights[i];
        if (DBG) console.log("#", i, basedH);

        let rightArea = 0;

        // look forward. 
        let nextIndex = i + 1;
        if (DBG) console.log("nextIndex:", nextIndex, heights[nextIndex]);
        while (nextIndex < heights.length && heights[nextIndex] >= basedH) {

            rightArea = basedH * (nextIndex - i);
            nextIndex += 1;
            if (DBG) console.log("nextIndex:", nextIndex, heights[nextIndex]);
        }
        if (DBG) console.log("=> Right area:", rightArea);

        let leftArea = 0;
        let previousIndex = i - 1;
        if (DBG) console.log("previousIndex:", previousIndex, heights[previousIndex]);
        while (previousIndex > -1 && heights[previousIndex] >= basedH) {
            leftArea = basedH * (i - previousIndex);
            previousIndex -= 1;
            if (DBG) console.log("previousIndex:", previousIndex, heights[previousIndex]);
        }
        if (DBG) console.log("=> Left area:", leftArea);

        totalArea = rightArea + leftArea + basedH;
        if (DBG) console.log("total:", totalArea);
        if (maxArea < totalArea) {
            maxArea = totalArea;
        }

        if (basedH > maxArea) {
            maxArea = basedH;
        }
    }

    if (DBG) console.log("OUTPUT:", maxArea);
    return maxArea;
};

//largestRectangleArea( [2,1,5,6,2,3]);// expected 10
//largestRectangleArea( [2,4]);// expected 4
//largestRectangleArea( [4,2]);// expected 4
largestRectangleArea([2, 1, 2]);// expected 3
//largestRectangleArea( [5,4,1,2]);// expected 8