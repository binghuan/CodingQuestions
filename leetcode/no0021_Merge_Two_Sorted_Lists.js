// link: https://leetcode.com/problems/merge-two-sorted-lists/
/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    
    let result = l1;
    let numArray = [];
    
    let node = l1;
    while (node != null) {
        numArray.push(node.val);
        node = node.next;
    }
    node = l2;
    while (node != null) {
        numArray.push(node.val);
        node = node.next;
    }
    
    numArray = numArray.sort(function(a,b){return b-a;});
   
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