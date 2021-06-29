/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    
    let total = 0;
    for(let i =0; i< nums.length; i++) {
        let chars = String(nums[i]);
        if(String(chars).length %2 == 0) {
            total +=1;
        }
    }
    
    return total;
};