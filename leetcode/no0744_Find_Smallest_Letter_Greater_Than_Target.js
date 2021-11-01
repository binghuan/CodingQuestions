/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {

    letters = letters.concat(target);

    let smallestLetter = null;
    letters.forEach((aphabet) => {

        if (aphabet.charCodeAt() > target.charCodeAt()) {
            if (smallestLetter == null) {
                smallestLetter = aphabet;
            } else if (aphabet.charCodeAt() < smallestLetter.charCodeAt()) {
                smallestLetter = aphabet;
            }
        }
    })
    if (smallestLetter == null) {
        return letters[0];
    }
    return smallestLetter;
};