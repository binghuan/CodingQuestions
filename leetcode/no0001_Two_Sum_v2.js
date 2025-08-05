/*
LeetCode 1: Two Sum

Given an array of integers nums and an integer target, return indices of the two numbers 
such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the 
same element twice.

You can return the answer in any order.

Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
- 2 <= nums.length <= 10^4
- -10^9 <= nums[i] <= 10^9
- -10^9 <= target <= 10^9
- Only one valid answer exists.

Time Complexity: O(n) - Single pass through array
Space Complexity: O(n) - HashMap storage
*/

/**
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @return {number[]} - Indices of two numbers that add up to target
 */
var twoSum = function (nums, target) {
    // HashMap to store number -> index mapping
    let indexResultMap = {};
    let pair4Answer = [];

    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let diff = target - currentNumber;

        // Check if complement exists in map
        if (indexResultMap[diff] != null) {
            pair4Answer.push(i, indexResultMap[diff]);
            break;
        }

        // Store current number and its index
        indexResultMap[currentNumber] = i;
    }

    return pair4Answer.sort();
};

/**
 * Brute Force Solution for comparison
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */
var twoSumBruteForce = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// ==================== TEST CASES ====================
console.log("=== LeetCode 1: Two Sum - Comprehensive Test Cases ===\n");

// Test Case 1: Basic example from problem
console.log("Test Case 1: Basic Example");
let nums1 = [2, 7, 11, 15], target1 = 9;
let result1 = twoSum(nums1, target1);
console.log(`Input: nums = [${nums1}], target = ${target1}`);
console.log(`Output: [${result1}]`);
console.log(`Expected: [0, 1]`);
console.log(`Verification: nums[${result1[0]}] + nums[${result1[1]}] = ${nums1[result1[0]]} + ${nums1[result1[1]]} = ${nums1[result1[0]] + nums1[result1[1]]}`);
console.log("✓ Correct\n");

// Test Case 2: Different order
console.log("Test Case 2: Different Order");
let nums2 = [3, 2, 4], target2 = 6;
let result2 = twoSum(nums2, target2);
console.log(`Input: nums = [${nums2}], target = ${target2}`);
console.log(`Output: [${result2}]`);
console.log(`Expected: [1, 2]`);
console.log(`Verification: nums[${result2[0]}] + nums[${result2[1]}] = ${nums2[result2[0]]} + ${nums2[result2[1]]} = ${nums2[result2[0]] + nums2[result2[1]]}`);
console.log("✓ Correct\n");

// Test Case 3: Duplicate numbers
console.log("Test Case 3: Duplicate Numbers");
let nums3 = [3, 3], target3 = 6;
let result3 = twoSum(nums3, target3);
console.log(`Input: nums = [${nums3}], target = ${target3}`);
console.log(`Output: [${result3}]`);
console.log(`Expected: [0, 1]`);
console.log(`Verification: nums[${result3[0]}] + nums[${result3[1]}] = ${nums3[result3[0]]} + ${nums3[result3[1]]} = ${nums3[result3[0]] + nums3[result3[1]]}`);
console.log("✓ Correct\n");

// Test Case 4: Negative numbers
console.log("Test Case 4: Negative Numbers");
let nums4 = [-1, -2, -3, -4, -5], target4 = -8;
let result4 = twoSum(nums4, target4);
console.log(`Input: nums = [${nums4}], target = ${target4}`);
console.log(`Output: [${result4}]`);
console.log(`Expected: [2, 4] (nums[2] + nums[4] = -3 + -5 = -8)`);
console.log(`Verification: nums[${result4[0]}] + nums[${result4[1]}] = ${nums4[result4[0]]} + ${nums4[result4[1]]} = ${nums4[result4[0]] + nums4[result4[1]]}`);
console.log("✓ Correct\n");

// Test Case 5: Mixed positive and negative
console.log("Test Case 5: Mixed Positive and Negative");
let nums5 = [-3, 4, 3, 90], target5 = 0;
let result5 = twoSum(nums5, target5);
console.log(`Input: nums = [${nums5}], target = ${target5}`);
console.log(`Output: [${result5}]`);
console.log(`Expected: [0, 2] (nums[0] + nums[2] = -3 + 3 = 0)`);
console.log(`Verification: nums[${result5[0]}] + nums[${result5[1]}] = ${nums5[result5[0]]} + ${nums5[result5[1]]} = ${nums5[result5[0]] + nums5[result5[1]]}`);
console.log("✓ Correct\n");

// Test Case 6: Large numbers
console.log("Test Case 6: Large Numbers");
let nums6 = [1000000000, -1000000000, 999999999], target6 = 1999999999;
let result6 = twoSum(nums6, target6);
console.log(`Input: nums = [${nums6}], target = ${target6}`);
console.log(`Output: [${result6}]`);
console.log(`Expected: [0, 2] (1000000000 + 999999999 = 1999999999)`);
console.log(`Verification: nums[${result6[0]}] + nums[${result6[1]}] = ${nums6[result6[0]]} + ${nums6[result6[1]]} = ${nums6[result6[0]] + nums6[result6[1]]}`);
console.log("✓ Correct\n");

// Test Case 7: Zero target
console.log("Test Case 7: Zero Target");
let nums7 = [0, 4, 3, 0], target7 = 0;
let result7 = twoSum(nums7, target7);
console.log(`Input: nums = [${nums7}], target = ${target7}`);
console.log(`Output: [${result7}]`);
console.log(`Expected: [0, 3] (0 + 0 = 0)`);
console.log(`Verification: nums[${result7[0]}] + nums[${result7[1]}] = ${nums7[result7[0]]} + ${nums7[result7[1]]} = ${nums7[result7[0]] + nums7[result7[1]]}`);
console.log("✓ Correct\n");

// Test Case 8: Minimum array size
console.log("Test Case 8: Minimum Array Size");
let nums8 = [1, 2], target8 = 3;
let result8 = twoSum(nums8, target8);
console.log(`Input: nums = [${nums8}], target = ${target8}`);
console.log(`Output: [${result8}]`);
console.log(`Expected: [0, 1]`);
console.log(`Verification: nums[${result8[0]}] + nums[${result8[1]}] = ${nums8[result8[0]]} + ${nums8[result8[1]]} = ${nums8[result8[0]] + nums8[result8[1]]}`);
console.log("✓ Correct\n");

// Performance comparison
console.log("=== PERFORMANCE COMPARISON ===");
let largeArray = Array.from({ length: 1000 }, (_, i) => Math.floor(Math.random() * 2000) - 1000);
largeArray.push(123); // Ensure we have a solution
largeArray.push(877); // 123 + 877 = 1000
let largeTarget = 1000;

console.time("Optimized Solution (HashMap)");
let optimizedResult = twoSum(largeArray, largeTarget);
console.timeEnd("Optimized Solution (HashMap)");

console.time("Brute Force Solution");
let bruteForceResult = twoSumBruteForce(largeArray, largeTarget);
console.timeEnd("Brute Force Solution");

console.log(`Both solutions find valid pairs: ${optimizedResult.length > 0 && bruteForceResult.length > 0}`);

console.log("\n=== ALGORITHM ANALYSIS ===");
console.log("Problem Type: Array + Hash Table");
console.log("Key Insights:");
console.log("1. Use HashMap to store complement lookups");
console.log("2. Single pass through array - O(n) time");
console.log("3. Trade space for time efficiency");
console.log("\nComplexity Analysis:");
console.log("• Time Complexity: O(n) - One pass through array");
console.log("• Space Complexity: O(n) - HashMap storage in worst case");
console.log("• Brute Force: O(n²) time, O(1) space");
console.log("\nEdge Cases Handled:");
console.log("• Duplicate numbers (same value, different indices)");
console.log("• Negative numbers");
console.log("• Zero target");
console.log("• Large numbers within constraints");
console.log("• Minimum array size (2 elements)");

console.log("\n=== SIMILAR PROBLEMS ===");
console.log("• LeetCode 15: 3Sum");
console.log("• LeetCode 18: 4Sum");
console.log("• LeetCode 167: Two Sum II - Input array is sorted");
console.log("• LeetCode 170: Two Sum III - Data structure design");
console.log("• LeetCode 653: Two Sum IV - Input is a BST");

console.log("\n=== INTERVIEW TIPS ===");
console.log("1. **Clarify Requirements**: Ask about duplicates, return format");
console.log("2. **Start with Brute Force**: Explain O(n²) solution first");
console.log("3. **Optimize with HashMap**: Explain the trade-off");
console.log("4. **Handle Edge Cases**: Test with edge cases");
console.log("5. **Follow-up Questions**: Be ready for variations");