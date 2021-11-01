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
var oddEvenList = function (head) {

    let oddValues = [];
    let evenValues = [];

    let index = 0;
    while (head != null) {
        if (index % 2 == 0) {
            evenValues.push(head.val);
        } else {
            oddValues.push(head.val);
        }
        index += 1;
        head = head.next;
    }

    let values = evenValues.concat(oddValues);
    function generateNode() {
        let value = values.shift();
        if (value != null) {
            return {
                val: value,
                next: generateNode()
            }
        } else {
            return null;
        }
    }

    let node = generateNode();
    return node;

};