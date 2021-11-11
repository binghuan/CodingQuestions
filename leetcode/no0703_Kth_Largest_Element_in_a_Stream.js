/**
 * @param {number} k
 * @param {number[]} nums
 */
let data = [];
let indexK = 0;
var KthLargest = function (k, nums) {
    data = [];
    indexK = k;
    data = data.concat(nums);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    data.push(val);
    data.sort((a, b) => {
        return b - a
    })
    return data[indexK - 1];
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */