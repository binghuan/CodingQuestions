/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {

    let numMap = {};

    while (head != null) {
        let val = head.val;
        if (numMap[val] != null) {
            numMap[val] = numMap[val] + 1;
        } else {
            numMap[val] = 1;
        }
        head = head.next;
    }

    let result = [];
    let values = Object.keys(numMap);
    values.forEach((value) => {
        if (numMap[value] <= 1) {
            result.push(value);
        }
    });

    result.sort((a, b) => {
        return a - b;
    });

    function createNode() {
        let value = result.shift();
        if (value != null) {
            return {
                val: value,
                next: createNode()
            }
        } else {
            return null;
        }
    }

    return createNode();
};