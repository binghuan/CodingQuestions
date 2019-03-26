/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

    console.log("## INPUT:", num);

    let numString = num.toString().split("");


    let isAbleToSwap = true;
    for (let i = 0; i < numString.length; i++) {


        let isNeededToSwap = false;
        let num1st = parseInt(numString[i]);
        //console.log("check i=", i, ", value=", num1st);

        let lastMaxNumber = -1;
        let lastMaxNumberIndex = -1;
        for (let j = i + 1; j < numString.length; j++) {

            num2nd = parseInt(numString[j]);
            //console.log("check j=", j, ", value=", num2nd);

            if (num2nd > num1st && num2nd >= lastMaxNumber) {
                lastMaxNumber = num2nd;
                lastMaxNumberIndex = j;
                console.log("lastMaxNumber", lastMaxNumber, "index=", lastMaxNumberIndex);
                isNeededToSwap = true;
            }

        }

        if (isNeededToSwap == true && isAbleToSwap == true) {
            console.log("!! Do Swap", isNeededToSwap, isAbleToSwap, "index=", lastMaxNumberIndex, lastMaxNumber, "index=", i, numString[i]);
            numString[lastMaxNumberIndex] = numString[i];
            numString[i] = lastMaxNumber;
            isAbleToSwap = false;
        }
    }

    let result = numString.toString().replace(/,/g, "");
    console.log("## OUTPUT:", result);
    return parseInt(result);

};