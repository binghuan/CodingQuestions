/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const DBG = false;
    let map = {};
    function link(start, end) {
        for (let i = start; i <= end; i++) {
            let node = map[i];
            if (node == null) {
                node = {
                    val: i,
                    next: null
                }
            }
            let lastNum = i - 1;
            if (lastNum >= start && map[lastNum] != null) {
                map[lastNum].next = node;
            }
            map[i] = node;
        }
    }

    // Step 1: Use Linked List to Solve the problem. 
    // So, we create the linked list first.
    link(newInterval[0], newInterval[newInterval.length - 1]);
    intervals.forEach((range) => {
        link(range[0], range[range.length - 1]);
    })

    function getNumsInLinkedList(node) {
        let nums = [];
        while (node != null) {
            nums.push(node.val);
            node = node.next;
        }
        return nums;
    }

    let result = [];
    let startNum = 0;
    let keys = Object.keys(map).sort((a, b) => {
        return a - b
    })

    // Step 2: Get Nums from linkedList
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        if (startNum != 0 && key <= startNum) {
            continue;
        }
        let nums = getNumsInLinkedList(map[key]);
        if (DBG) console.log("key=", key, "nums=", nums);
        let lastNum = nums[nums.length - 1];
        if (DBG) console.log("last Number = ", lastNum);
        startNum = lastNum;

        // Step 3: Place results by range.
        result.push([nums[0], lastNum]);
    }

    if (DBG) console.log("OUTPUT:", result);
    return result;
};

let intervals = [[1, 3], [6, 9]], newInterval = [2, 5]
insert(intervals, newInterval)
//Output: [[1,5],[6,9]]