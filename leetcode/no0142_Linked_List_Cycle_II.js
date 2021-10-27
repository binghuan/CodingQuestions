/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {

    let index = 0;

    while (head != null && head.next != null) {

        if (head.index != null) {
            return head;
        }

        head.index = index;
        index += 1;
        head = head.next;
    }

    return null;

};