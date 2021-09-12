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
var getDecimalValue = function (head) {
    let numArray = [];
    while (head != null) {
        numArray.push(head.val);
        head = head.next;
    }

    var digit = parseInt(numArray.join(""), 2);
    return digit;
};