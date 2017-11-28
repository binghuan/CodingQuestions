/*
    Page: https://en.wikipedia.org/wiki/Fibonacci_number
*/

let fibonacciNumbers = function (numberLength) {

    let number = 1;

    let numArray = [];

    // 1st, put 1 number into array.
    numArray.push(number);

    // main function. 
    for (let i = 0; i < numberLength; i++) {

        let lastOne = numArray.pop();
        let lastTwo = numArray.pop();
        let sum = 0;

        if (lastTwo != null) {
            sum = lastOne + lastTwo;
            numArray.push(lastTwo);
        } else {
            sum = lastOne;
        }
        number = sum;
        numArray.push(lastOne);
        numArray.push(number);
        console.log(numArray);
    }
}

fibonacciNumbers(9);
