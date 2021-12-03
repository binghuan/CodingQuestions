/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {

    const DBG = false;
    let allowedChars = allowed.split("");
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }

    let counter = 0;
    words.forEach((word) => {
        if (DBG) console.log("++ word:", word);
        allowedChars.forEach((char) => {
            while (word.indexOf(char) != -1) {
                word = word.replace(char, "");
            }
        })
        if (DBG) console.log("-- word:", word, word.length);
        if (word.length == 0) {
            if (DBG) console.log("+1");
            counter += 1;
        }
    })
    return counter;
};