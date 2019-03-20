// link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let length = nums.length;
  let lastNum = '@';
  let i = 0;
  const DBG = false;
  while (i < nums.length) {
    let num = nums[i];
    if (DBG) console.log('check num:', num);

    if (lastNum != num) {
      lastNum = num;
      if (DBG) console.log('mark duplicate number:', lastNum);
      i++;
    } else if (lastNum == num) {
      if (DBG) console.log('Ready to remove num:', num);
      nums.splice(i, 1);
    } else {
      i++;
    }
  }

  console.log('## OUTPUT:', nums);
};

let nums = [1, 1, 2];
removeDuplicates(nums);