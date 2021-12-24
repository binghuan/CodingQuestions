/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {
    if (N <= 0) {
        return 0;
    } else if (N == 1) {
        return 1;
    }
    return fib(N - 1) + fib(N - 2);
};

console.log("INPUT:", 10);
console.log("OUTPUT:", fib(10));