/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {

    const DBG = false;

    let numberToSpeech = {
        1: "One",
        2: "Two",
        3: "Three",
        4: "Four",
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine",
        10: "Ten",
        11: "Eleven",
        12: "Twelve",
        13: "Thirteen",
        14: "Fourteen",
        15: "Fifteen",
        16: "Sixteen",
        17: "Seventeen",
        18: "Eighteen",
        19: "Nineteen",
        20: "Twenty",
        30: "Thirty",
        40: "Forty",
        50: "Fifty",
        60: "Sixty",
        70: "Seventy",
        80: "Eighty",
        90: "Ninety",
        100: "Hundred",
    }

    if (num == 0) {
        return "Zero";
    } else if (num == 100) {
        return "One Hundred";
    }

    for (let i = 21; i <= 999; i++) {

        let tens = 0; parseInt(i.toString()[0]) * 10;
        let digits = 0; parseInt(i.toString()[1]);
        let HundredsDigit = 0; parseInt(i.toString()[2]);
        if (i < 100) {
            tens = parseInt(i.toString()[0]) * 10;
            digits = parseInt(i.toString()[1]);
        } else {
            HundredsDigit = parseInt(i.toString()[0]);
            tens = parseInt(i.toString()[1]) * 10;
            digits = parseInt(i.toString()[2]);
        }

        const dashOrNot = " "
        if (numberToSpeech[i] == null) {
            if (HundredsDigit == 0) {
                numberToSpeech[i] = `${numberToSpeech[tens]}${dashOrNot}${numberToSpeech[digits]}`
            } else {
                if (tens < 21) {
                    numberToSpeech[i] = `${numberToSpeech[HundredsDigit]} ${numberToSpeech[100]} ${numberToSpeech[tens + digits] ? numberToSpeech[tens + digits] : ""}`
                } else {
                    numberToSpeech[i] = `${numberToSpeech[HundredsDigit]} ${numberToSpeech[100]} ${numberToSpeech[tens] ? numberToSpeech[tens] + dashOrNot : ""}${numberToSpeech[digits] ? numberToSpeech[digits] : ""}`
                }

            }
            if (DBG) console.log(`${i} = ${numberToSpeech[i]}`);
        }
    }

    let unitTable = [
        {
            unit: "Trillion",
            value: 1000000000000
        },
        {
            unit: "Billion",
            value: 1000000000
        },
        {
            unit: "Million",
            value: 1000000
        },
        {
            unit: "Thousand",
            value: 1000
        }
    ]
    let result = "";
    for (let i = 0; i < unitTable.length; i++) {
        if (DBG) console.log("check num:", num);
        while (num / unitTable[i].value >= 1) {

            // numbersOfUnit = 1 ~ 999
            let numbersOfUnit = parseInt(num / unitTable[i].value);

            num -= unitTable[i].value * numbersOfUnit;
            let space = "";
            if (result.length > 0) {
                space = " ";
            }
            if (DBG) console.log("from:", result);
            if (numbersOfUnit == 100) {
                result += `${space}One ${numberToSpeech[numbersOfUnit]} ${unitTable[i].unit}`
            } else {
                result += `${space}${numberToSpeech[numbersOfUnit]} ${unitTable[i].unit}`
            }

            if (DBG) console.log("result -> ", result);
        }
    }

    if (num > 0) {
        if (num == 100) {
            result += ` One ${numberToSpeech[num]}`
        } else {
            result += ` ${numberToSpeech[num]}`
        }
    }

    let finalResult = result.replace(/ +/g, " ").trim();
    if (DBG) console.log("Final Result:", finalResult);
    return finalResult;
};

//numberToWords(101)
//numberToWords(121)
//numberToWords(110)
//numberToWords(1100)// "One Thousand One Hundred"
//numberToWords(100000)
//numberToWords(123)// "One Hundred Twenty Three"

//numberToWords(11)
// numberToWords(1234)
//numberToWords(12345)// "Twelve Thousand Three Hundred Forty Five"
//numberToWords(1234567)// "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
//numberToWords(1234567891)// "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
numberToWords(200000)// "Two Hundred Thousand"

/*
hundred   100
thousand  1,000
million   1,000,000
billion   1,000,000,000
trillion  1,000,000,000,000
*/