/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);

    // Left pass: ans[i] = product of nums[0..i-1]
    let left = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = left;
        left *= nums[i];
    }

    // Right pass: multiply by product of nums[i+1..n-1]
    let right = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= right;
        right *= nums[i];
    }

    return ans;
};

// --- Test cases ---
function runTests() {
    const cases = [
        { nums: [1, 2, 3, 4], expect: [24, 12, 8, 6] },
        { nums: [-1, 1, 0, -3, 3], expect: [0, 0, 9, 0, 0] },
        { nums: [2, 3, 4, 5], expect: [60, 40, 30, 24] },
        { nums: [0, 0], expect: [0, 0] },
        { nums: [1, 0], expect: [0, 1] },
    ];
    let pass = 0;
    for (let { nums, expect } of cases) {
        const got = productExceptSelf(nums);
        const ok = JSON.stringify(got) === JSON.stringify(expect);
        if (ok) pass++;
        console.log(`nums=${JSON.stringify(nums)} expect=${JSON.stringify(expect)} got=${JSON.stringify(got)} ${ok ? '✓' : '✗'}`);
    }
    console.log(`Passed ${pass}/${cases.length} cases.`);
}

if (typeof require !== 'undefined' && require.main === module) {
    runTests();
}

module.exports = { productExceptSelf };

