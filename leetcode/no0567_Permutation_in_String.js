/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    let result = false;
    function dfs(
        input,
        indexSet,
        curr,
        answer
    ) {
        if(result == true) {
            return;
        }

        if (curr.length == input.length) {
            let one = curr.slice(0);
            let permutation = one.join("");
            if(answer.has(permutation)) {
                return;
            }
            answer.add(permutation);
            console.log("Add:", permutation);
            
            if(s2.indexOf(permutation) != -1) {
                console.log("HIT");
                result= true;
            }
            return;
        }

        for (let i = 0; i < input.length; i++) {

            let char = input[i];

            if (indexSet.has(char)) {
                continue;
            }

            indexSet.add(char);
            curr.push(char);
            dfs(
                input,
                indexSet,
                curr,
                answer
            )
            curr.pop();
            indexSet.delete(char);

        }
    }

    let currCombination = [];
    let answer = new Set();
    let set = new Set();
    dfs(
        s1,
        set,
        currCombination,
        answer
    )

    console.log("OUTPUT:", answer);
    return result;
};

checkInclusion("algorithm", "altruistic");
//checkInclusion("ab", "eidbaooo");
// Expected: true