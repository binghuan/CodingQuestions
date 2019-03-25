/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    
    let node1 = head;
    let node2 = head;
    while (node1 != null && node1.next != null && 
           node2 !=null && node2.next != null) {
        
        node1 = node1.next;
        node2 = node2.next.next;
        
        if(node1 == node2) {
            return true;
        }
    }
    
    return false;
};