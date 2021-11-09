/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {

    let valArray = [];

    let index = 0;
    while (head != null) {
        valArray.push({
            val: head.val,
            index: index
        });
        index += 1;
        head = head.next;
    }

    let size = valArray.length;
    valArray.sort((a, b) => {
        return (a.index + k) % size - (b.index + k) % size
    })

    function createNode() {
        let obj = valArray.shift();
        if (obj == null) {
            return null;
        } else {
            return {
                val: obj.val,
                next: createNode()
            }
        }
    }
    let node = createNode();
    return node;
};