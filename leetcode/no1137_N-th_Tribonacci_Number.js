/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {

    let map = new Map();
    function fib(num) {

        if (num == 0) {
            return 0;
        } else if (num == 1) {
            return 1;
        } else if (num == 2) {
            return 1;
        }

        if (map.get(num) != null) {
            return map.get(num);
        }
        let sum = fib(num - 1) + fib(num - 2) + fib(num - 3);
        map.set(num, sum);
        return sum;
    }
    let result = fib(n);
    return result;
};