/**
 * @param {string} word
 * @return {number}
 */
 var minTimeToType = function (word) {
    const alphabetList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
        "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let index = 0;
    let char = alphabetList[index];
    let size = alphabetList.length;

    let totalMove = 0;

    for (let i = 0; i < word.length; i++) {

        let alphabet = word[i];

        let targetIndex = alphabetList.indexOf(alphabet);

        let diff1 = Math.abs(index - targetIndex);

        let diff2 = 0;
        if (index < targetIndex) {
            diff2 = index + size - targetIndex
        } else {
            diff2 = targetIndex + size - index
        }


        if (diff1 < diff2) {
            totalMove += diff1;
        } else {
            totalMove += diff2;
        }

        totalMove += 1;

        index = targetIndex;
        char = alphabet;
    }
    return totalMove;
};