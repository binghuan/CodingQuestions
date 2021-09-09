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
var middleNode = function (head) {

    let node = head;
    let valArray = [];

    while (node != null) {
        valArray.push(node.val);
        node = node.next;
    }

    let middleIndex = parseInt(valArray.length / 2);
    node = head;
    let index = 0;
    while (node != null) {

        if (index == middleIndex) {
            return node;
        }

        index += 1;
        node = node.next;
    }
};