/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {

    let candidates = [];
    let lengthA = k;
    if (nums1.length < k) {
        lengthA = nums1.length;
    }

    let lengthB = k;
    if (nums2.length < k) {
        lengthB = nums2.length;
    }

    for (let i = 0; i < lengthA; i++) {
        let numA = nums1[i];
        for (let j = 0; j < lengthB; j++) {
            let numB = nums2[j];
            let sum = numA + numB;
            candidates.push([numA, numB]);
        }
    }

    candidates.sort((a, b) => {
        let sumA = a[0] + a[1];
        let sumB = b[0] + b[1];
        return sumA - sumB;
    })

    return candidates.slice(0, k);
};