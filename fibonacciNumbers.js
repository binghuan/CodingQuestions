/*
    Page: https://en.wikipedia.org/wiki/Fibonacci_number
*/

var fibonacciNumbers = function (n) {

    let number = 1;
    let numArray = [0];
    numArray.push(number);

    // main function. 
    for (let i = 0; i < n; i++) {

        let lastOne = numArray.pop();
        let lastTwo = numArray.pop();
        let sum = 0;

        if (lastTwo != null) {
            sum = BigInt(lastOne) + BigInt(lastTwo);
            numArray.push(lastTwo);
        } else {
            sum = lastOne;
        }
        number = sum;
        numArray.push(lastOne);
        numArray.push(number);

    }

    console.log(numArray[n]);
}

fibonacciNumbers(8181);
