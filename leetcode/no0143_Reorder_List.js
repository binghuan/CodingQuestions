/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    let node = head;
    let index = 0;
    let map = {};
    // Step 1: Create map to record every node's address
    while (node != null) {
        map[index] = node;
        node = node.next;
        index += 1;
    }

    // Step 2: Change Pointer for Next Node.
    let size = Object.keys(map).length;
    let indexN = -1;
    for (let i = 0; i < parseInt(size / 2); i++) {
        indexN = size - 1 - i;
        map[indexN].next = null;
        map[i].next = null;
        map[i].next = map[indexN];
        map[indexN].next = map[i + 1];
        map[i + 1].next = null;
    }
};