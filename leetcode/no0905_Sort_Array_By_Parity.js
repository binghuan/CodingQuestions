/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {

    let numsArray = [];
    if (A.length == 1) {
        return A;
    } else if (A.length == 2) {
        return A.sort((a, b) => {
            return a - b
        });
    }

    let result = [];
    for (let i = 0; i < A.length; i++) {
        let num1 = A[i]
        let num2 = 0;
        let numbers = [num1];
        if (A.length  > (i + 1)) {
            num2 = A[i + 1]
            numbers.push(num2);
        }
        console.log("check ", num1, num2);

        numsArray.push(
            {
                total: num1 + num2,
                numbers: numbers
            }
        );
        i = i + 1;
    };

    numsArray.sort((a, b) => {
        return b.total - a.total
    });
    console.log(numsArray);
    for (let i = 0; i < numsArray.length; i++) {
        if(numsArray[i].numbers.length > 1) {
            result.push(numsArray[i].numbers[0]);
            result.push(numsArray[i].numbers[1]);
            console.log("push 2:", numsArray[i]);
        } else {
            result.push(numsArray[i].numbers[0]);
            console.log("push 1:", numsArray[i]);
        }
        
    }
    console.log(result);
    return result;
};

//sortArrayByParity([3, 1, 2, 4]);
//sortArrayByParity([0, 2, 4]);
sortArrayByParity([0, 1, 3]);