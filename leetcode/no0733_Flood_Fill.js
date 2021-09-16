/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {

    function printImage(image) {
        console.log("-------------------------------------------------------->");
        for (let i = 0; i < image.length; i++) {
            console.log(image[i]);
        }
        console.log("--------------------------------------------------------<");
    }
    console.log("INPUT:");
    printImage(image);

    let color = image[sr][sc];
    if(color == newColor) {
        return image;
    }

    function dfs(
        image, rowIndex, columnIndex, color, newColor
    ) {
        if (image[rowIndex][columnIndex] == color) {
            image[rowIndex][columnIndex] = newColor;
            printImage(image);
            if (rowIndex >= 1) {
                dfs(image, rowIndex - 1, columnIndex, color, newColor);
            }
            if (columnIndex >= 1) {
                dfs(image, rowIndex, columnIndex - 1, color, newColor);
            }

            if (rowIndex + 1 < image.length) {
                dfs(image, rowIndex + 1, columnIndex, color, newColor);
            }

            if (columnIndex + 1 < image[0].length) {
                dfs(image, rowIndex, columnIndex + 1, color, newColor);
            }
        }
    }
    dfs(image, sr, sc, color, newColor);
    return image;
};

//floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 2);
// Expected output: [[2,2,2],[2,2,2]]

floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2);
// Expected output: Output: [[2,2,2],[2,2,0],[2,0,1]]

// Reference: https://leetcode.com/problems/flood-fill/solution/