/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {

    while (head && head.val == val) head = head.next

    let backup = head;

    while (head != null && head.next != null) {

        if (head.next.val == val) {
            // link next node to the node after next node.
            head.next = head.next.next
        } else {

            // move to next node.
            head = head.next;
        }
    }

    return backup;
};