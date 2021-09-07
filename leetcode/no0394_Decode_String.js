/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    
    let stack = [];

    let ready2push = false;
    let tempString = "";
    for(let i =0; i< s.length; i++) {

        let char = s[i];
        if(char == "[") {
            stack.push(tempString);
            tempString = "";
        } else if (char == "]") {
            let count = parseInt(stack.pop());
            let temp = "";
            for(let j = 0; j< count ; j++) {
                temp = `${temp}${tempString}`;
            }
            tempString = temp;

        } else {
            tempString = `${tempString}${char}`;
        }

    }

};

let s = "3[a]2[bc]";
let s = "3[a2[c]]";

decodeString(s);