/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    console.log("INPUT:", nums);
    //bubbleSort(nums);
    quickSort(nums, 0, nums.length - 1);
    console.log("OUTPUT:", nums);
    return nums;
};

const DBG = false;

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

function swap(array, left, right) {
    if (left === right) {
        return;
    }
    if (DBG) console.log("+++ swap +++", array, "left [", left, "]=", array[left], "right [", right, "]=", array[right]);
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    if (DBG) console.log("--- swap ---", array, "left [", left, "]=", array[left], "right [", right, "]=", array[right]);
}

function partition(array, left, right, pivot) {
    if (DBG) console.log("+++ partition +++", array, "left [", left, "] right [", right, "], pivot=", pivot);
    while (left <= right) {
        // move left pointer to pos which value is greater than pivot.
        while (array[left] < pivot) {
            left++;
        }
        // move right pointer to pos which value is less than pivot.
        while (array[right] > pivot) {
            right--;
        }
        // If the left index is to the left of the right index.
        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }
    if (DBG) console.log("--- partition ---", array, "left [", left, "] right [", right, "], pivot=", pivot);
    return left;
}

let numberOfCall = 0;
function quickSort(array, left, right) {
    let indexOfCall = ++numberOfCall;
    if (DBG) console.log("#", indexOfCall++, "+++ quickSort +++", array, "left [", left, "]=", array[left], ", right [", right, "]=", array[right]);

    if (left >= right) {
        return;
    }

    let pivotIndex = parseInt((left + right) / 2);// Middle Index
    let pivot = array[pivotIndex];
    if (DBG) console.log(`+++ pivot +++ [${pivotIndex}]= ${pivot}`);

    let index = partition(array, left, right, pivot);
    if (DBG) console.log("index =>", index)
    if (DBG) console.log("--- quickSort ---", array, "left [", left, "]=", array[left], ", right [", right, "]=", array[right]);

    if (DBG) console.log("Sort part 1:", "left [", left, "]=", array[left], ", right [", index - 1, "]=", array[index - 1]);
    if (DBG) console.log("Sort part 2:", "left [", index, "]=", array[index], ", right [", right, "]=", array[right]);
    quickSort(array, left, index - 1);
    quickSort(array, index, right);
}


//sortArray([5, 2, 3, 1]);
sortArray([3, 2, 1]);