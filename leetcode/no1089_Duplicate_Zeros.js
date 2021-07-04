/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {

    function moveElements(arr, from) {
        console.log(">> ", arr);
        for (let i = arr.length - 1; i > from; i--) {
            arr[i] = arr[i-1];
        }
        console.log(">> ", arr);
    }

    let bypass = false;
    for(let i =0; i< arr.length; i++) {
        if(arr[i]== 0) {
            console.log("Got arr[", i,"] == 0");
            if(bypass == false) {
                moveElements(arr, i);
                bypass = true;
            } else {
                console.log("bypass index:", i);
                bypass = false;
                continue;
            }
        }
    }

    console.log("OUTPUT:", arr);
};

var Input = [1, 0, 2, 3, 0, 4, 5, 0];
duplicateZeros(Input);
var Input = [1,2,3];
duplicateZeros(Input);