/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const DBG = false;
var wordBreak = function (s, wordDict) {
    if (DBG) console.log("################################# INPUT:", s, wordDict);

    let currentString = s;
    let usedDictArray = [];
    answer = [];
    wordDict = wordDict.sort(function (a, b) { return a.length - b.length });
    dpCall(currentString, wordDict, 0, usedDictArray);

    let result = false;
    if (answer.length > 0) {
        result = true;
    } else {
        result = false;
    }
    if (DBG) console.log("################################## OUTPUT: ", result, answer);
    return result;
};
let answer = [];

function dpCall(currentString, wordDict, dictIndex, usedDictArray) {

    if (DBG) console.log(">> dpCall:", "\"" + currentString + "\"", "wordDict:", JSON.stringify(wordDict), "dictIndex:", dictIndex, "ANS:", JSON.stringify(usedDictArray));

    let stringLength = currentString.replace(/,/g, "").length;
    let items = currentString.split(",").sort(function (a, b) { return a.length - b.length; });
    let lastWord = items.pop();
    while (lastWord != null && lastWord.length == 0) {
        lastWord = items.pop();
    }
    let maxLengthInString = (lastWord == null) ? 0 : lastWord.length;
    if (stringLength == 0) {
        if (DBG) console.log("@@@@@@@@@@@@@@@@@@@@ HIT ~~", usedDictArray);
        answer = usedDictArray.slice(0);
        return;
    }
    for (let i = 0; i < wordDict.length; i++) {

        if (answer.length > 0) {
            if (DBG) console.log("XXXXXXXXXXXXXXXX Break");
            break;
        }

        let word = wordDict[i];
        if (DBG) console.log(currentString.length, "--> search '" + "[" + i + "] " + word + "' in '" + currentString + "'", "ANS: ", answer);
        if (maxLengthInString < word.length) {
            if (DBG) console.log("ignore...", "maxLengthInString: ", maxLengthInString, "word.length: ", word.length, currentString);
            return;
        }
        let result = currentString.indexOf(word);
        usedDictArray.push(word);
        if (DBG) console.log("--> word \"" + word + "\" was found in '" + currentString + "'", JSON.stringify(usedDictArray));

        if (result != -1) {
            dpCall(currentString.replace(word, ","), wordDict, i, usedDictArray);
        }

        if (DBG) console.log(">>> answer: ", answer);
        usedDictArray.pop();

    }
    if (DBG) console.log("!! END ", answer, usedDictArray);
}