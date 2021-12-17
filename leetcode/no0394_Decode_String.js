/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    const DBG = false;
    if (DBG) console.log("INPUT:", s);
    let buffer = "";
    let stack = [];
    let level = 0;
    let result = [[]];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (DBG) console.log("Checking:", char);
        if (DBG) console.log("---- level = ", level);
        if (char == "[") {
            level += 1;
            stack.push(buffer);
            if (DBG) console.log("Push", buffer, "to stack=", stack);
            buffer = "";
        } else if (char == "]") {
            level -= 1;
            if (result[level] == null) {
                result[level] = [];
            }
            if (result[level + 1] == null) {
                result[level + 1] = [];
            }

            if (DBG) console.log("stack = ", stack);
            let previous = stack.pop();
            buffer = result[level + 1].join() + buffer;
            result[level + 1] = [];

            if (DBG) console.log("buffer =", buffer, "X", previous);

            let times = previous.replace(/[a-z]/g, "");
            let restOfBuffer = previous.replace(times, "");
            if (DBG) console.log("Get Times:", times, "rest of buffer=", restOfBuffer);
            let temp = "";
            for (let i = 0; i < parseInt(times); i++) {
                temp = `${temp}${buffer}`
            }
            if (DBG) console.log("= ", temp, `--> ${restOfBuffer}${temp}`);
            temp = `${restOfBuffer}${temp}`;


            buffer = "";
            if (DBG) console.log("level=", level, "result=", result);
            result[level].push(temp);
            if (DBG) console.log("result ==>", result);
            let tempToPush = result[level].join("");
            result[level] = [tempToPush];

            if (DBG) console.log("result ===>", result);

        } else {
            buffer = `${buffer}${char}`
            if (DBG) console.log("... buffer ->", buffer);
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
/*
    3[z]: zzz
    2[
        2[y]
        pq4[
                2[jk]: jkjk
                e1[f]: ef
            ]
        ]ef
*/

// Reference: https://www.cnblogs.com/grandyang/p/5849037.html