/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {

    function parseString(input) {

        let items = [];
        for (let i = 0; i < input.length; i++) {

            let symbol = input[i];
            if (symbol == "#") {
                items.pop();
            } else {
                items.push(symbol);
            }
        }
        let result = items.join("");
        return result;
    }

    let a = parseString(s);
    let b = parseString(t);

    return a == b;
};