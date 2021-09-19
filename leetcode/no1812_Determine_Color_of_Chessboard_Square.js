/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
    let map = {};
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h"];

    let isBlackFirst = false;
    for (let i = 0; i < 8; i++) {

        map[alphabet[i]] = [];

        for (let j = 1; j <= 8; j++) {
            map[alphabet[i]][j] = isBlackFirst;
            isBlackFirst = !isBlackFirst;
        }
        isBlackFirst = !isBlackFirst;
    }
    let coorItems = coordinates.split("");
    return map[coorItems[0]][coorItems[1]];
};