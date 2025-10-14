/*

## **Problem: Find Gap to Next Smaller Element**

### **Description**

You are given an unsorted array of integers `nums` of length `N`.
For each element `nums[i]`, find the **gap** (distance in indices) between `nums[i]` and the **first smaller element** that appears **after** it in the array (`i < j` and `nums[j] < nums[i]`).

If there is **no smaller element** to the right of `nums[i]`, then the gap for that position should be `0`.

Return an array of the same length as `nums`, where each element represents this gap value.

---

### **Example 1**

**Input:**
`nums = [73, 74, 75, 71, 69, 72, 76, 73]`

**Output:**
`[3, 2, 1, 1, 0, 0, 1, 0]`

**Explanation:**

* For `73`, the first smaller element to the right is `71` at index `3`, so gap = `3 - 0 = 3`.
* For `74`, the first smaller element to the right is `71` at index `3`, so gap = `3 - 1 = 2`.
* For `75`, the first smaller element to the right is `71` at index `3`, so gap = `3 - 2 = 1`.
* For `71`, the first smaller element to the right is `69` at index `4`, so gap = `4 - 3 = 1`.
* For `69`, there is no smaller element, so gap = `0`.
* For `72`, there is no smaller element, so gap = `0`.
* For `76`, the first smaller element to the right is `73` at index `7`, so gap = `7 - 6 = 1`.
* For `73`, there is no smaller element, so gap = `0`.

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
*/

// Solution 1: Brute Force (O(N^2) time complexity)
function gapToNextSmaller1(nums) {
  const n = nums.length;
  const res = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        res[i] = j - i;
        break; // 找到第一個更小的就結束
      }
    }
  }

  return res;
}

console.log(gapToNextSmaller1([73, 74, 75, 71, 69, 72, 76, 73]));
// [3, 2, 1, 1, 0, 0, 1, 0]

// Solution 2: Using Stack (O(N) time complexity)
function gapToNextSmaller2(nums) {
  const n = nums.length;
  const ans = new Array(n).fill(0);
  const stack = [];

  for (let i = n - 1; i >= 0; i--) {
    while (stack.length && nums[stack.at(-1)] >= nums[i]) stack.pop();
    if (stack.length) ans[i] = stack.at(-1) - i;
    stack.push(i);
  }

  return ans;
}

console.log(gapToNextSmaller2([73, 74, 75, 71, 69, 72, 76, 73]));
// [3, 2, 1, 1, 0, 0, 1, 0]