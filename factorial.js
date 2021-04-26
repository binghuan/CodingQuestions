// ※ 文章網址: https://www.ptt.cc/bbs/Soft_Job/M.1555603421.A.415.html
// a. 給定 n, 給出 n*(n-1)*…*1 的乘積, 分別用 loop / recursive 去作

function recursive(n) {
    if (n == 0) {
        return 1;
    }
    return n * recursive(n - 1);
}

console.log("Solution by Recursive Call -------------------------------------->")
const n = 6;
console.log("INPUT:", n);
let result = recursive(n);
console.log("OUTPUT:", result);

console.log("Solution by Loop -------------------------------------->")
function loop(n) {
    let value = 1;
    for (let i = 0; i < n; i++) {
        value *= n - i;
    }
    return value;
}
result = loop(n);
console.log("OUTPUT:", result);
