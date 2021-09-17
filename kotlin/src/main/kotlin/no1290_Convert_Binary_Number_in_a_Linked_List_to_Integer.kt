import ListNode.ListNode

fun main(args: Array<String>) {

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

            var numString: String = ""
            var node = head

            while (node != null) {
                numString += node.`val`
                node = node.next
            }

            var digit = Integer.parseInt(numString, 2)
            return digit
        }
    }
}