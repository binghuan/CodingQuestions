/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {

    console.log("INPUT:", order, str);

    let pointMap = {};
    for (let i = 0; i < order.length; i++) {
        let char = order[i];
        pointMap[char] = order.length - i;
    }

    let pointArray = [];
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        pointArray.push(
            {
                val: char,
                point: pointMap[char] ? pointMap[char] : -1
            }
        );
    }

    pointArray = pointArray.sort((a, b) => {
        return b.point - a.point
    });
    console.log("Sorted:", pointArray);

    let result = "";
    for (let i = 0; i < pointArray.length; i++) {
        result = result + pointArray[i].val;
    }

    console.log("OUTPUT:", result);
    return result;

};

customSortString("cba", "abcd");