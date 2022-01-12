/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let values = [];
    let node = head;
    while (node != null) {
        values.push(node.val);
        node = node.next;
    }
    let maxSum = 0;
    while (values.length > 0) {
        let sum = values.shift() + values.pop();
        if (sum > maxSum) {
            maxSum = sum;
        }
    }
    return maxSum;
};