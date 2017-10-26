/* 
283. Move Zeroes

Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
Credits:
Special thanks to @jianchao.li.fighter for adding this problem and creating all test cases.


*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    
    var done = false;
    var index = 0;
    var allowCount = nums.length;
   do {

        //console.log(index , " Before :: -> nums:", nums, nums[index]);
        if(nums[index] === 0) {
            for(var i=index; i< nums.length ; i++) {
                //console.log(index, ":: (i + 1) < nums.length", (i + 1) < nums.length, nums);
                if( (i + 1) < nums.length) {
                    //console.log(index, ":: move next to here!", nums[i+1]);
                    nums[i] = nums[i+1];
                }  else {
                    //console.log(index, ":: set zero directly");
                    nums[i] = 0;
                }
            }
        } 

        //console.log(index , "after :: -> nums:", nums);
        if(nums[index] === 0 && allowCount !=0) {
            allowCount-=1;
        } else {
            index+=1;
        }
        
   } while(index < nums.length);


};
