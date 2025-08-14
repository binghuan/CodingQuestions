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
