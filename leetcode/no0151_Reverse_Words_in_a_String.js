/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {

    let items = s.split(" ");
    console.log("items: ", items);
    let result = "";

    for (let i = items.length - 1; i > -1; i--) {

        let word = items[i];
        if (word.trim().length <= 0) {
            continue;
        }
        //console.log("-->" , result);
        result += " " + items[i].trim();
    }

    result = result.trim();

    return result;
};