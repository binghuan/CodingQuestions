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
        if(DBG)console.log("------------------------------------------------");
        return;
    }
    let indexOfPivot = parseInt((head + tail) / 2);
    let i = head, j = tail, pivot = numArray[indexOfPivot];
    if (DBG) console.log("--> head:", head, "tail:", tail, "indexOfPivot:", indexOfPivot, "pivot:", pivot);
    while (i <= j) {
        
        console.log("i:", i, "j:", j, "pivot:", pivot);
        while (numArray[i] < pivot) {
            if (DBG) console.log("!! check numArray[i] < pivot", numArray[i], pivot);
            let originali = i;
            ++i;
            if (DBG) console.log(`-> move i from ${originali} to ${i}`);
        }
        if (DBG) console.log("arr[i:", i, "]=", numArray[i], " >= ", pivot, " by indexOfPivot:", indexOfPivot);

        while (numArray[j] > pivot) {
            if (DBG) console.log("!! check numArray[j] > pivot: ", numArray[i], pivot);
            let originalJ = j;
            --j;
            if (DBG) console.log(`-> move j from ${originalJ} to ${j}`);
        }
        if (DBG) console.log("arr[j:", j, "]=", numArray[j], " <= ", pivot, " by indexOfPivot:", indexOfPivot);
        if (i < j) {
            if (DBG) console.log("!! Swap arr[", i, "]=", numArray[i], "arr[", j, "]=", numArray[j]);
            if (DBG) console.log("before => ",numArray);
            let temp = numArray[i];
            numArray[i] = numArray[j];
            numArray[j] = temp;
            if (DBG) console.log("after  => ",numArray);
            let originali = i;
            let originalJ = j;
            ++i;
            --j;
            if (DBG) console.log(`-> move i from ${originali} to ${i}`);
            if (DBG) console.log(`-> move j from ${originalJ} to ${j}`);
        } else if (i == j) {
            let originali = i;
            ++i;
            if (DBG) console.log(`-> move i from ${originali} to ${i}`);
        }
    }
    if (DBG) console.log("VV check left... head:", head, "j:", j);
    quickSort(numArray, head, j);
    if (DBG) console.log("VV check right... i:", i, "tail:", tail);
    quickSort(numArray, i, tail);
}

//sortArray([5, 2, 3, 1]);
sortArray([3,2,1]);