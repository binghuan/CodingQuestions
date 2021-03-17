/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const DBG = false;
    let primeArray = [];
    let amountOfPrimes = 0;
    let ignoreSet = new Set();
    let lastIgnoreNumber = 2;

    for (let j = 2; j < n; j++) {

        if (ignoreSet.has(j)) {
            if (DBG) console.log("ignore ", j)
            continue;
        }
        ignoreSet.add(j * j);

        let number = j;
        let isPrime = true;
        if (DBG) console.log("check number: ", number);

        for (let i = lastIgnoreNumber; i < (number / i); i++) {
            let result = number % i;
            if (result == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            if (DBG) console.log(`-------------------> ${number} is Prime`);
            //primeArray.push(number);
            amountOfPrimes += 1;
        }
    }

    if (DBG) console.log(primeArray);
    //console.log(ignoreSet);
    //return primeArray.length;
    return amountOfPrimes;
};

countPrimes(10);
//countPrimes(10000);
//countPrimes(100000);
//countPrimes(499979);
