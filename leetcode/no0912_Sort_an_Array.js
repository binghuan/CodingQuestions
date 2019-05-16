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

function quickSort(arr, head, tail) {

    //console.log(">> quickSort:", arr, head, tail);

    if (head >= tail || arr == null || arr.length <= 1) {
        return;
    }
    let pivotIndex = parseInt((head + tail) / 2);
    let i = head, j = tail, pivot = arr[pivotIndex];
    //console.log("--> head:", head, "tail:", tail, "pivotIndex:", pivotIndex, "pivot:", pivot);
    while (i <= j) {
        while (arr[i] < pivot) {
            ++i;
        }
        //console.log("arr[", i, "]=", arr[i], " >= ", pivot, " by pivotIndex:", pivotIndex);

        while (arr[j] > pivot) {
            --j;
        }
        //console.log("arr[", j, "]=", arr[j], " <= ", pivot, " by pivotIndex:", pivotIndex);

        if (i < j) {
            //console.log("!! Swap arr[", i, "]=", arr[i], "arr[", j, "]=", arr[j]);
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            ++i;
            --j;
        } else if (i == j) {
            ++i;
        }
    }
    //console.log("check left...");
    quickSort(arr, head, j);
    //console.log("check right...");
    quickSort(arr, i, tail);
}
