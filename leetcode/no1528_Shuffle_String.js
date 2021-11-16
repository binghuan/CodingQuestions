/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
    let objArray = [];
    for (let i = 0; i < s.length; i++) {
        objArray.push({
            alphabet: s[i],
            index: indices[i]
        });
    }

    objArray.sort((a, b) => {
        return a.index - b.index;
    })

    let result = "";
    objArray.forEach((obj) => {
        result = result + obj.alphabet;
    })

    return result;
};