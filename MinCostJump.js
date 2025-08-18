// Coding quest from REAP
// cost: array of length n, cost[i] is cost at point i+1
// k: max jump length
function getMinimumCost(cost, k) {
  const n = cost.length;
  // deque implemented with arrays + head pointer to avoid O(n^2) shift
  const idx = [];   // store indices of dp (0..n)
  const val = [];   // store dp values
  let head = 0, tail = 0;

  // Start at point 0 with cost 0
  const push = (i, v) => {
    // maintain increasing val
    while (tail > head && val[tail - 1] >= v) tail--;
    idx[tail] = i;
    val[tail] = v;
    tail++;
  };
  const popExpired = (limit) => {
    while (head < tail && idx[head] < limit) head++;
  };

  push(0, 0); // dp[0] = 0

  let dpi = 0;
  for (let i = 1; i <= n; i++) {
    // only keep candidates in window [i-k, i-1]
    popExpired(i - k);
    // current best = min of window + cost at point i
    dpi = val[head] + cost[i - 1];
    push(i, dpi);
  }
  return dpi; // dp[n]
}

// Test function
function runTests() {
  console.log("=== Minimum Cost Jump Test Cases ===\n");

  // Test case 1: Basic case
  console.log("Test Case 1: Basic case");
  console.log("cost = [1, 3, 2, 4], k = 2");
  console.log("Expected: 7 (path: 0→1→3→4: 0+1+2+4=7)");
  console.log("Actual:", getMinimumCost([1, 3, 2, 4], 2));
  console.log();

  // Test case 2: Can jump to end in one go
  console.log("Test Case 2: Can jump to end directly");
  console.log("cost = [10, 15, 20], k = 3");
  console.log("Expected: 20 (path: 0→3: 0+20=20)");
  console.log("Actual:", getMinimumCost([10, 15, 20], 3));
  console.log();

  // Test case 3: Can only jump one step at a time
  console.log("Test Case 3: One step at a time");
  console.log("cost = [1, 2, 3, 4], k = 1");
  console.log("Expected: 10 (path: 0→1→2→3→4: 0+1+2+3+4=10)");
  console.log("Actual:", getMinimumCost([1, 2, 3, 4], 1));
  console.log();

  // Test case 4: Single element
  console.log("Test Case 4: Single element");
  console.log("cost = [5], k = 1");
  console.log("Expected: 5 (path: 0→1: 0+5=5)");
  console.log("Actual:", getMinimumCost([5], 1));
  console.log();

  // Test case 5: Cheaper detour path
  console.log("Test Case 5: Cheaper detour path");
  console.log("cost = [100, 1, 1, 1, 100], k = 2");
  console.log("Expected: 103 (path: 0→2→4→5: 0+1+1+100=102)");
  console.log("Actual:", getMinimumCost([100, 1, 1, 1, 100], 2));
  console.log();

  // Test case 6: Large jump distance
  console.log("Test Case 6: Large jump distance");
  console.log("cost = [1, 2, 3, 4, 5], k = 10");
  console.log("Expected: 5 (path: 0→5: 0+5=5, jump directly to end)");
  console.log("Actual:", getMinimumCost([1, 2, 3, 4, 5], 10));
  console.log();

  // Test case 7: Complex optimization case
  console.log("Test Case 7: Complex optimization case");
  console.log("cost = [2, 1, 3, 4, 2, 1, 5], k = 3");
  console.log("Expected: Find optimal path");
  console.log("Actual:", getMinimumCost([2, 1, 3, 4, 2, 1, 5], 3));
  console.log();

  // Test case 8: Edge case - empty array
  console.log("Test Case 8: Edge case - empty array");
  console.log("cost = [], k = 1");
  console.log("Expected: 0 (already at destination)");
  console.log("Actual:", getMinimumCost([], 1));
  console.log();

  // Test case 9: All costs are the same
  console.log("Test Case 9: All costs are the same");
  console.log("cost = [5, 5, 5, 5], k = 2");
  console.log("Expected: 10 (path: 0→2→4: 0+5+5=10)");
  console.log("Actual:", getMinimumCost([5, 5, 5, 5], 2));
  console.log();

  // Test case 10: Decreasing costs
  console.log("Test Case 10: Decreasing costs");
  console.log("cost = [10, 8, 6, 4, 2], k = 2");
  console.log("Expected: Find optimal path");
  console.log("Actual:", getMinimumCost([10, 8, 6, 4, 2], 2));
  console.log();
}

// Detailed verification function
function detailedTest() {
  console.log("=== Detailed Verification Test ===\n");
  
  // Manual calculation case: cost = [1, 3, 2, 4], k = 2
  console.log("Manual verification: cost = [1, 3, 2, 4], k = 2");
  console.log("Possible paths:");
  console.log("Path 1: 0→1→2→3→4 = 0+1+3+2+4 = 10");
  console.log("Path 2: 0→1→2→4 = 0+1+3+4 = 8");
  console.log("Path 3: 0→1→3→4 = 0+1+2+4 = 7 ← Optimal");
  console.log("Path 4: 0→2→3→4 = 0+3+2+4 = 9");
  console.log("Path 5: 0→2→4 = 0+3+4 = 7 ← Optimal");
  console.log("Actual result:", getMinimumCost([1, 3, 2, 4], 2));
  console.log();
}

// Performance test
function performanceTest() {
  console.log("=== Performance Test ===\n");
  
  // Ensure performance.now() is available in Node and browser environments
  if (typeof performance === 'undefined' && typeof require === 'function') {
    try {
      const { performance: nodePerformance } = require('perf_hooks');
      global.performance = nodePerformance;
    } catch (_) {
      // no-op: if perf_hooks is unavailable, skip timing
    }
  }

  const largeArray = Array(1000).fill(0).map(() => Math.floor(Math.random() * 100) + 1);
  
  console.log("Testing large array performance (1000 elements):");
  console.log("k = 10");
  
  const startTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());
  const result = getMinimumCost(largeArray, 10);
  const endTime = (typeof performance !== 'undefined' ? performance.now() : Date.now());
  
  console.log("Result:", result);
  console.log("Execution time:", (endTime - startTime).toFixed(2), "milliseconds");
  console.log();
}

// Run all tests
console.log("Starting test execution...\n");
runTests();
detailedTest();
runRecursiveTests();
performanceTest();
console.log("All tests completed!");

/**
 * Recursive top-down DP with memoization (O(n * k) time, O(n) space).
 * dp(i): minimum cost to reach position i (0..n), where cost[i-1] is the cost to land on i.
 * Recurrence: dp(0) = 0; dp(i) = min_{j in [max(0,i-k)..i-1]} dp(j) + cost[i-1].
 */
function getMinimumCostRecursive(cost, k) {
  const n = cost.length;
  const memo = new Map(); // memoization cache: i -> dp(i)

  function dp(i) {
    // Base case: reaching the start costs 0
    if (i === 0) return 0;
    if (memo.has(i)) return memo.get(i);

    let minCost = Infinity;
    // Try all jump sources from i-k to i-1 (bounded by 0)
    for (let j = Math.max(0, i - k); j < i; j++) {
      minCost = Math.min(minCost, dp(j) + cost[i - 1]);
    }
    memo.set(i, minCost);
    return minCost;
  }

  return dp(n);
}

// Additional tests for the recursive solution
function runRecursiveTests() {
  console.log("=== Recursive DP Tests ===\n");

  const cases = [
    { name: "Basic", cost: [1, 3, 2, 4], k: 2, expected: 7 },
    { name: "Direct jump", cost: [10, 15, 20], k: 3, expected: 20 },
    { name: "One step at a time", cost: [1, 2, 3, 4], k: 1, expected: 10 },
    { name: "Single element", cost: [5], k: 1, expected: 5 },
    { name: "Cheaper detour", cost: [100, 1, 1, 1, 100], k: 2, expected: 102 },
    { name: "Large jump distance", cost: [1, 2, 3, 4, 5], k: 10, expected: 5 },
    { name: "All same", cost: [5, 5, 5, 5], k: 2, expected: 10 },
  ];

  for (const tc of cases) {
    const rec = getMinimumCostRecursive(tc.cost, tc.k);
    const deque = getMinimumCost(tc.cost, tc.k);
    console.log(`${tc.name}: recursive=${rec}, deque=${deque}, expected≈${tc.expected ?? "n/a"}`);
    // Basic consistency check with deque method
    if (rec !== deque) {
      console.warn(`Mismatch detected for ${tc.name}: recursive=${rec}, deque=${deque}`);
    }
  }
  console.log();
}