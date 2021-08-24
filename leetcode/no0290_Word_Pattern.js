/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {

    function convertToPattern(words, splitChar) {
        let terms = words.split(splitChar);
        let map = {};
        let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
            "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
            "t", "u", "v", "w", "x", "y", "z"];
        let index = 0;
        let s2Pattern = [];
        terms.forEach(term => {
            if (map[term] == null) {
                map[term] = alphabet[index];
                s2Pattern.push(alphabet[index])
                index += 1;
            } else {
                s2Pattern.push(map[term])
            }
        });

        console.log("s2Pattern:", s2Pattern);
        s2Pattern = s2Pattern.toString().replace(/,/g, "");
        console.log("s2Pattern:", s2Pattern);
        return s2Pattern;
    }

    let A = convertToPattern(pattern, "")
    let B = convertToPattern(s, " ")

    return (A == B)
};