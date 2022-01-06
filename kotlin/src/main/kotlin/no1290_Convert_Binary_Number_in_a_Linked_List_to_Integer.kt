import ListNode.ListNode

fun main() {

    /**
     * Example:
     * var li = ListNode(5)
     * var v = li.`val`
     * Definition for singly-linked list.
     * class ListNode(var `val`: Int) {
     *     var next: ListNode? = null
     * }
     */
    class Solution {
        fun getDecimalValue(head: ListNode?): Int {

            var numString = ""
            var node = head

            while (node != null) {
                numString += node.`val`
                node = node.next
            }
            return Integer.parseInt(numString, 2)
        }
    }
}