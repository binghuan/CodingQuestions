/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    const DBG = false;

    if (DBG) console.log("input:", s);

    var newS = s.replace(/[^a-zA-Z0-9]+/g, '');

    var words = newS.split("");
    var xS = "";
    for (var i = 0; i < words.length; i++) {
        xS = words[i] + xS;
    }


    if (DBG) console.log("reversed: ", xS);

    let result = false;
    if (newS.toLowerCase() == xS.toLowerCase()) {
        result = true;
    } else {
        result = false;
    }
    if (DBG) console.log("OUTPUT:", result);
    return result;
};