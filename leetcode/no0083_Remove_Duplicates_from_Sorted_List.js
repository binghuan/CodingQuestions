// link: https://leetcode.com/problems/remove-duplicates-from-sorted-list/

/*
Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
Example 2:

Input: 1->1->2->3->3
Output: 1->2->3

*/

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
var deleteDuplicates = function (head) {

    if (head == null) {
        return null;
    }

    let valueArray = [];
    while (head != null) {
        if (valueArray.indexOf(head.val) == -1) {
            valueArray.push(head.val);
        }

        head = head.next;
    }

    valueArray = valueArray.reverse();
    console.log("## OUTPUT: ", valueArray);

    let nodeList = getNode(valueArray);

    return nodeList;
};

function getNode(numArray) {
    let val = numArray.pop();
    let node = {
        val: val
    }
    if (numArray.length > 0) {
        node.next = getNode(numArray);
    }

    return node;
}