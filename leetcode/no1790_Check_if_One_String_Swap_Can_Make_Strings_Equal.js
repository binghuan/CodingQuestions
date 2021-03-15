/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
    const DBG = false;
    if (DBG) console.log("INPUT: ", s1, s2);
    const s2c = s2.split("");
    let result = false;
    if (s1 == s2) {
        return true;
    }
    for (let i = 0; i < s1.length; i++) {

        for (let j = i + 1; j < s1.length; j++) {

            let s1c = s1.split("");
            let firstChar = s1c[i];
            let secondChar = s1c[j];
            if (DBG) console.log("-> 1: ", firstChar, "-> 2: ", secondChar);
            s1c[i] = secondChar;
            s1c[j] = firstChar;
            if (DBG) console.log("<- 1: ", s1c[i], "<- 2: ", s1c[j]);

            if (DBG) console.log("check ", s1c, s2c);
            if (s1c.toString() == s2c.toString()) {
                if (DBG) console.log("OK> hit");
                result = true;
                break;
            }

        }
    }

    return result;
};

let s1 = "bank", s2 = "kanb";
areAlmostEqual(s1, s2)