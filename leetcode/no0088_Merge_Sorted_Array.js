/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const DBG = true;
    //arr.splice(index, 0, item);
    if (DBG) console.log("INPUT: ", nums1);

    let lastIndex = m;
    for (let i = 0; i < nums2.length; i++) {
        let numA = nums2[i];
        if (DBG) console.log("i: ", i, "/", nums2.length);
        let swapped = false;
        for (let j = 0; j < nums1.length; j++) {
            let numB = nums1[j];
            if (DBG) console.log("check", numA, "<", numB);
            if (numA < numB) {
                swapped = true;
                nums1.pop();
                nums1.splice(j, 0, numA);
                lastIndex += 1
                console.log("lastIndex:", lastIndex)
                if (DBG) console.log(`[${j}]: ${numA} --> `, nums1);
                break;
            }
        }
        if (!swapped) {
            if (DBG) console.log("before: ", nums1, `<-- ${numA}, lastIndex:${lastIndex}`);
            nums1[lastIndex] = numA
            lastIndex += 1
            console.log("lastIndex:", lastIndex)
            if (DBG) console.log(" after: ", nums1, `<-- ${numA}`);
        }
        if (DBG) console.log("-----");
    }

    if (DBG) console.log("OUTPUT: ", nums1);
};

let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;
//let nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [4, 5, 6], n = 3;
//let nums1 = [1], m = 1, nums2 = [], n = 0

merge(nums1, m, nums2, n);
// ans: Output: [1,2,2,3,5,6]

