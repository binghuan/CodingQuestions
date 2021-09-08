/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    console.log("INPUT:", nums, k);
    let q = [];
    let ans = [];

    for (let i = 0; i < k; i++) {
        while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
            console.log("q = ", q);
            q.pop();
        }
        q.push(i);
    }
    ans.push(nums[q[0]]);

    console.log("================");
    console.log("final q = ", q);
    console.log("ans = ", ans);

    for (let i = k; i < nums.length; i++) {
        //firstly we would check if the higest 
        // element in the deque lies in the current window
        if (q[0] <= i - k) {
            q.shift();
        }

        //now we do the same which we did for the first k elements
        while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        ans.push(nums[q[0]]);
    }
    return ans;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// Output: [3,3,5,5,6,7]

// reference: https://leetcode.com/problems/sliding-window-maximum/discuss/1448050/Dequeue-solution-O(N)-time-and-O(K)-space-with-explanation