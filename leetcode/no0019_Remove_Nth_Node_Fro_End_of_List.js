/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

    const DBG = false;
    function reverseLinkedList(head) {
        //console.log(">> reverseLinkedList");
        let prev = null;
        let next = null;
        let curr = head;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;

            // move to next node
            curr = next;
        }
        printLinkedList(prev);
        return prev;
    };

    function removeNthNodeFromLinkedList(head, n) {
        if (DBG) console.log(">> removeNthNodeFromLinkedList", n);
        let result = head;
        let curr = head;
        let depth = 1;
        if (curr != null && depth == n) {
            result = curr.next;
            depth += 1;
        } else {
            while (curr != null && curr.next != null) {
                if (depth + 1 == n) {
                    if (DBG) console.log("Remove n=", depth, "val=", curr.next.val);
                    curr.next = curr.next.next;
                    depth += 1;
                }
                curr = curr.next;
                depth += 1;
            }
        }
        printLinkedList(result);
        return result;
    }

    function printLinkedList(head) {
        let valArray = [];
        while (head != null) {
            valArray.push(head.val);
            head = head.next;
        }
        if (DBG) console.log("=>", valArray.join("->"));
    }

    let node = head;
    let reversedList = reverseLinkedList(node)
    let listAfterRemoved = removeNthNodeFromLinkedList(reversedList, n);
    let finalResult = reverseLinkedList(listAfterRemoved)

    return finalResult;
};