/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n) {
    return n - 1;
};


var numberOfMatchesV1 = function (n) {

    console.log("INPUT:", n);

    // Step 1.
    let totalBattleCount = 0;

    // Step 2.
    function checkBattle(N) {

        currentBattleCount = parseInt(N / 2);
        seedCount = N % 2;

        totalBattleCount += currentBattleCount;
        remainTeams = currentBattleCount + seedCount;

        if (remainTeams >= 2) {
            checkBattle(remainTeams);
        }
    }

    checkBattle(n);

    console.log("OUTPUT:", totalBattleCount);
    return totalBattleCount;
};

numberOfMatchesV1(3);
numberOfMatchesV1(4);
numberOfMatchesV1(5);