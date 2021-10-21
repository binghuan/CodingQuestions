/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => {
        if (a[0] == b[0]) {
            return a[1] - b[1];
        } else {
            return a[0] - b[0];
        }
    })

    let result = [];
    let lastInterval = null;
    intervals.forEach((interval) => {

        if (lastInterval == null) {
            lastInterval = interval;
        } else {
            if (interval[0] >= lastInterval[0] &&
                interval[0] <= lastInterval[1]
            ) {
                if (interval[1] > lastInterval[1]) {
                    lastInterval[1] = interval[1];
                }
            } else {
                result.push(lastInterval.slice());
                lastInterval = interval;
            }
        }
    })
    result.push(lastInterval.slice());
    return result;
};


//merge([[1, 3], [2, 6], [8, 10], [15, 18]]); // Expected Output: [[1,6],[8,10],[15,18]]
merge([[1, 4], [0, 4]]);// expected: [[0,4]]


