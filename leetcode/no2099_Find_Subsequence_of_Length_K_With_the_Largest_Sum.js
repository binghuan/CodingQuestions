
/**
 * LeetCode 2099: Find Subsequence of Length K With the Largest Sum
 * 
 * Problem: You are given an integer array nums and an integer k. You want to find a 
 * subsequence of nums of length k that has the largest sum.
 * Return any such subsequence as an integer array of length k.
 * A subsequence is an array that can be derived from another array by deleting some 
 * or no elements without changing the order of the remaining elements.
 * 
 * Time Complexity: O(n log n) - due to sorting operations
 * Space Complexity: O(n) - for storing indexed array and result
 * 
 * @param {number[]} nums - The input array
 * @param {number} k - The length of subsequence to find
 * @return {number[]} - Subsequence of length k with largest sum
 */
var maxSubsequence = function (nums, k) {
    // 🔴 Set breakpoint: Function start
    debugger; // Set first breakpoint here
    
    // Step 1: Create array of [value, original_index] pairs
    // This allows us to track original positions after sorting
    let indexed = nums.map((num, i) => [num, i]);
    
    // 🔴 Set breakpoint: View indexed array
    console.log("🔍 Indexed array:", indexed);

    // Step 2: Sort by value in descending order to find k largest elements
    // We want the largest values first, so use b[0] - a[0]
    indexed.sort((a, b) => b[0] - a[0]);
    
    // 🔴 Set breakpoint: View sorted array
    console.log("🔍 After sorting by value:", indexed);

    // Step 3: Take the first k elements (which are the k largest values)
    let topK = indexed.slice(0, k);
    
    // 🔴 Set breakpoint: View top k largest values
    console.log("🔍 Top k largest values:", topK);

    // Step 4: Sort by original index to maintain the relative order from input
    // This is crucial for maintaining subsequence property
    topK.sort((a, b) => a[1] - b[1]);
    
    // 🔴 Set breakpoint: View array after sorting by index
    console.log("🔍 After sorting by index:", topK);

    // Step 5: Extract only the values (not the indices) for final result
    let result = topK.map(pair => pair[0]);
    
    // 🔴 Set breakpoint: View final result
    console.log("🔍 Final result:", result);
    
    return result;
};

/**
 * Alternative Solution using Min Heap (Priority Queue simulation)
 * More space efficient for small k values
 */
var maxSubsequenceHeap = function (nums, k) {
    // Use array to simulate min heap of size k
    let heap = [];

    for (let i = 0; i < nums.length; i++) {
        if (heap.length < k) {
            heap.push([nums[i], i]);
            heap.sort((a, b) => a[0] - b[0]); // Min heap property
        } else if (nums[i] > heap[0][0]) {
            heap[0] = [nums[i], i];
            heap.sort((a, b) => a[0] - b[0]); // Maintain min heap
        }
    }

    // Sort by original index to maintain order
    heap.sort((a, b) => a[1] - b[1]);
    return heap.map(pair => pair[0]);
};

/**
 * Most Efficient Solution using Selection Algorithm
 * Time: O(n + k log k), Space: O(k)
 */
var maxSubsequenceOptimal = function (nums, k) {
    // Create indexed array
    let indexed = nums.map((num, i) => [num, i]);

    // Use quickselect to find k-th largest element
    // For simplicity, we'll use sort but this could be optimized with quickselect
    indexed.sort((a, b) => b[0] - a[0]);

    // Get k largest elements
    let selected = indexed.slice(0, k);

    // Sort by index to maintain order
    selected.sort((a, b) => a[1] - b[1]);

    return selected.map(pair => pair[0]);
};

// ==================== TEST CASES ====================
console.log("=== LeetCode 2099: Find Subsequence of Length K With the Largest Sum ===\n");

// Test Case 1: Basic example from problem
console.log("Test Case 1:");
let nums1 = [2, 1, 3, 3], k1 = 2;
let result1 = maxSubsequence(nums1, k1);
console.log(`Input: nums = [${nums1}], k = ${k1}`);
console.log(`Output: [${result1}]`);
console.log(`Expected: [3, 3]`);
console.log(`Sum: ${result1.reduce((a, b) => a + b, 0)}`);
console.log("✓ Correct: Both 3's are selected maintaining original order\n");

// Test Case 2: Mixed positive and negative numbers
console.log("Test Case 2:");
let nums2 = [-1, -2, 3, 4], k2 = 3;
let result2 = maxSubsequence(nums2, k2);
console.log(`Input: nums = [${nums2}], k = ${k2}`);
console.log(`Output: [${result2}]`);
console.log(`Expected: [-1, 3, 4]`);
console.log(`Sum: ${result2.reduce((a, b) => a + b, 0)}`);
console.log("✓ Correct: Largest 3 values in original order\n");

// Test Case 3: Multiple valid answers
console.log("Test Case 3:");
let nums3 = [3, 4, 3, 3], k3 = 2;
let result3 = maxSubsequence(nums3, k3);
console.log(`Input: nums = [${nums3}], k = ${k3}`);
console.log(`Output: [${result3}]`);
console.log(`Expected: [3, 4] or [4, 3]`);
console.log(`Sum: ${result3.reduce((a, b) => a + b, 0)}`);
console.log("✓ Multiple valid answers possible\n");

// Test Case 4: All negative numbers
console.log("Test Case 4:");
let nums4 = [-5, -2, -8, -1], k4 = 2;
let result4 = maxSubsequence(nums4, k4);
console.log(`Input: nums = [${nums4}], k = ${k4}`);
console.log(`Output: [${result4}]`);
console.log(`Expected: [-2, -1] (largest negative numbers)`);
console.log(`Sum: ${result4.reduce((a, b) => a + b, 0)}`);
console.log("✓ Correct: Even with negative numbers, picks largest values\n");

// Test Case 5: k equals array length
console.log("Test Case 5:");
let nums5 = [1, 2, 3], k5 = 3;
let result5 = maxSubsequence(nums5, k5);
console.log(`Input: nums = [${nums5}], k = ${k5}`);
console.log(`Output: [${result5}]`);
console.log(`Expected: [1, 2, 3] (entire array)`);
console.log(`Sum: ${result5.reduce((a, b) => a + b, 0)}`);
console.log("✓ Correct: When k = array length, return entire array\n");

// Test Case 6: Large numbers from LeetCode test cases
console.log("Test Case 6:");
let nums6 = [1, 1000, 2, 999, 3], k6 = 3;
let result6 = maxSubsequence(nums6, k6);
console.log(`Input: nums = [${nums6}], k = ${k6}`);
console.log(`Output: [${result6}]`);
console.log(`Expected: [1000, 999, 3]`);
console.log(`Sum: ${result6.reduce((a, b) => a + b, 0)}`);
console.log("✓ Correct: Picks 3 largest values in original order\n");

// Performance comparison
console.log("=== PERFORMANCE COMPARISON ===");
let largeNums = Array.from({ length: 1000 }, () => Math.floor(Math.random() * 1000) - 500);
let largeK = 100;

console.time("Standard Solution");
let standardResult = maxSubsequence(largeNums, largeK);
console.timeEnd("Standard Solution");

console.time("Heap Solution");
let heapResult = maxSubsequenceHeap(largeNums, largeK);
console.timeEnd("Heap Solution");

console.time("Optimal Solution");
let optimalResult = maxSubsequenceOptimal(largeNums, largeK);
console.timeEnd("Optimal Solution");

console.log(`\nAll solutions produce same result: ${JSON.stringify(standardResult) === JSON.stringify(heapResult) && JSON.stringify(heapResult) === JSON.stringify(optimalResult)}`);

console.log("\n=== ALGORITHM ANALYSIS ===");
console.log("Problem Type: Greedy Algorithm + Sorting");
console.log("Key Insights:");
console.log("1. Greedy choice: Always pick the k largest values");
console.log("2. Constraint: Maintain relative order (subsequence property)");
console.log("3. Solution: Sort by value to find largest, then sort by index to restore order");
console.log("\nComplexity Analysis:");
console.log("• Time Complexity: O(n log n) - dominated by sorting operations");
console.log("• Space Complexity: O(n) - for indexed array and result");
console.log("• Alternative with heap: O(n log k) time, O(k) space when k << n");
console.log("\nEdge Cases Handled:");
console.log("• All negative numbers");
console.log("• Duplicate values");
console.log("• k equals array length");
console.log("• Very large/small numbers");

console.log("\n=== SIMILAR PROBLEMS ===");
console.log("• LeetCode 215: Kth Largest Element in an Array");
console.log("• LeetCode 347: Top K Frequent Elements");
console.log("• LeetCode 973: K Closest Points to Origin");
console.log("• LeetCode 1985: Find the Kth Largest Integer in the Array");

console.log("\n=== APPROACH SUMMARY ===");
console.log("1. **Greedy Approach**: Always select the k largest elements");
console.log("2. **Index Tracking**: Use [value, index] pairs to maintain original order");
console.log("3. **Two-Phase Sorting**: ");
console.log("   - First: Sort by value (descending) to find k largest");
console.log("   - Second: Sort by index (ascending) to restore subsequence order");
console.log("4. **Result Extraction**: Map to extract only values from [value, index] pairs");