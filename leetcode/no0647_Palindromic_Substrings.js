/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    console.log("INPUT:", s);
    let output = [];

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    var unique = s.split("").filter(onlyUnique);
    if (unique.length == 1) {
        console.log("only one char", unique, s.length);
        //[1,1,1] => [1], [1], [1], [1,1],[1,1], [1,1,1]
        function factorial(num){ if(num <= 0){ return 1; }else{ return num*arguments.callee(num-1); } } 
        let result = factorial(s.length);
        console.log("result = ", result);
    }
    return;

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
            console.log("check ", comString.length, comString, reverseVer);

            if (comString == reverseVer) {
                let hit = combination.slice(0);
                console.log("OK --> HIT:", hit);
                output.push(hit);
            }
        }
    }
    console.log("OUTPUT:", output);

    return output.length;
};

//countSubstrings("aba");
let input = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
countSubstrings(input);