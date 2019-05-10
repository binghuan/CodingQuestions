/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {

    console.log("## INPUT:", paragraph);
    console.log("## banned:", banned);

    let words = paragraph.toLowerCase().replace(/[^a-z ]/g, " ").split(" ");
    let wordsTable = {};
    let mostCommonWord = {
        word: "",
        count: 0
    }
    for (let i = 0; i < words.length; i++) {
        let word = words[i].trim();
        if (word.length == 0) {
            continue;
        }
        if (!wordsTable.hasOwnProperty(word)) {
            wordsTable[word] = 1;
        } else {
            wordsTable[word] += 1;

        }

        //console.log("check ", word, banned.indexOf(word));
        if (wordsTable[word] > mostCommonWord.count &&
            banned.indexOf(word) == -1) {

            //console.log("!! setup commonword", word);
            mostCommonWord = {
                word: word,
                count: wordsTable[word]
            }
        }
    }

    console.log("Table:", wordsTable);
    console.log("## OUTPUT:", mostCommonWord.word);

    return mostCommonWord.word;
};