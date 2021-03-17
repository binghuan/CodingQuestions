/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let primeArray = [];

    let checkIfPrimieOrNot = (number) => {
        let isPrime = true;
        console.log("check number: ", number);

        for (let i = 2; i < parseInt(number / 2) + 1; i++) {
            let result = number % i;
            if (result == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log("--> is Prime");
            primeArray.push(number);
        }
    }

    for (let i = 2; i < n; i++) {
        if (i == 2) {
            primeArray.push(2);
            continue;
        }
        checkIfPrimieOrNot(i);
    }

    console.log(primeArray);
    return primeArray.length;
};

countPrimes(10);
//countPrimes(10000);
//countPrimes(100000);
//countPrimes(499979);
