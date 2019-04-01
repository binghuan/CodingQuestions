/*
    Page: https://en.wikipedia.org/wiki/Fibonacci_number
*/

var fibonacciNumbers = function (n) {
    console.log("## INPUT:", n);

    let number = 1;
    let numArray = [0];
    numArray.push(number);

    // main function. 
    for (let i = 0; i < n; i++) {

        let lastOne = numArray.pop();
        let lastTwo = numArray.pop();
        let sum = 0;

        sum = BigInt(lastOne) + BigInt(lastTwo);
        numArray.push(lastTwo);
        console.log("+ ", lastTwo);

        number = sum;
        numArray.push(lastOne);
        numArray.push(number);

    }

    console.log(numArray);
    console.log(numArray[n]);
}

fibonacciNumbers(0);
fibonacciNumbers(1);
fibonacciNumbers(2);
fibonacciNumbers(3);
fibonacciNumbers(4);
fibonacciNumbers(5);
