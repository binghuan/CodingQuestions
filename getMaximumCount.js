/**
 * After one operation of "select a subarray + add x to all elements",
 * maximize the number of elements with value == k, return this maximum count
 *
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
function getMaximumCount(arr, k) {
  const n = arr.length;

  let originK = 0;                  // Current number of elements that are already k (before operation)
  let prefixK = 0;                  // prefix_k = cumulative count of k up to current position

  // Statistics for each d = k - v (equivalent to adding x = d)
  const cnt = new Map();      // prefix_v
  const minBase = new Map();      // Kadane: minimum value of prefix_v so far
  const minOff = new Map();      // Kadane: prefix_k when minimum value occurred
  const bestGain = new Map();      // Maximum gain this d can bring

  for (const a of arr) {
    if (a === k) {                  // Encountered k → "-1 point" source & global prefix_k +1
      ++originK;
      ++prefixK;
      continue;
    }

    const d = k - a;                // To make a become k, must add d
    const c = (cnt.get(d) || 0) + 1;      // Update prefix_v
    cnt.set(d, c);

    const curDiff = c - prefixK;    // prefix_v - prefix_k

    if (!minBase.has(d)) {          // First time encountering this d
      // Use "previous position" as Kadane starting point
      bestGain.set(d, 1);           // curDiff - prevDiff is fixed at 1
      minBase.set(d, c - 1);
      minOff.set(d, prefixK);
    } else {
      const prevDiff = minBase.get(d) - minOff.get(d);
      const gain = curDiff - prevDiff;
      if (gain > bestGain.get(d)) bestGain.set(d, gain);

      // Update Kadane's minimum difference
      if (curDiff < prevDiff) {
        minBase.set(d, c);
        minOff.set(d, prefixK);
      }
    }
  }

  let maxGain = 0;
  for (const g of bestGain.values()) maxGain = Math.max(maxGain, g);

  return originK + maxGain;         // Original k count + best gain
}

/* ---------- Small Test ---------- */
console.log(getMaximumCount([2, 3, 2, 4, 3, 2], 2));   // 4
console.log(getMaximumCount([6, 4, 4, 6, 4, 4], 4));   // 6
console.log(getMaximumCount([5, 5, 5], 5));            // 3
console.log(getMaximumCount([1, 2, 3], 5));            // 1


// **Code Question 1 – `getMaximumCount`**

// Amazon recently launched a **“Play to Win”** game where users are given a chance to earn free gift vouchers.
// 
// The game works as follows:
// • You will be provided with an **array of integers `arr`** and an **integer `k`**.
// • You may choose **one sub-array** (contiguous segment) **at most once** and add an arbitrary integer **`x`** to **every element** in that sub-array.
// • Your goal is to **maximise the number of indices whose value equals `k`** after the single operation.
// • Return that **maximum frequency**.
// 
// **Example**
// `arr = [2, 3, 2, 4, 3, 2]`, `k = 2`
// Choose the sub-array `[4, 3]` (the two middle elements) and add `x = −2`.
// The array becomes `[2, 3, 2, 2, 1, 2]`.
// Now four positions contain the value `2`; this is optimal, so the answer is **4**.
// 
// **Function signature**
// 
// ```text
// int getMaximumCount(int arr[n], int k)
// ```
// 
// **Returns** – the maximum number of elements equal to `k` that can be achieved.
// 
// **Constraints**
// 
// * `1 ≤ n ≤ 2·10⁵`
// * `1 ≤ arr[i] ≤ 2·10⁵`
// * `1 ≤ k ≤ 2·10⁵`

// ---