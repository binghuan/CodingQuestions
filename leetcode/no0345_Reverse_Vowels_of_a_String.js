/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {

    const set = new Set(["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]);

    let vowels = [];
    let items = s.split("")

    for (let i = 0; i < items.length; i++) {
        let alphabet = items[i];
        if (set.has(alphabet)) {
            items[i] = "";
            vowels.push(alphabet);
        }
    }
    vowels.reverse();

    for (let i = 0; i < items.length; i++) {
        if (items[i] == "") {
            items[i] = vowels.shift();
        }
    }
    return items.join("");
};