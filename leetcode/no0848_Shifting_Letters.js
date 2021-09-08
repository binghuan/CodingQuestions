/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {

    let result = "";
    let charArray = [
        "a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s"
        , "t", "u", "v", "w", "x", "y", "z"
    ];
    const amountOfChars = charArray.length;

    let targetShift = [];
    let reversedShifts = shifts.reverse();
    let previousSum = 0;
    for (let i = 0; i < reversedShifts.length; i++) {
        let shift = reversedShifts[i];
        previousSum += shift;
        targetShift.push(previousSum);
    }
    targetShift.reverse();

    for (let i = 0; i < targetShift.length; i++) {
        let shiftTimes = targetShift[i];
        let char = s[i];
        let originalIndex = charArray.indexOf(char);
        let targetIndex = (originalIndex + shiftTimes) % amountOfChars;
        result = result + charArray[targetIndex];
    }

    return result;
};