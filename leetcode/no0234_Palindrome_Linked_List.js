/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    
    let array = [];
    
    
    function recursiveCheck(node){
        
        if(node != null ) {
            array.push(node.val);
        } else {
            return;
        }
        
        if(node.next != null ) {
            recursiveCheck(node.next);
        }
        
    }
    
    recursiveCheck(head)
    
    let string1 = array.toString();
    let string2 = array.reverse().toString();
    if(string1 == string2) {
        return true;
    } else {
        return false;
    }
    
    
    
};