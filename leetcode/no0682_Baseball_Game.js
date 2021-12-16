/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {

    const DBG = false;

    let buffer = [];
    ops.forEach((operation) => {
        if (DBG) console.log("check:", operation);
        if (operation == "C") {
            buffer.pop();
        } else if (operation == "D") {
            let size = buffer.length;
            let result = 2 * buffer[size - 1];
            buffer.push(result);
        } else if (operation == "+") {
            let size = buffer.length;
            let sum = parseInt(buffer[size - 1]) + parseInt(buffer[size - 2]);
            buffer.push(sum);
        } else {
            buffer.push(operation);
        }
        if (DBG) console.log(buffer);
    })

    if (DBG) console.log("OUTPUT:", buffer);
    let sum = 0;
    buffer.forEach((num) => {
        sum += parseInt(num);
    })
    return sum;
};