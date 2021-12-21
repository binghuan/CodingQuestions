/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    const DBG = true;
    if (DBG) console.log("INPUT:", s);
    if (s == null || s.length == 0) {
        return 0;
    }
    let len = s.length;
    let stack = [];
    let currentNumber = 0;
    let operation = '+';
    for (let i = 0; i < len; i++) {
        let currentChar = s[i];
        if (DBG) console.log("--- #", i, "----- Check:", currentChar, "currentNumber=", currentNumber, "stack=", stack);

        // check if current char is number
        if (currentChar.match(/^[0-9]/i) != null) {
            if (DBG) console.log("* It is number");
            currentNumber = (currentNumber * 10) + (currentChar - '0');
        }

        if ((currentChar.match(/^[0-9]/i) == null && currentChar.trim().length != 0) || i == len - 1) {
            if (operation == '-') {
                if (DBG) console.log(`* Puash ${-currentNumber} to stack`);
                stack.push(-currentNumber);
            } else if (operation == '+') {
                if (DBG) console.log(`* Puash ${currentNumber} to stack`);
                stack.push(currentNumber);
            } else if (operation == '*') {
                let lastNumber = stack.pop();
                if (DBG) console.log("* last number =", lastNumber);
                stack.push(lastNumber * currentNumber);
            } else if (operation == '/') {
                let lastNumber = stack.pop();
                if (DBG) console.log("* last number =", lastNumber);
                stack.push(parseInt(lastNumber / currentNumber));
            }
            operation = currentChar;
            currentNumber = 0;
        }
    }
    let result = 0;
    while (!stack.length == 0) {
        result += stack.pop();
    }

    if (DBG) console.log("OUTPUT:", result);
    return result;
}

if (calculate("3+2*2") != 7) { console.log("FAIL"); return; } else { console.log("--> OK"); }
if (calculate(" 3/2 ") != 1) { console.log("FAIL"); return; } else { console.log("--> OK"); }