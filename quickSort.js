function quickSort(arr, head, tail) {

    console.log(">> quickSort:", arr, head, tail);

    if (head >= tail || arr == null || arr.length <= 1) {
        return;
    }
    let pivotIndex = parseInt((head + tail) / 2);
    let i = head, j = tail, pivot = arr[pivotIndex];
    console.log("--> head:", head, "tail:", tail, "pivotIndex:", pivotIndex, "pivot:", pivot);
    while (i <= j) {
        while (arr[i] < pivot) {
            ++i;
        }
        console.log("arr[", i, "]=", arr[i], " >= ", pivot, " by pivotIndex:", pivotIndex);

        while (arr[j] > pivot) {
            --j;
        }
        console.log("arr[", j, "]=", arr[j], " <= ", pivot, " by pivotIndex:", pivotIndex);

        if (i < j) {
            console.log("!! Swap arr[", i, "]=", arr[i], "arr[", j, "]=", arr[j]);
            let t = arr[i];
            arr[i] = arr[j];
            arr[j] = t;
            ++i;
            --j;
        } else if (i == j) {
            ++i;
        }
    }
    console.log("check left...");
    quickSort(arr, head, j);
    console.log("check right...");
    quickSort(arr, i, tail);
}

let input = [1, 4, 8, 2, 55, 3, 4, 8, 6, 4, 0, 11, 34, 90, 23, 54, 77, 9, 2, 9, 4, 10];
quickSort(input, 0, input.length - 1);
