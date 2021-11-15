/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function (s) {

    let items = s.split(" ");
    let words = [];
    items.forEach((word) => {
        let order = parseInt(word[word.length - 1]);
        words.push(
            {
                word: word.substring(0, word.length - 1),
                index: order
            }
        )
    })

    words.sort((a, b) => {
        return a.index - b.index;
    })

    let result = [];
    words.forEach((word) => {
        result.push(word.word);
    })

    return result.join(" ");
};