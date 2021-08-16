/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    console.log("INPUT: ", num1, num2);

    let numArrayL = []
    let numArrayS = []

    if (num1.length > num2.length) {
        numArrayL = num1.split("").reverse();
        numArrayS = num2.split("").reverse();
    } else {
        numArrayS = num1.split("").reverse();
        numArrayL = num2.split("").reverse();
    }

    let minLength = numArrayS.length;

    let valueToNext = 0;
    let result = [];
    for (let i = 0; i < numArrayL.length; i++) {
        let numAChar = numArrayL[i];
        let numBChar = numArrayS[i];
        let numA = parseInt(numAChar);
        let numB = parseInt(numBChar);
        console.log("numB:", numB);
        if (i >= minLength ) {
            numB = 0;
            console.log("replace B:", numB);
        }

        let sum = numA + numB + valueToNext;
        console.log("sum =", sum, typeof sum, (sum >= 10));
        if (valueToNext > 0) {
            valueToNext -= 1;
        }

        if (sum >= 10) {
            console.log("sum => ", sum);
            sum -= 10;
            valueToNext += 1;
            console.log("sum ==> ", sum);
        }

        result.push(sum);
    }

    if( valueToNext > 0) {
        result.push(1);
    }

    let finalResult = result.reverse().toString().replace(/,/g, "");


    console.log("OUTPUT:", finalResult);
    return finalResult;
};


//addStrings("123456789", "987654321");
addStrings("11", "123");