/**
 * 1268. Search Suggestions System
 * Sort products and use binary search to locate the first index >= prefix,
 * then take up to 3 items starting there that still start with the prefix.
 * Time: O(n log n + L log n), Space: O(1) extra (excluding sort result storage).
 *
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
    // Sort lexicographically
    products.sort();

    // Lower bound: first index i where products[i] >= key (lexicographically)
    function lowerBound(arr, key, lo = 0) {
        let hi = arr.length;
        while (lo < hi) {
            const mid = (lo + hi) >>> 1;
            if (arr[mid] < key) lo = mid + 1; else hi = mid;
        }
        return lo;
    }

    const res = [];
    let start = 0; // search start index can only move forward as prefix grows
    let prefix = "";
    for (const ch of searchWord) {
        prefix += ch;
        start = lowerBound(products, prefix, start);
        const suggestions = [];
        for (let i = start; i < Math.min(start + 3, products.length); i++) {
            if (products[i].startsWith(prefix)) suggestions.push(products[i]); else break;
        }
        res.push(suggestions);
    }
    return res;
};

// -----------------
// Tiny test harness
// Run this file with `node leetcode/no1268_Search_Suggestions_System.js`
// -----------------
function runTests() {
    const cases = [
        {
            products: ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
            searchWord: "mouse",
            expect: [["mobile", "moneypot", "monitor"], ["mobile", "moneypot", "monitor"], ["mouse", "mousepad"], ["mouse", "mousepad"], ["mouse", "mousepad"]],
        },
        {
            products: ["havana"],
            searchWord: "havana",
            expect: [["havana"], ["havana"], ["havana"], ["havana"], ["havana"], ["havana"]],
        },
        {
            products: ["bags", "baggage", "banner", "box", "cloths"],
            searchWord: "bags",
            expect: [["baggage", "bags", "banner"], ["baggage", "bags", "banner"], ["baggage", "bags"], ["bags"]],
        },
    ];

    let pass = 0;
    for (let i = 0; i < cases.length; i++) {
        const { products, searchWord, expect } = cases[i];
        const got = suggestedProducts([...products], searchWord);
        const ok = JSON.stringify(got) === JSON.stringify(expect);
        if (ok) pass++;
        console.log(`Case ${i + 1}: ${ok ? '✓' : '✗'}`);
        if (!ok) {
            console.log('  expect:', JSON.stringify(expect));
            console.log('  got   :', JSON.stringify(got));
        }
    }
    console.log(`Passed ${pass}/${cases.length} cases.`);
}

if (typeof require !== 'undefined' && require.main === module) {
    runTests();
}

module.exports = { suggestedProducts };