/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {

    let result = "";
    let toggle = true;

    let items = s.split("");
    for (let i = 0; i < items.length; i++) {
        let itemsByK = [];
        let counter = 0;
        for (let j = 0; j < k; j++) {
            if (items[i + j] != null) {
                itemsByK.push(items[i + j]);
                counter += 1;
            }
        }
        i += counter - 1;
        if (toggle) {
            result += itemsByK.reverse().join("");
        } else {
            result += itemsByK.join("");
        }
        toggle = !toggle;
    }
    return result;
};