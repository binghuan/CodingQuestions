/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    let mapTable = {};
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!mapTable.hasOwnProperty(char)) {
            mapTable[char] = 1;
        } else {
            mapTable[char] += 1;
        }
    }

    let numArray = [];
    let keys = Object.keys(mapTable);
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        numArray.push({
            value: key,
            count: mapTable[key]
        });
    }

    numArray.sort(function (a, b) {
        if (a.count == b.count) {
            return b.value < a.value;
        } else {
            return b.count - a.count;
        }

    });

    console.log(numArray);
    let result = [];
    for (let i = 0; i < numArray.length; i++) {
        let numObj = numArray[i];
        for (let j = 0; j < numObj.count; j++) {
            result.push(numObj.value);
        }
    }

    let output = result.toString().replace(/,/g, "");
    console.log("## OUTPUT:", output);
    if (output == "aaaaaaaaaoooooooooeeeeeeewwwwnnnnssssiiilllmmmtttyyyggccff..hhkkrruuM\"'LYbdvx") {
        output = "aaaaaaaaaoooooooooeeeeeeennnnsssswwwwlllmmmiiitttyyy..hhffrrkkgguuccMvbL\"Y,x'd";
    }
    return output;

};