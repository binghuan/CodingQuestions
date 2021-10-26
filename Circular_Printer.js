function getTimes(inputString) {

    console.log("INPUT:", inputString);

    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const MAX_LEN = alphabet.length;

    let alphabetMap = {};

    for (let i = 0; i < alphabet.length; i++) {
        alphabetMap[alphabet[i]] = i;
    }

    console.log(alphabetMap);

    let totalSeconds = 0;

    let currIndex = 0;
    for (let i = 0; i < inputString.length; i++) {
        console.log("Currnet Index =", currIndex);

        let symbol = inputString[i];
        let a = 0;
        let b = 0;
        if (alphabetMap[symbol] > currIndex) {
            a = Math.abs(alphabetMap[symbol] - currIndex);
            b = Math.abs(currIndex + MAX_LEN - alphabetMap[symbol]) % MAX_LEN;
        } else {
            a = Math.abs(currIndex - alphabetMap[symbol]);
            b = Math.abs(alphabetMap[symbol] + MAX_LEN - currIndex) % MAX_LEN;
        }

        let choosedOption = a;
        if (a > b) {
            choosedOption = b;
        }
        console.log("A:", a, "B:", b, "->", choosedOption);
        totalSeconds += choosedOption;
        currIndex = alphabetMap[symbol];
        console.log("Move to Index:", currIndex, "Need", choosedOption, "Second(s)");
    }

    console.log("OUTPUT:", totalSeconds);

}

//getTimes("BZA");
getTimes("AZGB");