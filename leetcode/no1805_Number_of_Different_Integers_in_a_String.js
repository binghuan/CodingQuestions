/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {

    let numberReg = new RegExp('[0-9]');

    let lastNumStr = "";
    let numSet = new Set();
    for (let i = 0; i < word.length; i++) {

        let char = word[i];
        if (numberReg.test(char)) {
            lastNumStr += char;
            //console.log("try",lastNumStr );
        } else {
            if (lastNumStr.length > 0) {
                // trim 0 
                console.log("before", lastNumStr);
                lastNumStr = lastNumStr.replace(/^0+/g, "");
                console.log("add", lastNumStr);
                numSet.add(lastNumStr);
                lastNumStr = "";
            }
        }
    }

    if (lastNumStr.length > 0) {
        lastNumStr = lastNumStr.replace(/^0+/g, "");
        numSet.add(lastNumStr);
        lastNumStr = "";
    }

    if (numSet.size == 0) {
        if (word.indexOf("0") != -1) {
            return 1;
        }
    }

    return numSet.size;

};