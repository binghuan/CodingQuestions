function swap(array, left, right) {
    if (left === right) {
        return;
    }
    console.log("+++ swap +++", array, "left [", left, "]=", array[left], "right [", right, "]=", array[right]);
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
    console.log("--- swap ---", array, "left [", left, "]=", array[left], "right [", right, "]=", array[right]);
}

function partition(array, left, right, pivot) {
    console.log("--- partition ---", array, "left [", left, "] right [", right, "], pivot=", pivot);
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
    console.log("--- partition ---", array, "left [", left, "] right [", right, "], pivot=", pivot);
    return left;
}

let numberOfCall = 0;
function quickSort(array, left, right) {
    let indexOfCall = ++numberOfCall;
    console.log("#", indexOfCall++, "+++ quickSort +++", array, "left [", left, "], right [", right, "]");

    if (left >= right) {
        return;
    }

    let pivotIndex = parseInt((left + right) / 2);// Middle Index
    let pivot = array[pivotIndex];
    console.log(`+++ pivot +++ [${pivotIndex}]= ${pivot}`);

    let index = partition(array, left, right, pivot);
    console.log("--- quickSort ---", array, "left [", left, "], right [", right, "]");

    quickSort(array, left, index - 1);
    quickSort(array, index, right);
}

//let input = [5, 3, 1, 2, 4];
let input = [5, 2, 3, 1];
console.log("INPUT  :", input);
quickSort(input, 0, input.length - 1);
console.log("OUOTPUT:", input);

// Reference: https://www.youtube.com/watch?app=desktop&v=SLauY6PpjW4&ab_channel=HackerRank
/*
-- Time Complexity --
Worst-case performance	O(n^2)
Best-case performance	O(n log n) or O(n)
Average performance	O(n log n)
*/