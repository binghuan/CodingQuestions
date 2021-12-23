/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

    let values = [];

    function listAllValuesFromList(list) {
        while (list != null) {
            values.push(list.val);
            list = list.next;
        }
    }

    // Step 1: concat all values from linked list.
    for (let i = 0; i < lists.length; i++) {
        listAllValuesFromList(lists[i]);
    }

    // Step 2: Sort values
    values.sort((a, b) => {
        return a - b;
    })

    // Step 3: Generate a new linked list
    let linkedList = (function createNode() {
        let value = values.shift();
        if (value != null) {
            return {
                val: value,
                next: createNode()
            }
        } else {
            return null;
        }
    })()
    return linkedList;
};

let input = [
    {
        val: 1,
        next: {
            val: 2
        }
    },
    {
        val: 3,
        next: {
            val: 4
        }
    }
]

mergeKLists(input)