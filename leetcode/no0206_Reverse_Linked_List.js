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
var reverseList = function(head) {
    let numArray = [];
    
    let node = head;
    while (node != null) {
        numArray.push(node.val);
        node = node.next;
    }
   
    if(numArray.length == 0) {
        return null;
    }
    console.log("numArray: ", numArray);
    
    let nodeList = getNode(numArray);
    
    return nodeList;
};

function getNode(numArray) {
    let val = numArray.pop();
    let node = {
        val: val
    }
    if(numArray.length > 0) {
        node.next = getNode(numArray);
    }
    
    return node;
}