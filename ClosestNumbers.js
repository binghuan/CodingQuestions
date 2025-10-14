/*
### **Description**

Given an **unsorted array** of length `N`, find the **gap** between each element `nums[i]` and the **first smaller element** `nums[j]` **to its right** (`i < j`).
If no smaller element exists to the right, the gap is `0`.

The **gap** is defined as the **distance in indices** (`j - i`) between the current element and the first smaller element to its right.

---

### **Example 1**

**Input:**
`nums = [73, 74, 75, 71, 69, 72, 76, 73]`

**Output:**
`[3, 2, 1, 1, 0, 0, 1, 0]`

**Explanation:**

* For `73`, the first smaller element to the right is `71` at index 3 → gap = `3`.
* For `74`, the first smaller element to the right is `71` at index 3 → gap = `2`.
* For `75`, the first smaller element to the right is `71` at index 3 → gap = `1`.
* For `71`, the first smaller element to the right is `69` at index 4 → gap = `1`.
* For `69`, no smaller element → gap = `0`.
* For `72`, no smaller element → gap = `0`.
* For `76`, the first smaller element to the right is `73` at index 7 → gap = `1`.
* For `73`, no smaller element → gap = `0`.

---

### **Example 2**

**Input:**
`nums = [30, 40, 50, 60]`
**Output:**
`[0, 0, 0, 0]`

---

### **Example 3**

**Input:**
`nums = [60, 30, 20]`
**Output:**
`[1, 1, 0]`

---

### **Constraints**

* `1 <= nums.length <= 10⁵`
* `0 <= nums[i] <= 100`

---

### **💡 Solution Approach**

After sorting, the minimum absolute difference between any two numbers will definitely appear between adjacent elements.

1. One pass to find the minimum difference.
2. Another pass to collect all adjacent pairs with that difference.
3. Since the array is already sorted, the output is automatically in ascending order.

This is one of the most common interview questions (LeetCode 1200 type).
Time complexity: O(n log n), Space complexity: O(1).

---
*/

function minimumAbsDifference(numbers) {
    // 1️⃣ Sort the array first (because adjacent differences are most likely to be minimal)
    numbers.sort((a, b) => a - b);

    let minDiff = Infinity;
    const result = [];

    // 2️⃣ Find the minimum difference
    for (let i = 1; i < numbers.length; i++) {
        const diff = numbers[i] - numbers[i - 1];
        if (diff < minDiff) {
            minDiff = diff;
        }
    }

    // 3️⃣ Scan again to collect all pairs with the same minimum difference
    for (let i = 1; i < numbers.length; i++) {
        const diff = numbers[i] - numbers[i - 1];
        if (diff === minDiff) {
            result.push([numbers[i - 1], numbers[i]]);
        }
    }

    // 4️⃣ Output results
    for (const [a, b] of result) {
        console.log(a, b);
    }
}

// 🧪 Example tests
console.log("Example 1:");
minimumAbsDifference([6, 2, 4, 10]);
// Output:
// 2 4
// 4 6

console.log("Example 2:");
minimumAbsDifference([4, -2, -1, 3]);
// Output:
// -2 -1
// 3 4
