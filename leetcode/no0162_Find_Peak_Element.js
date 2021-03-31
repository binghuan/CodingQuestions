/**
 * @param {number[]} nums
 * @return {number}
 */
 var findPeakElement = function(nums) {
  
    let maxNum = null;
    let index = -1;
    for(let i =0 ; i< nums.length; i++) {
        
        let num = nums[i];
        
        if(maxNum == null) {
            maxNum = num;
            index = i;
            
        } else if(num > maxNum) {
            maxNum = num;
            index = i;
        }
    }
    
    console.log("max: ", maxNum, "index:", index);
    return index
    
};


//let nums = [-2147483648];
let nums = [-2147483648,-2147483647];
findPeakElement(nums);