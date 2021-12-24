/**
 * @param {number} N
 * @return {number}
 */
var fib = function (N) {

    let map = new Map();
    function recursion(n) {
        if (n <= 0) {
            return 0;
        }
        else if (n == 1) {
            return 1;
        }

        if (map.get(n) != null) {
            return map.get(n);
        }
        let sum = recursion(n - 1) + recursion(n - 2);
        map.set(n, sum);
        return sum;
    }

    return recursion(N)
};

result = fib(5);
console.log("result:", result);