/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var checkIfExist = function(arr) {
    
    for(let i =0; i< arr.length; i++) {
        let number = arr[i];
        if(number != 0) {
            let index = arr.indexOf(number/2) ;
            if(index != -1) {
                console.log("i", i, "index:", index, "==", arr[index], number, arr[index] == number);
                if(arr[index] == number/2) {
                    return true;
                }
            }
        } else {
            let index = arr.indexOf(number * 2);
            if(index != -1 && index != i) {
                return true;
            }
        }
        
    }
    
    return false;
};