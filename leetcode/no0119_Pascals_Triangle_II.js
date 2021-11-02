/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {


    let triangle = [];

    for (let i = 0; i < rowIndex + 1; i++) {
        if (i == 0) {
            triangle[0] = [1];
        } else if (i == 1) {
            triangle[1] = [1, 1];
        } else {
            triangle[i] = [];
            for (let j = 0; j < i + 1; j++) {
                if (j == 0 || j == i) {
                    triangle[i][j] = 1;
                } else {
                    triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
                }
            }
        }
    }

    function printTriangle() {
        let index = 0;
        triangle.forEach((row) => {
            console.log("#", index, row);
            index += 1;
        })
    }
    //printTriangle();

    return triangle[rowIndex];
};

getRow(4);
