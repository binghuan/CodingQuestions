/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dictionary, sentence) {

    let dictMap = {};
    dictionary.forEach((word) => {
        dictMap[word] = 1;
    })

    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        for (let j = 0; j < word.length; j++) {
            let stringInChecking = word.substring(0, j + 1);
            if (dictMap[stringInChecking] != null) {
                words[i] = stringInChecking;
                break;
            }
        }
    }

    let result = words.join(" ");
    console.log("OUTPUT:", result);
    return result;
}

// replaceWords(["cat", "bat", "rat"], "the cattle was rattled by the battery")
// Expected: "the cat was rat by the bat"

replaceWords(["a", "aa", "aaa", "aaaa"], "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa");
//Output:   "a a a a a a a a bbb baba ababa"
//Expected: "a a a a a a a a bbb baba a"
//.         "a a a a a a a a bbb baba a"



