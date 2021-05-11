/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {


    let maxAmountOfAppear = 0;
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (map[num] == null) {
            map[num] = 1;
        } else {
            map[num] += 1;
        }

        if (map[num] >= maxAmountOfAppear) {
            maxAmountOfAppear = map[num];
        }
    }

    let numArray = [];
    for (let i = 0; i < Object.keys(map).length; i++) {
        let key = Object.keys(map)[i];
        if (map[key] == maxAmountOfAppear) {
            numArray.push(key);
        }
    }


    let getDegree = (target) => {

        let front = 0;
        let end = nums.length - 1;
        for (let i = 0; i < nums.length; i++) {

            let firstNum = nums[front];
            let isMoved = false;
            if (firstNum != target) {
                front += 1;
                isMoved = true;
            }

            let lastNum = nums[end];
            if (lastNum != target) {
                end -= 1;
                isMoved = true;
            }

            if (isMoved != true) {
                break;
            }
        }

        return end - front + 1;

    }

    let min = null;
    for (let i = 0; i < numArray.length; i++) {
        let result = getDegree(numArray[i])
        if (min == null) {
            min = result;
        } else {
            if (result < min) {
                min = result;
            }
        }

    }


    return min;

};