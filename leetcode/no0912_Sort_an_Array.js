/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {


    //bubbleSort(nums);
    quickSort(nums, 0, nums.length - 1);

    return nums;

};

// Solution: Bubble Sort
function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1; j++) {

            if (nums[j] > nums[j + 1]) {
                let temp = nums[j];
                nums[j] = nums[j + 1];
                nums[j + 1] = temp;
            }
        }
    }
}

function quickSort(numArray, head, tail) {
    const DBG = true;

    if (DBG) console.log(">> quickSort:", numArray, "head: ", head, "tail: ", tail);

    if (head >= tail || numArray == null || numArray.length <= 1) {
        return;
    }
    let indexOfPivot = parseInt((head + tail) / 2);
    let i = head, j = tail, pivot = numArray[indexOfPivot];
    if (DBG) console.log("--> head:", head, "tail:", tail, "pivotIndex:", indexOfPivot, "pivot:", pivot);
    while (i <= j) {
        while (numArray[i] < pivot) {
            let originali = i;
            ++i;
            console.log(`Move head from ${originali} to ${i}`);
        }
        if (DBG) console.log("arr[i:", i, "]=", numArray[i], " >= ", pivot, " by pivotIndex:", indexOfPivot);

        while (numArray[j] > pivot) {
            let originalJ = j;
            --j;
            console.log(`Move tail from ${originalJ} to ${j}`);
        }
        if (DBG) console.log("arr[j:", j, "]=", numArray[j], " <= ", pivot, " by pivotIndex:", indexOfPivot);

        if (i < j) {
            if (DBG) console.log("!! Swap arr[", i, "]=", numArray[i], "arr[", j, "]=", numArray[j]);
            let t = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = t;
            ++i;
            --j;
        } else if (i == j) {
            ++i;
        }
    }
    if (DBG) console.log("check left...");
    quickSort(numArray, head, j);
    if (DBG) console.log("check right...");
    quickSort(numArray, i, tail);
}

sortArray([5, 2, 3, 1]);