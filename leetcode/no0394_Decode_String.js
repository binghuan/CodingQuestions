/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const DBG = true;
    function locateCharByIndex(input, targetIndex) {
        let secondLine = "";
        for (let i = 0; i < input.length; i++) {
            if (i == targetIndex) {
                secondLine += "_";
            } else {
                secondLine += " ";
            }
        }
        if (DBG) console.log(secondLine);
        if (DBG) console.log(input);
    }
    if (DBG) console.log("INPUT:", s);
    let buffer = "", multiplierStack = [], currLevel = 0, result = [[]];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        locateCharByIndex(s, i);
        if (DBG) console.log("index=", i, `---- Checking: "${char}", level = ${currLevel}`, "Buffer:", buffer, "Stack:", multiplierStack, "Result=", result);
        if (char == "[") {
            currLevel += 1;
            multiplierStack.push(buffer);
            if (DBG) console.log("* Push", buffer, "into stack=", multiplierStack);
            buffer = "";
        } else if (char == "]") {
            currLevel -= 1;
            if (result[currLevel] == null) { result[currLevel] = []; }
            if (result[currLevel + 1] == null) { result[currLevel + 1] = []; }
            let multiplier = multiplierStack.pop();
            buffer = result[currLevel + 1].join() + buffer;
            result[currLevel + 1] = [];
            if (DBG) console.log("* buffer(", buffer, ") X (", multiplier, ")");
            let times = multiplier.replace(/[a-z]/g, "");
            let restOfBuffer = multiplier.replace(times, "");
            if (DBG) console.log(`* Times: ${times}, rest of buffer= "${restOfBuffer}"`);
            let temp = "";
            for (let i = 0; i < parseInt(times); i++) {
                temp = `${temp}${buffer}`
            }
            if (DBG) console.log("* New Result ->", temp, `--> ${restOfBuffer}${temp}`);
            temp = `${restOfBuffer}${temp}`;
            buffer = "";
            if (DBG) console.log("* level =", currLevel, ", result=", result);
            result[currLevel].push(temp);
            if (DBG) console.log(`* Push ${temp} to result =>`, result);
            let tempToPush = result[currLevel].join("");
            result[currLevel] = [tempToPush];
            if (DBG) console.log("* Finalize Result on the level =>", result);
        } else {
            buffer = `${buffer}${char}`
            if (DBG) console.log(`* Put "${char}" into buffer = ${buffer}`);
        }
    }
    if (buffer != "") {
        result[0].push(buffer);
    }
    let output = result[0].join("");
    console.log("OUTPUT:", output);
    return output;
};

if (decodeString("sd2[f2[e]g]i") != "sdfeegfeegi") { console.log("NG> FAIL"); return };
if (decodeString("leetcode") != "leetcode") { console.log("NG> FAIL"); return };
if (decodeString("3[2[bc]1[d]]") != "bcbcdbcbcdbcbcd") { console.log("NG> FAIL"); return };
if (decodeString("3[a]2[bc]") != "aaabcbc") { console.log("NG> FAIL"); return };
if (decodeString("3[a2[c]]") != "accaccacc") { console.log("NG> FAIL"); return };
if (decodeString("2[abc]3[cd]ef") != "abcabccdcdcdef") { console.log("NG> FAIL"); return };
if (decodeString("abc3[cd]xyz") != "abccdcdcdxyz") { console.log("NG> FAIL"); return };
if (decodeString("100[leetcode]") != "leetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcodeleetcode") { console.log("NG> FAIL"); return };
if (decodeString("3[z]2[2[y]pq4[2[jk]e1[f]]]ef") != "zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef") { console.log("NG> FAIL"); return };
console.log("\nOK> ALL PASS!!")