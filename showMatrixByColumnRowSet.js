// show numbers from 1 to N 
// for instance: 1 ~  9
/*
    1,2,3
    4,5,6
    7,8,9
*/
let showMatrix = function (columnCount, rowCount) {
    let number = 1;
    let totalCells = 0;
    let answer = "";
    totalCells = columnCount * rowCount;

    let getNumber = function(value) {
        if(parseInt(value) < 10) {
            return "0" + value;
        } else {
            return value;
        }
    }

    for (let i = 0; i < totalCells; i++) {
        answer = answer + getNumber(number);

        if (number % (columnCount) == 0) {
            answer = answer + "\n";
        } else {
            answer = answer + ",";
        }
        number += 1;
    }
    console.log(answer);
};

showMatrix(3, 4);