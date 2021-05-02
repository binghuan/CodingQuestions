/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    console.log("input:", s);

    var newS = s.replace(/[^a-zA-Z0-9]+/g, '');

    var words = newS.split("");
    var xS = "";
    for (var i = 0; i < words.length; i++) {
        xS = words[i] + xS;
    }


    console.log("reversed: ", xS);

    if (newS.toLowerCase() == xS.toLowerCase()) {
        console.log("true");
        return true;
    } else {
        console.log("false");
        return false;
    }
};