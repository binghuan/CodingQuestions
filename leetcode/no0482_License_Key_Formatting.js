/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    const DBG = false;
    if (DBG) console.log("INPUT:", s, k);

    let items = s.replace(/\-/g, "").split("");
    let result = [];
    let counter = 0;
    while (items.length > 0) {
        let item = items.pop();
        result.push(item);
        counter += 1;
        if (counter % k == 0) {
            result.push("-");
        }
        if (DBG) console.log("Result=", result);
    }
    result.reverse();
    if (result[0] == "-") {
        result.shift();
    }
    let output = result.join("").toUpperCase();
    if (DBG) console.log("OUTPUT:", output);
    return output;
};

if (licenseKeyFormatting("2-5g-3-J", 2) != "2-5G-3J") { console.error("FAIL"); return; }
if (licenseKeyFormatting("5F3Z-2e-9-w", 4) != "5F3Z-2E9W") { console.error("FAIL"); return; }
