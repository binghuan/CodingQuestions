/**
 * @param {number} n                  // Number of cities/centers (1 … 2e5)
 * @param {number[]} orderCityList    // Destination city for each order (length m)
 * @return {number}                   // Minimum number of days required
 */
function minDeliveryTime(n, orderCityList) {
    // 1. Count orders for each city cnt[i]
    const cnt = new Array(n + 1).fill(0);          // 1-indexed
    for (const city of orderCityList) cnt[city]++;

    const m = orderCityList.length;
    let low = 1, high = 2 * m;                     // Binary search range

    // Check if "D days is feasible"
    const feasible = (D) => {
        let surplus = 0;      // Number of orders that need to be moved out
        let capacity = 0;     // Number of orders that other centers can take

        for (let i = 1; i <= n; i++) {
            if (cnt[i] > D) {
                surplus += cnt[i] - D;                   // Must move out
            } else {
                capacity += Math.floor((D - cnt[i]) / 2); // 2 days for 1 order
            }
        }
        return surplus <= capacity;                  // If can accommodate all ⇒ feasible
    };

    // 2. Binary search for minimum feasible days
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (feasible(mid)) {
            high = mid;                                // Try smaller
        } else {
            low = mid + 1;                             // Need larger
        }
    }
    return low;
}

/* ---------------- Test ---------------- */
console.log(
    minDeliveryTime(3, [1, 1, 3, 1, 1])
); // 3 (official example)

console.log(
    minDeliveryTime(4, [1, 2, 3, 4])
); // 1

console.log(
    minDeliveryTime(4, [3, 3, 1, 4, 2, 1])
); // 2 (official example)

console.log(
    minDeliveryTime(2, [1, 1, 1, 1, 1, 2])
); // 4

// Coding quest from Amazon
// **Code Question 2 – `minDeliveryTime`（配送中心排程）**

// Each city `1 … n` contains a **distribution centre** that can handle **one order at a time**.
// *Orders assigned to the same centre are processed sequentially* – a centre starts the next order only after finishing the previous one – but **different centres work in parallel**.
// 
// A delivery **within the same city** takes **1 day**.
// A delivery **to a different city** takes **2 days**.
// 
// You are given:
// 
// * an integer **`n`** – the number of cities (and hence centres)
// * an integer array **`orderCityList`**, where `orderCityList[i]` is the **destination city** of the *i-th* order
// 
// **Task** – Assign every order to one of the `n` centres so that **all orders are completed in the minimum possible number of days**. Return that minimum.
// 
// **Example**
// `n = 3`, `orderCityList = [1, 1, 3, 1, 1]`
// One optimal assignment:
// 
// * Centre 1: orders 1, 2, 4 → 3 days (all same-city)
// * Centre 2: order 5    → 2 days (different city)
// * Centre 3: order 3    → 1 day  (same city)
//   All orders finish after **3 days**; no schedule can do better, so the answer is 3.
// 
// **Function signature**
// 
// ```text
// int minDeliveryTime(int n, int orderCityList[])
// ```
// 
// **Returns** – the minimum number of days required to complete every order.
// 
// **Constraints**
// 
// * `1 ≤ n, |orderCityList| ≤ 2·10⁵`
// * `1 ≤ orderCityList[i] ≤ n`
