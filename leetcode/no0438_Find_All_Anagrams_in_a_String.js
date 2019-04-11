/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    console.log("from facebook.");

    let chars = {};
    for (let i = 0; i < p.length; i++) {
        let char = p[i];
        if (!chars.hasOwnProperty(char)) {
            chars[char] = 1;
        } else {
            chars[char] += 1;
        }
    }

    let output = [];
    let words = Object.assign({}, chars);
    for (let i = 0; i < s.length - p.length + 1; i++) {
        //console.log("## Start i:", i);
        let hit = true;
        for (let j = i; j < i + p.length; j++) {

            let char = s[j];
            //console.log("check char", char, j);

            if (words.hasOwnProperty(char) && words[char] > 0) {
                words[char] -= 1;
                //console.log("hit:", char, j);
            } else {
                hit = false;
                break;
            }
        }
        if (hit) {
            output.push(i);
        }
        words = Object.assign({}, chars);
    }

    console.log("## OUTPUT: ", output);
    return output;
};