/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {

    // Use the string's .replace method with a regex of \D, which is a shorthand character class that matches all non-digits
    let numberOnlyString = s.replace(/\D/g, '').split("");
    let sortedArray = numberOnlyString.sort((a, b) => { return b - a });
    if (sortedArray.length == 0) {
        return -1;
    }
    console.log(sortedArray[1]);
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var unique = sortedArray.filter(onlyUnique);
    if (unique.length == 1) {
        return -1
    }


    return unique[1]
};