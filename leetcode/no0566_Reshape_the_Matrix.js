/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {

    let items = mat.toString().split(",");
    if (items.length > r * c) {
        return mat;
    }

    let result = [];
    for (let i = 0; i < r; i++) {
        let rows = [];
        for (let j = 0; j < c; j++) {
            let item = items.shift();
            if (item == null) {
                return mat;
            }
            rows.push(item);

        }
        result.push(rows);
    }

    return result;
};