function swap(array, left, right) {
    let temp = array[left];
    array[left] = array[right];
    array[right] = temp;
}

function partition(array, left, right, pivot) {
    console.log("+++ partition +++", array, "left=", left, "right=", right, "pivot=", pivot);
    while (left <= right) {
        while (array[left] < pivot) {
            left++;
        }
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            swap(array, left, right);
            left++;
            right--;
        }
    }

    console.log("--- partition ---", array, "left=", left, "right=", right, "pivot=", pivot);
    return left;
}

let numberOfCall = 0;
function quickSort(array, left, right) {

    let indexOfCall = ++numberOfCall;
    console.log("#", indexOfCall++, "+++ quickSort +++", array, "left=", left, "right=", right);

    if (left >= right) {
        return;
    }

    let pivot = array[parseInt((left + right) / 2)];

    let index = partition(array, left, right, pivot);

    quickSort(array, left, index - 1);
    quickSort(array, index, right);

    console.log("#", indexOfCall, "--- quickSort ---", array, "left=", left, "right=", right);
}

let input = [5, 3, 1, 2, 4];
console.log("INPUT  :", input);
quickSort(input, 0, input.length - 1);
console.log("OUOTPUT:", input);


// Reference: https://www.youtube.com/watch?app=desktop&v=SLauY6PpjW4&ab_channel=HackerRank