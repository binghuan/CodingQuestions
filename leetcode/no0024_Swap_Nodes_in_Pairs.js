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
var swapPairs = function (head) {

    let values = [];
    while (head != null) {
        values.push(head.val);
        head = head.next;
    }

    for (let i = 0; i < values.length; i++) {
        let temp = values[i];
        if (values[i + 1] != null) {
            values[i] = values[i + 1];
            values[i + 1] = temp;
        }

        ++i;
    }

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