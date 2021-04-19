/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {

    const DBG = false;
    if (DBG) console.log("INPUT:", n, k);
    let nums = [];
    for (let i = 0; i < n; i++) {
        nums[i] = i + 1;
    }
    if (DBG) console.log("nums:", nums);
    let result = [];
    let temp = [];

    function helper(numbers, temp, index, quota) {

        if (DBG) console.log(`#${index}: quota=${quota}`);
        if (quota == 0) {
            result.push(temp.slice(0));
            if (DBG) console.log("push", temp);
            if (DBG) console.log("-----> answer: ", result);
            return;
        }

        for (let j = index; j < numbers.length; j++) {
            let num = numbers[j];
            if (DBG) console.log(`index = ${index}, take ${num}`);
            if (DBG) console.log(`push ${num} to `, temp);
            temp.push(num);
            if (DBG) console.log("temp = ", temp);
            let nextIndex = j + 1;
            helper(numbers, temp, nextIndex, quota - 1);
            temp.pop();
            if (DBG) console.log("roll back temp => ", temp);
        }
    };
    helper(nums, temp, 0, k);

    if (DBG) console.log("OUTPUT:", result);
    return result;
};

//let n = 1, k = 1;
let n = 4, k = 2;
//combine(n, k);


//let n = 1, k = 1;
let n = 4, k = 2;
combine(n, k);
