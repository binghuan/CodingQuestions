/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function (edges) {

    let numMap = {};
    let mostTimes = -1;
    let num4MostTimes = null;

    edges.forEach((edge) => {
        edge.forEach((num) => {
            if (numMap[num] == null) {
                numMap[num] = 1;
            } else {
                numMap[num] += 1;
            }

            if (numMap[num] > mostTimes) {
                mostTimes = numMap[num];
                num4MostTimes = num;
            }
        })
    })

    return num4MostTimes;
};
