/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {

    let map = {};
    for(let i =0; i< arr.length; i++) { 
        let element = arr[i];
        if(map[element] == null) {
            map[element] = {
                indexes: [i], 
                value: element
            };
        } else {
            map[element].indexes.push(i);
        } 
    }
    
    let keys = Object.keys(map);
    let uniqueArr = [];
    keys.forEach((key) => {
        
        if(map[key].indexes.length == 1) {
            uniqueArr.push(map[key]);
        }
    })
    
    uniqueArr.sort((a,b) => {
        return a.index - b.index;
    })
    
    return uniqueArr[k-1]?uniqueArr[k-1].value:"";
};