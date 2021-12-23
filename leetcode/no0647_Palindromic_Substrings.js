/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    const DBG = false;
    if (DBG) console.log("INPUT:", s);
    let output = [];

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var unique = s.split("").filter(onlyUnique);
    if (unique.length == 1) {
        return (1 + s.length) * s.length / 2;
    }

    for (let i = 0; i < s.length; i++) {

        let combination = [];
        let A = s[i];
        combination.push(A);

        for (let j = i; j < s.length; j++) {
            let B = s[j];
            if (i != j) {
                combination.push(B);
            }
            let reverseVer = combination.slice(0).reverse();
            let comString = combination.toString();
            if (DBG) console.log("check ", comString.length, comString, reverseVer);

            if (comString == reverseVer) {
                let hit = combination.slice(0);
                if (DBG) console.log("OK --> HIT:", hit);
                output.push(hit);
            }
        }
    }
    if (DBG) console.log("OUTPUT:", output);

    return output.length;
};

//countSubstrings("aba");
// let input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
countSubstrings("aaa");
countSubstrings("aaaa");