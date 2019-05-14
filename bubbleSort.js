// reference: https://zh.wikipedia.org/zh-tw/%E5%86%92%E6%B3%A1%E6%8E%92%E5%BA%8F

function bubbleSort(arr) {

    console.log("## INPUT: ", arr);

    for (let i = 0; i < arr.length -1 ; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            console.log("check arr[",j,"]:", arr[j], "arr[",j+1,"]:", arr[j+1]);
            if(arr[j] > arr[j+1]) {
                let temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
                console.log("DO SWAP --> ", arr);
            }
        }
    }

    console.log("## OUTPUT: ", arr);
}

let input = [5, 4, 3, 2, 1];
bubbleSort(input);