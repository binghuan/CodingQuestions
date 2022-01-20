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

let numArray = [];
var reverseList = function (head) {

    let node = head;
    while (node != null) {
        numArray.push(node.val);
        node = node.next;
    }
    if (numArray.length == 0) {
        return null;
    }
    let nodeList = getNode();
    return nodeList;
};

function getNode() {
    let val = numArray.pop();
    if (val != null) {
        return {
            val: val,
            next: getNode()
        }
    } else {
        return null;
    }
}