/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    let shiftCount = k % nums.length;
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let targetIndex = (i + shiftCount) % nums.length;
        //console.log(`move index from ${i} to ${targetIndex} `);
        let temp = nums[targetIndex];
        if (map.get(i) == null) {
            nums[targetIndex] = nums[i];
            map.set(targetIndex, temp);
        } else {
            nums[targetIndex] = map.get(i);
        }
        map.set(targetIndex, temp);
    }

    //console.log("OUTPUT:", nums);
};

rotate([1, 2, 3, 4, 5, 6, 7], 3);// expected: [5,6,7,1,2,3,4]
//rotate([1, 2, 3], 2);// Expected: [2,3,1]