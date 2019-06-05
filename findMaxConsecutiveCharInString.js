// Write a function that find the maximum consecutive character in the string.   
// Example:   
// str = "aaabbaabbbaaaacdefgaaa"   
// char = "a"   
// function(str, char) => Output: 4   

function findMaxConsecutiveChar(str, char) {
    console.log("## INPUT: ", str, char);

    let count = 0;

    let maxCount = 0;
    for (let i = 0; i < str.length; i++) {

        let charInStr = str[i];
        if (charInStr == char) {
            count += 1;
            console.log("OK>", charInStr, count, maxCount);
            if (count > maxCount) {
                maxCount = count;
                console.log("set count: ", count, " -> maxCount", maxCount);
            }
        } else {
            if (count > maxCount) {
                maxCount = count;
                console.log("set count: ", count, " -> maxCount", maxCount);
            }
            count = 0;
            console.log("NG>", charInStr);
        }
    }

    console.log("## OUTPUT:", maxCount);
}

let input = "aaabbaabbbaaaacdefgaaa", char = "a";
findMaxConsecutiveChar(input, char);
input = "aaabbaabbbaaaacdefgaaaaa", char = "a";
findMaxConsecutiveChar(input, char);