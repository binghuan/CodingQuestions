/**
 * @param {string} s
 * @return {boolean}
 */
var areNumbersAscending = function (s) {

    let items = s.split(" ");
    let previousNum = -1;
    for (let i = 0; i < items.length; i++) {
        let word = items[i];
        if (!isNaN(word)) {
            if (parseInt(word) <= previousNum) {
                return false;
            }

            previousNum = parseInt(word);
        }
    }

    return true;
};