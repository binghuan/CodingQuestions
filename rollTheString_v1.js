// Coding Quest from Hacker Rank. 
// Brute Force Solution.
function rollTheString(s, rolls) {
    console.log("INPUT: ", s, "roll:", rolls);
    let rollForIndex = [];
    rolls.forEach((roll) => {
        for (let i = 0; i < roll; i++) {
            if (rollForIndex[i] == null) {
                rollForIndex[i] = 0;
            }
            rollForIndex[i] += 1;
        }
    })

    console.log("rollForIndex:", rollForIndex);

    // Build Map for Caching Index
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let posMap = {};
    for (let i = 0; i < alphabets.length; i++) {
        posMap[alphabets[i]] = i;
    }
    
    let chars = s.split("");
    for (let i = 0; i < chars.length; i++) {
        if (rollForIndex[i] == null) {
            continue;
        }
        let newPos = (posMap[chars[i]] + rollForIndex[i]) % 26;
        chars[i] = alphabets[newPos];
    }

    let result = chars.join("");
    console.log("OUTPUT:", result);
    return result;
}


if (rollTheString("abz", [3]) != "bca") { console.log("X> FAIL, testcase 1, "); return; }
if (rollTheString("abz", [3, 2, 1]) != "dda") { console.log("X> FAIL, testcase 2, "); return; }
if (rollTheString("a", [1]) != "b") { console.log("X> FAIL, testcase 3, "); return; }
if (rollTheString("aa", [1, 1]) != "ca") { console.log("X> FAIL, testcase 4, "); return; }
if (rollTheString("bca", [1, 2, 3]) != "eeb") { console.log("X> FAIL, testcase 5, "); return; }
if (rollTheString("zcza", [1, 1, 3, 4]) != "debb") { console.log("X> FAIL, testcase 6, "); return; }