// Coding Quest from Hacker Rank. 
// Brute Force Solution.
function rollTheString(s, rolls) {
    console.log("INPUT: ", s, "roll:", rolls);

    // Build Map for Caching Index
    let alphabets = "abcdefghijklmnopqrstuvwxyz";
    let posMap = {};
    for (let i = 0; i < alphabets.length; i++) {
        posMap[alphabets[i]] = i;
    }

    // Mark occurrence of max roll
    rolls.sort((a, b) => {
        return a - b;
    });
    let rollForIndex = [];
    for (let i = 0; i < rolls.length; i++) {
        let roll = rolls[i];
        if (rollForIndex[roll - 1] == null) {
            rollForIndex[roll - 1] = 0;
        }
        rollForIndex[roll - 1] += 1;
    }

    /*
        if you got rolls = [1,3,5]
        then, you will get roll for Index = 
        [ 1, 0, 1, 0, 1], if input = s = "aaaaa"
        --> round 1: [ 1, 0, 1, 0, 1], acc = 1, s = "aaaab"
        --> round 2: [ 1, 0, 1, 1, 1], acc = 1, s = "aaabb"
        --> round 3: [ 1, 0, 3, 1, 1], acc = 2, s = "aacbb"
        --> round 4: [ 1, 3, 3, 1, 1], acc = 2, s = "accbb"
        --> round 5: [ 4, 3, 3, 1, 1], acc = 3, s = "dccbb"
    */
    let accumulation = 0;
    let chars = s.split("");
    for (let i = chars.length - 1; i > -1; i--) {
        let roll = 0;
        if (rollForIndex[i] != null) {
            roll = rollForIndex[i] + accumulation;
            accumulation = roll;
        } else {
            roll = accumulation;
        }

        let newPos = (posMap[chars[i]] + roll) % 26;
        chars[i] = alphabets[newPos];
    }

    let result = chars.join("");
    console.log("OUTPUT:", result);
    return result;
}

// http://theleetcode.blogspot.com/2022/01/hackerrank-roll-string.html


if (rollTheString("abz", [3]) != "bca") { console.log("X> FAIL, testcase 1, "); return; }
if (rollTheString("abz", [3, 2, 1]) != "dda") { console.log("X> FAIL, testcase 2, "); return; }
if (rollTheString("a", [1]) != "b") { console.log("X> FAIL, testcase 3, "); return; }
if (rollTheString("aa", [1, 1]) != "ca") { console.log("X> FAIL, testcase 4, "); return; }
if (rollTheString("bca", [1, 2, 3]) != "eeb") { console.log("X> FAIL, testcase 5, "); return; }
if (rollTheString("zcza", [1, 1, 3, 4]) != "debb") { console.log("X> FAIL, testcase 6, "); return; }
if (rollTheString("aaaaa", [1, 3, 5]) != "dccbb") { console.log("X> FAIL, testcase 7, "); return; }